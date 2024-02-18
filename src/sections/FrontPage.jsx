/* eslint-disable react/no-unescaped-entities */
const FrontPage = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 pt-44 lg:flex lg:h-full lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Crafting Digital Experiences
              <span className="sm:block">One Line of Code at a Time </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed dark:text-white text-black"> 
              "Building innovative websites and applications tailored to your
              needs. Let's create your digital masterpiece together."
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a style={{ "--clr": "#3f88f3" }} className="button" href="#">
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
              </a>
            </div>
          </div>
        </div>

        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-8 mx-auto">
            <div className="grid gap-8 mt-8 justify-center sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              <a href="#" className="group block">
                <div className="relative rounded-xl overflow-hidden h-[350px] sm:h-[350px]">
                  <img
                    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 duration-500 group-hover:opacity-0"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0 duration-500 group-hover:opacity-100"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Small Headphones
                  </h3>

                  <p className="mt-1.5 text-pretty text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quibusdam ab maiores placeat odio id?
                  </p>
                </div>
              </a>

              <a href="#" className="group block">
                <div className="relative rounded-xl overflow-hidden h-[350px] sm:h-[350px]">
                  <img
                    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100  duration-500 group-hover:opacity-0"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0  duration-500 group-hover:opacity-100"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Small Headphones
                  </h3>

                  <p className="mt-1.5 text-pretty text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quibusdam ab maiores placeat odio id?
                  </p>
                </div>
              </a>

              <a href="#" className="group block">
                <div className="relative rounded-xl overflow-hidden h-[350px] sm:h-[350px]">
                  <img
                    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100  duration-500 group-hover:opacity-0"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-0  duration-500 group-hover:opacity-100"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Small Headphones
                  </h3>

                  <p className="mt-1.5 text-pretty text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis quibusdam ab maiores placeat odio id?
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default FrontPage;
