import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-white pt-24        :bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl        :text-white">
              Subscribe our newsletter to get update.
            </h1>
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md        :bg-gray-900        :text-gray-300        :border-gray-600 focus:border-purple-400        :focus:border-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-purple-300"
                placeholder="Email Address"
              />
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-purple-800 rounded-lg hover:bg-purple-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800        :text-white">
              Quick Link
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300        :text-gray-300        :hover:text-purple-400 hover:underline hover:text-purple-500"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300        :text-gray-300        :hover:text-purple-400 hover:underline hover:text-purple-500"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300        :text-gray-300        :hover:text-purple-400 hover:underline hover:text-purple-500"
              >
                Our Philosophy
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800        :text-white">
              Industries
            </p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300        :text-gray-300        :hover:text-purple-400 hover:underline hover:text-purple-500"
              >
                Retail &amp; E-Commerce
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300        :text-gray-300        :hover:text-purple-400 hover:underline hover:text-purple-500"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300        :text-gray-300        :hover:text-purple-400 hover:underline hover:text-purple-500"
              >
                Finance &amp; Insurance
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-8        :border-gray-700" />
        <div className="flex items-center justify-between">
          <a href="#">
            <img className="w-auto h-7" src="./logo.png" alt="" />
          </a>
          <div className=" justify-center hidden mt-6 lg:flex gap-3 lg:mt-0 lg:-mx-2">
            <FaGithub className="h-7 w-7 bg-white rounded-full p-1        :hover:bg-purple-400 hover:bg-zinc-300 duration-100" />
            <AiFillInstagram className="h-7 w-7 bg-white rounded-full p-1        :hover:bg-purple-400 hover:bg-zinc-300 duration-100" />
            <FaXTwitter className="h-7 w-7 bg-white rounded-full p-1        :hover:bg-purple-400 hover:bg-zinc-300 duration-100" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
