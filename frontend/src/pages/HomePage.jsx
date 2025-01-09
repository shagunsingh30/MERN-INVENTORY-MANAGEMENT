import { IoMdCreate, IoMdTrash } from "react-icons/io";
import UpdateProduct from "../components/UpdateProduct";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteProduct,
  fetchProducts,
  setCurrentProduct,
} from "../store/reducers/product.reducer.js";
import DeleteConfirmation from "../components/DeleteProduct.jsx";
import NoProducts from "../components/NoProducts.jsx";
// Example product data

const HomePage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  // const [currProd, setCurrProd] = useState({});
  const currProd = useSelector((state) => state.products.currProduct);
  const ProductsRedux = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const handleToggleModal = (product) => {
    dispatch(setCurrentProduct(product));
    setIsModalOpen(!isModalOpen);
  };
  const handleDelete = () => {
    dispatch(
      DeleteProduct({
        _id: currProd._id,
        name: currProd.name,
        price: currProd.price,
        image: currProd.image,
        onSuccess: () => {
          dispatch(fetchProducts());
          setIsDeleteModalOpen(false);
        },
      })
    );
  };
  return ProductsRedux.length == 0 ? (
    <NoProducts />
  ) : (
    <div className="w-full bg-gray-100 dark:bg-gray-700 px-4 py-6">
      <h1 className="uppercase text-blue-600 dark:text-blue-500 font-bold font-ribeye text-3xl text-center mb-8">
        🛍️ Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ProductsRedux.map((product) => (
          <div
            key={product._id}
            className="bg-white border-2 border-gray-500 dark:bg-indigo-500 rounded-lg shadow-lg dark:shadow-2xl dark:border-3 dark:border-cyan-200 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-2">
              <h2 className="text-xl font-semibold text-lightText dark:text-darkText">
                {product.name}
              </h2>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                ${product.price}
              </p>
              <div className="flex space-x-3 items-center mt-4">
                {/* Update Button */}
                <button
                  onClick={() => handleToggleModal(product)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                >
                  <IoMdCreate className="text-2xl" />
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => {
                    dispatch(setCurrentProduct(product));
                    setIsDeleteModalOpen(true);
                  }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-300"
                >
                  <IoMdTrash className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <UpdateProduct
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        // product={currProd}
      />
      <DeleteConfirmation
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        productName={currProd?.name}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default HomePage;
