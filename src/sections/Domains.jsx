import { useState } from "react";
import Webdev from "../subsections/Webdev";
import Appdev from "../subsections/Appdev";
import Animation from "../subsections/Animation";

const Domains = () => {
  const [activeButton, setActiveButton] = useState("Web design");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Latest Work
        </h1>
        <div className="flex overflow-x-auto py-4 mt-4 w-full md:justify-center  items-center dark:border-gray-700">
          <button
            className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
              activeButton === "Animation UI"
                ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                : "text-black bg-transparent border-gray-200 dark:border-gray-700 dark:text-white"
            } sm:text-base  whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("Animation UI")}
          >
            Animated UI
          </button>
          <button
            className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
              activeButton === "Web design"
                ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                : "text-black bg-transparent border-gray-200 dark:border-gray-700 dark:text-white"
            } sm:text-base  whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("Web design")}
          >
            Web Development
          </button>
          <button
            className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
              activeButton === "App design"
                ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                : "text-black bg-transparent border-gray-200 dark:border-gray-700 dark:text-white"
            } sm:text-base  whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("App design")}
          >
            App Development
          </button>
        </div>

        <section className="mt-8 space-y-8 lg:mt-12">
          {activeButton === "Animation UI" && <Animation />}
          {activeButton === "Web design" && <Webdev />}
          {activeButton === "App design" && <Appdev />}
        </section>
      </div>
    </section>
  );
};

export default Domains;
