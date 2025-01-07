import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

// Example product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$20",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$30",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$40",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$50",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$60",
    image: "https://picsum.photos/200",
  },
];

const HomePage = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-700 px-4 py-6">
      <h1 className="uppercase text-blue-600 dark:text-blue-500 font-bold font-ribeye text-3xl text-center mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border-2 border-gray-500 dark:bg-indigo-500 rounded-lg shadow-lg dark:shadow-2xl dark:border-3 dark:border-cyan-200 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-lightText dark:text-darkText">
                {product.name}
              </h2>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {product.price}
              </p>
              <div className="flex justify-between items-center mt-4">
                {/* Update Button */}
                <Link
                  to={`/update/${product.id}`}
                  className="text-blue-500 dark:text-blue-200 hover:text-blue-800"
                >
                  <IoMdCreate className="text-3xl" />
                </Link>

                {/* Delete Button */}
                <button className="text-red-700 hover:text-red-900">
                  <IoMdTrash className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
