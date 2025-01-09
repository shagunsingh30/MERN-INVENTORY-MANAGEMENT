import { IoIosAddCircle } from "react-icons/io";
import styles from "../styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true); // Default dark mode

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and App Name */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl hidden md:block">🛒</span>
          <Link to={"/"} className="flex items-center">
            <h1 className={`${styles.logoText}`}>Stock Nest</h1>
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          {/* Create Button */}
          <button
            className={`flex items-center justify-center px-3 py-1 text-sm sm:text-base sm:px-5 sm:py-2 ${styles.buttonPrimary}`}
          >
            <Link to="/create" className="flex items-center space-x-2">
              <IoIosAddCircle className="text-base sm:text-lg" />
              <span>Create</span>
            </Link>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center px-3 py-1 text-sm sm:text-base sm:px-5 sm:py-2 ${styles.buttonSecondary}`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
