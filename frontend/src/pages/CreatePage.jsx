import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import styles from "../styles";

const CreateProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle product submission here (e.g., make API request)
    console.log("Product added:", product);
    // Reset form after submission
    setProduct({ name: "", price: "", imageUrl: "" });
  };

  return (
    <div className="max-w-2xl mt-20 mx-auto p-6 bg-gray-300 dark:bg-gray-800 shadow-lg rounded-lg">
      <h2
        className={`uppercase text-blue-600 dark:text-blue-300 font-ribeye text-3xl text-center mb-8`}
      >
        Create Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className={`block text-lg font-medium ${styles.textPrimary} mb-2`}
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter product name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className={`block text-lg font-medium ${styles.textPrimary} mb-2`}
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter price"
            required
          />
        </div>
        <div>
          <label
            htmlFor="imageUrl"
            className={`block text-lg font-medium ${styles.textPrimary} mb-2`}
          >
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className={`flex items-center ${styles.buttonPrimary} bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg shadow-md`}
          >
            <IoIosAddCircle className="mr-2 text-lg" />
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductPage;
