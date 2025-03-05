import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMui, SiGreensock } from "react-icons/si";

const techs = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-600" /> },
  { name: "GSAP", icon: <SiGreensock className="text-green-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
];

const Tools = () => {
  return (
    <section id="tools" className="py-16 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-center flex-col px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Tools</h2>
        <div className="flex flex-wrap gap-4">
          {techs.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded shadow text-lg"
            >
              {tech.icon}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
