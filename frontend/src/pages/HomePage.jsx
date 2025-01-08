import { IoMdCreate, IoMdTrash } from "react-icons/io";
import UpdateProduct from "../components/UpdateProduct";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProduct } from "../store/reducers/product.reducer.js";
// Example product data

const HomePage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currProd, setCurrProd] = useState({});
  const ProductsRedux = useSelector((state) => state.products.products);
  const handleToggleModal = (product) => {
    setCurrProd(product);
    dispatch(setCurrentProduct(product));
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-700 px-4 py-6">
      <h1 className="uppercase text-blue-600 dark:text-blue-500 font-bold font-ribeye text-3xl text-center mb-8">
        🛍️ Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ProductsRedux.map((product) => (
          <div
            key={product.id}
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
                {product.price}
              </p>
              <div className="flex justify-between items-center mt-4">
                {/* Update Button */}
                <button
                  onClick={() => handleToggleModal(product)}
                  className="text-blue-400 dark:text-blue-200 hover:text-blue-800"
                >
                  <IoMdCreate className="text-3xl" />
                </button>

                {/* Delete Button */}
                <button className="text-red-700 hover:text-red-900">
                  <IoMdTrash className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <UpdateProduct
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={currProd}
      />
    </div>
  );
};

export default HomePage;
