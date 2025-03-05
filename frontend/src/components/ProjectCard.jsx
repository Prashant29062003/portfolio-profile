import React, { useRef } from "react";
import { gsap } from "gsap";

const ProjectCard = ({ project }) => {
  const previewRef = useRef(null);

  // Function to move preview with cursor
  const handleMouseMove = (e) => {
    gsap.to(previewRef.current, {
      x: e.clientX + 15, // Offset preview from cursor
      y: e.clientY - 35,
      duration: 0.1,
      ease: "power3.out",
    });
  };

  // Show the preview
  const handleMouseEnter = () => {
    gsap.to(previewRef.current, { opacity: 1, scale: 1, display: "block", duration: 0.3 });
  };

  // Hide the preview
  const handleMouseLeave = () => {
    gsap.to(previewRef.current, { opacity: 0, scale: 0.8, display: "none", duration: 0.3 });
  };

  return (
    <div
      className="relative p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-800"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm mb-2">{project.description}</p>

      {/* Cursor-Following Preview */}
      <div
        ref={previewRef}
        className="fixed top-0 left-0 w-40 p-2 bg-gray-100 dark:bg-gray-900 text-sm rounded-lg shadow-lg 
                   opacity-0 scale-90 hidden pointer-events-none"
        style={{ zIndex: 1000 }}
      >
        <img
          src={project.image}
          alt="Project Preview"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
