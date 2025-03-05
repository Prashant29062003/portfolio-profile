import React from "react";
import ProjectCard from "./ProjectCard";
import UIUXimage from '../assets/images/ui-ux-design.jpg';
import webImage from '../assets/images/web-preview.jpg';
import mobileImage from '../assets/images/mobile-preview.jpg';

const Projects = () => {
  const projectList = [
    {
      title: "UI/UX",
      description: "Sample UI/UX design for web and mobile. mlskdjfal jldfjalkja jldkjalk fhkjadfhfkj hfjahiuwerlu igleiwuofk udfh akfkdf hfhfid hiufh hjf dhf k ksdh fjsdhujwiekd hkfjhs jfjseorihs lpw .",
      image: UIUXimage,
    },
    {
      title: "Web",
      description: "Modern responsive website built with React. mlskdjfal jldfjalkja jldkjalk fhkjadfhfkj hfjahiuwerlu igleiwuofk udfh akfkdf hfhfid hiufh hjf dhf k ksdh fjsdhujwiekd hkfjhs jfjseorihs lpw .",
      image: webImage,
    },
    {
      title: "Mobile",
      description: "Cross-platform mobile application demo. mlskdjfal jldfjalkja jldkjalk fhkjadfhfkj hfjahiuwerlu igleiwuofk udfh akfkdf hfhfid hiufh hjf dhf k ksdh fjsdhujwiekd hkfjhs jfjseorihs lpw .",
      image: mobileImage,
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 text-black dark:text-white">
      <div className="max-w-6xl mx-auto flex justify-center items-center flex-col px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-default">
          {projectList.map((proj, index) => (
            <ProjectCard key={index} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
