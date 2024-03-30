/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <>
      <section className=" text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center">
          <div className="mx-auto text-center">
            <h1 className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
              Elevating the Web: Crafting Digital Experiences Beyond Boundaries!
            </h1>

            <p className="mx-auto mt-8 max-w-2xl sm:text-md/relaxed">
             
Web developers are the digital architects, blending design and code to create seamless online experiences. From front-end finesse to back-end brilliance, they craft the web's foundation, shaping our digital interactions and propelling innovation forward.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                style={{ "--clr": "#3f88f3" }}
                className="button"
                to="allprojects"
              >
                <span className="button__icon-wrapper">
                  <svg
                    width="10"
                    className="button__icon-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024"
                    ></path>
                  </svg>

                  <svg
                    className="button__icon-svg  button__icon-svg--copy"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    fill="none"
                    viewBox="0 0 14 15"
                  >
                    <path
                      fill="currentColor"
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024"
                    ></path>
                  </svg>
                </span>
                Explore Projects
              </Link>
            </div>
            <p className="my-12">
              Our Performance Marketing Services are Certified by
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="h-32 rounded-lg bg-gray-200"></div>
              <div className="h-32 rounded-lg bg-gray-200"></div>
              <div className="h-32 rounded-lg bg-gray-200"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrontPage;
