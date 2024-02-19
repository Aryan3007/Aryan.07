import { useState } from "react";

const WebDevPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState([
    {
      img: "src/assets/nn1.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
      heading: " What do you want to know about UI",
      type: "Business website",
      link: "",
    },
    {
      img: "src/assets/e1.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
      heading: " What do you want to know about UI",
      type: "E-Commerce website",
      link: "",
    },
    {
      img: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
      heading: " What do you want to know about UI",
      type: "Business website",
      link: "",
    },
  ]);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            web development projects
          </h1>
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, index) => (
            <div key={index}>
              <img
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src={p.img}
                alt=""
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">{p.type}</span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  {p.heading}
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {p.discription}
                </p>
                <a href={p.link}>
                  <button className="overflow-hidden w-32 mt-3 p-2 h-12 bg-black text-white border-none rounded-md text-lg cursor-pointer relative z-10 group">
                    Visit
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
                    <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
                    <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                      Explore!
                    </span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevPage;
