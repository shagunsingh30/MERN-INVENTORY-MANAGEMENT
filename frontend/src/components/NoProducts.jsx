import { Link } from "react-router-dom";

const NoProducts = () => {
  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
        🛒 No Products Found
      </h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        It looks like there are no products yet. Start by creating one!
      </p>
      <Link
        to="/create"
        className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Create Product
      </Link>
    </div>
  );
};

export default NoProducts;
