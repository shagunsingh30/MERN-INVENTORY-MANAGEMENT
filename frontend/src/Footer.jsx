import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-100 dark:bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-blue-600 dark:text-blue-100 text-2xl mb-4">
          Created by Shagun Singh
        </p>
        <div className="flex justify-center space-x-6">
          {/* GitHub Icon */}
          <a
            href="https://github.com/shagunsingh30" // Replace with your GitHub username
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-950 dark:text-blue-100  font-poppins font-bold hover:text-gray-400"
          >
            <FaGithub />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/shagun-singh-66a2b8242/" // Replace with your LinkedIn username
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-500 dark:text-blue-100  hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
