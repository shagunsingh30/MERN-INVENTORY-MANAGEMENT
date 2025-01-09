/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  UpdateProductAction,
} from "../store/reducers/product.reducer";

const UpdateProduct = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.currProduct);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [imageUrl, setImageUrl] = useState(product.image);
  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setPrice(product.price || "");
      setImageUrl(product.image || "");
    }
  }, [isOpen, product]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for updating the product
    dispatch(
      UpdateProductAction({
        _id: product._id,
        name,
        price,
        image: imageUrl,
        onSuccess: () => {
          dispatch(fetchProducts());
          // dispatch(setCurrentProduct(newProduct));
        },
      })
    );
    console.log("Product Updated:", {
      _id: product._id,
      name,
      price,
      imageUrl,
    });
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            🔄 Update Product
          </h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-700 dark:text-gray-400"
          >
            <IoMdClose />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
