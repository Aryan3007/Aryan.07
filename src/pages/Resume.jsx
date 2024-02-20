/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { MdOutlineAnimation } from "react-icons/md";

import { FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";

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

const Resume = () => {
  const [skills, setSkills] = useState([
    {
      lang: "React JS",
      level: "Advance",
      logo: <FaReact />,
      color: "text-[#64d5f4]",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "Next JS",
      level: "Advance",
      logo: <SiNextdotjs />,
      color: "",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "Node JS",
      level: "Advance",
      logo: <FaNodeJs />,
      color: "text-[#84c86e]",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "Express JS",
      level: "Advance",
      logo: <SiExpress />,
      color: "",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "MongoDB",
      level: "Advance",
      logo: <SiMongodb />,
      color: "text-green-400",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "Firebase",
      level: "Intermediate",
      logo: <IoLogoFirebase />,
      color: "text-orange-400",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "Javascript",
      level: "Advance",
      logo: <IoLogoJavascript />,
      color: "text-yellow-500",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "CSS",
      level: "Advance",
      logo: <FaCss3Alt />,
      color: "text-blue-700",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "HTML",
      level: "Advance",
      color: "text-red-600",
      logo: <FaHtml5 />,
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "React Native",
      level: "Beginner",
      logo: <TbBrandReactNative />,
      color: "text-[#64d5f4]",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "GSAP Animation",
      level: "Advance",
      logo: <MdOutlineAnimation />,
      color: "text-[#49FF9E]",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "Framer Motion",
      level: "Intermediate",
      logo: <TbBrandFramerMotion />,
      color: "text-purple-500",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
  ]);

  return (
    <section className="dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Elevating Possibilities: Explore My Expertise
          </h2>

          <p className="mt-4 text-gray-800 dark:text-gray-300">
            Discover the depth of my skills – a fusion of creativity, expertise,
            and innovation. From coding to design, I'm equipped to transform
            ideas into reality. Let's embark on a journey of exploration and
            possibility together
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((s, index) => (
            <motion.li
              variants={item}
              key={index}
              className={`block item rounded-xl border border-gray-500 p-8 shadow-xl transition hover:shadow-blue-500/20 ${s.color}`}
            >
              <div>
                <span className="text-3xl">{s.logo}</span>
              </div>

              <h2 className="mt-4 text-xl font-bold dark:text-white text-black">
                {s.lang}{" "}
                <span className="font-semibold text-sm">{`(${s.level})`}</span>
              </h2>

              <p className="mt-1 text-sm dark:text-gray-300 text-black">
                {s.discription}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Resume;
