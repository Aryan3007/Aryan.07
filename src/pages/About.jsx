import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section>
      <div className="mx-auto dark:bg-gray-900 max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="./me.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center  bg-gray-300">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-300"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h1 className="bg-gradient-to-r to-green-700 via-blue-500 from-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Unlocking Innovation:
                <span className="sm:block">
                  {" "}
                  MERN Stack Mastery & React Native Expertise{" "}
                </span>
              </h1>

              <p className="mt-4 text-gray-600">
                As a MERN Stack developer and React Native app creator, I
                specialize in crafting innovative solutions that redefine user
                experiences. With a passion for excellence and a commitment to
                pushing boundaries, I thrive on building seamless and scalable
                applications that drive transformative change. Let's shape the
                future together
              </p>

              <div className="mt-8 flex flex-wrap justify-start gap-4">
                <Link
                  style={{ "--clr": "#3f88f3" }}
                  className="button"
                  to="/allprojects"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
