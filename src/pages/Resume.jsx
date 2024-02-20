/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


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
      level: "Intermediate",
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
      logo: <FaHtml5 />,
      color: "",
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
      logo: <FaHtml5 />,
      color: "",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "HTML",
      level: "Advance",
      color: "",
      logo: <FaHtml5 />,
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
    {
      lang: "React Native",
      level: "Beginner",
      logo: <FaHtml5 />,
      color: "text-red-500",
      discription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio ali voluptatum blanditiis laudantium.",
    },
  ]);

  return (
    <section className="dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Kickstart your marketing
          </h2>

          <p className="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, index) => (
            <div
              key={index}
              className={`block rounded-xl border border-gray-800 p-8 shadow-xl hover:-translate-y-2 transition hover:border-blue-500/10 hover:shadow-blue-500/20 ${s.color}`}
              href="#"
            >
              <div>
                <span className="text-3xl">{s.logo}</span>
              </div>

              <h2 className="mt-4 text-xl font-bold text-white">
                {s.lang}{" "}
                <span className="font-semibold text-sm">{`(${s.level})`}</span>
              </h2>

              <p className="mt-1 text-sm text-gray-300">{s.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
