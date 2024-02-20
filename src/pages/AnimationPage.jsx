import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AnimationPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState([
    {
      img: "./nn1.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
      heading: " What do you want to know about UI",
      type: "Business website",
      link: "https://nourishnest.in/",
      github: "https://github.com/Aryan3007/Sony_headphone",

    },
    {
      img: "./e1.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
      heading: " What do you want to know about UI",
      type: "E-Commerce website",
      link: "https://frontend-ecommerce-one.vercel.app/",
      github: "https://github.com/Aryan3007/Sony_headphone",

    },
    {
      img: "./n1.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
      heading: " What do you want to know about UI",
      type: "Business website",
      link: "https://react-nike-web.vercel.app/",
      github: "https://github.com/Aryan3007/Sony_headphone",

    },
    {
      img: "./s1.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
      heading: " What do you want to know about UI",
      type: "Business website",
      link: "https://aryan3007.github.io/Sony_headphone/",
      github: "https://github.com/Aryan3007/Sony_headphone",
    },
    {
      img: "./n2.png",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est asperiores vel, ab animi recusandae nulla veritatis id tempore sapiente",
      heading: " What do you want to know about UI",
      type: "Business website",
      link: "https://aryan3007.github.io/Nike_shoes/",
      github: "https://github.com/Aryan3007/Nike_shoes",
    },
  ]);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Animated UI Designes
          </h1>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="container grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((p, index) => (
            <motion.li key={index} className="item" variants={item}>
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
                <div className="flex gap-4 mt-3">
                  <a target="_blank" href={p.link}>
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
                  <a target="_blank" href={p.github}>
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
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default AnimationPage;
