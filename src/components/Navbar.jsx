import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { AiFillInstagram } from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // Add state to track active button

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button); // Update active button state
  };

  return (
    <nav className="bg-white shadow        :bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex justify-between lg:items-center">
          <div className="flex gap-3 items-center justify-between">
            <Link to="/">
              <img className="w-auto h-6 sm:h-7" src="./logo.png" alt="Logo" />
            </Link>
            <h1 className="       :text-white text-black text-xl font-semibold">{`Dev</>Hub`}</h1>
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500        :text-gray-200 hover:text-gray-600        :hover:text-gray-400 focus:outline-none focus:text-gray-600        :focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {!isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`lg:flex lg:items-center lg:justify-between ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col mt-4 text-gray-600 capitalize        :text-gray-300 lg:flex lg:flex-row lg:mt-0 lg:items-center lg:px-16 lg:-mx-4">
              <Link
                to="/"
                className={`mt-2 w-16 text-center lg:mt-0 lg:mx-4  ${
                  activeButton === "features"
                    ? "  bg-transparent border-b-2 text-blue-500 border-blue-500"
                    : "text-black bg-transparent border-gray-200        :border-gray-700        :text-white"
                }`}
                onClick={() => handleButtonClick("features")}
              >
                Home
              </Link>
              <Link
                to="/skills"
                className={`mt-2 w-16 text-center lg:mt-0 lg:mx-4  ${
                  activeButton === "downloads"
                    ? " bg-transparent border-b-2 text-blue-500 border-blue-500"
                    : "text-black bg-transparent border-gray-200        :border-gray-700        :text-white"
                }`}
                onClick={() => handleButtonClick("downloads")}
              >
                My Skills
              </Link>
              <Link
                to="/allprojects"
                className={`mt-2 w-20 text-center lg:mt-0 lg:mx-4  ${
                  activeButton === "docs"
                    ? " bg-transparent border-b-2 text-blue-500 border-blue-500"
                    : "text-black bg-transparent border-gray-200        :border-gray-700        :text-white"
                }`}
                onClick={() => handleButtonClick("docs")}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className={`mt-2 w-16 text-center lg:mt-0 lg:mx-4  ${
                  activeButton === "support"
                    ? " bg-transparent border-b-2 text-blue-500 border-blue-500"
                    : "text-black bg-transparent border-gray-200        :border-gray-700        :text-white"
                }`}
                onClick={() => handleButtonClick("support")}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`mt-2 w-16 text-center lg:mt-0 lg:mx-4 ${
                  activeButton === "blog"
                    ? " bg-transparent border-b-2 text-blue-500 border-blue-500"
                    : "text-black bg-transparent border-gray-200        :border-gray-700        :text-white"
                }`}
                onClick={() => handleButtonClick("blog")}
              >
                Contact
              </Link>
            </div>

            <div className="flex gap-4 lg:hidden justify-center mt-6 lg:mt-0 lg:-mx-2">
              <FaGithub className="h-7 w-7 bg-white rounded-full p-1 hover:bg-zinc-400 duration-100" />
              <AiFillInstagram className="h-7 w-7 bg-white rounded-full p-1 hover:bg-zinc-400 duration-100" />
              <FaXTwitter className="h-7 w-7 bg-white rounded-full p-1 hover:bg-zinc-400 duration-100" />
            </div>
          </div>
          <div className=" justify-center hidden mt-6 lg:flex gap-3 lg:mt-0 lg:-mx-2">
            <FaGithub className="h-7 w-7 bg-white rounded-full p-1        :hover:bg-blue-400 hover:bg-zinc-300 duration-100" />
            <AiFillInstagram className="h-7 w-7 bg-white rounded-full p-1        :hover:bg-blue-400 hover:bg-zinc-300 duration-100" />
            <FaXTwitter className="h-7 w-7 bg-white rounded-full p-1        :hover:bg-blue-400 hover:bg-zinc-300 duration-100" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
