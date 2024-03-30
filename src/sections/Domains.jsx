import { useState } from "react";
import Webdev from "../subsections/Webdev";

import Animation from "../subsections/Animation";

const Domains = () => {
  const [activeButton, setActiveButton] = useState("Web design");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section className="bg-white        :bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl        :text-white">
          Latest Work
        </h1>
        <div className="flex overflow-x-auto py-4 mt-4 w-full lg:justify-center justify-between  items-center        :border-gray-700">
          <button
            className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
              activeButton === "Animation UI"
                ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                : "text-black bg-transparent border-gray-200        :border-gray-700        :text-white"
            } sm:text-base  whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("Animation UI")}
          >
            Animated UI
          </button>
          <button
            className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
              activeButton === "Web design"
                ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                : "text-black bg-transparent border-gray-200        :border-gray-700        :text-white"
            } sm:text-base  whitespace-nowrap cursor-base focus:outline-none`}
            onClick={() => handleClick("Web design")}
          >
            Web Development
          </button>
        </div>

        <section className="mt-8 space-y-8 lg:mt-12">
          {activeButton === "Animation UI" && <Animation />}
          {activeButton === "Web design" && <Webdev />}
        </section>
      </div>
    </section>
  );
};

export default Domains;
