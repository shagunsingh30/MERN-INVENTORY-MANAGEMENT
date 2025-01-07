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
        <Link to={"/"} className="flex items-center space-x-5">
          <h1 className={`${styles.logoText} `}>Stock Nest</h1>
        </Link>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Create Button */}
          <button className={`flex items-center ${styles.buttonPrimary}`}>
            <Link
              to="/create"
              className="flex items-center space-x-2" // Flex container for aligning the icon and text
            >
              <IoIosAddCircle className="text-lg" />
              <span>Create</span> {/* Wrap text in <span> for better styling */}
            </Link>
          </button>

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className={styles.buttonSecondary}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
