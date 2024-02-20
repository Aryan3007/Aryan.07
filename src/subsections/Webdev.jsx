import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
const Webdev = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
      >
        <img
          className="object-cover w-full h-64"
          src="./nn1.png"
          alt="Article"
        />
        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Nourish_nest
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex={0}
              role="link"
            >
              I Built A Successful Blog In One Year
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
          </div>
          <div className="flex gap-4 mt-3">
                  <a target="_blank" href="#">
                    <button className="overflow-hidden w-32  p-2 h-12 border border-gray-600 bg-black text-white border-none rounded-md text-lg cursor-pointer relative z-10 group">
                      Visit
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
                      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                        Explore!
                      </span>
                    </button>
                  </a>
                  <a target="_blank" href="#">
                    <button className="overflow-hidden w-32 flex justify-center items-center  p-2 h-12 border border-gray-600 bg-black text-white border-none rounded-md text-lg cursor-pointer relative z-10 group">
                      <FaGithub className="text-xl" />

                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
                      <span className="group-hover:opacity-100 flex justify-center items-center group-hover:duration-1000 duration-100 opacity-0 absolute  z-10">
                        Github
                      </span>
                    </button>
                  </a>
                </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }} className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src="./e1.png"
          alt="Article"
        />
        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Style hub
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex={0}
              role="link"
            >
              I Built A Successful Blog In One Year
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
          </div>
          <div className="flex gap-4 mt-3">
                  <a target="_blank" href="#">
                    <button className="overflow-hidden w-32  p-2 h-12 border border-gray-600 bg-black text-white border-none rounded-md text-lg cursor-pointer relative z-10 group">
                      Visit
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
                      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                        Explore!
                      </span>
                    </button>
                  </a>
                  <a target="_blank" href="#">
                    <button className="overflow-hidden w-32 flex justify-center items-center  p-2 h-12 border border-gray-600 bg-black text-white border-none rounded-md text-lg cursor-pointer relative z-10 group">
                      <FaGithub className="text-xl" />

                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
                      <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
                      <span className="group-hover:opacity-100 flex justify-center items-center group-hover:duration-1000 duration-100 opacity-0 absolute  z-10">
                        Github
                      </span>
                    </button>
                  </a>
                </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Webdev;
