import React from "react";
import { RevealOnScroll } from "../../utils/RevealOnScroll";

const Skills = () => {
  const skills = [
    { name: "React.js", color: "#61DAFB" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Redux", color: "#764ABC" },
    { name: "HTML/CSS", color: "#E34F26" },
    { name: "Sass/Less", color: "#CC6699" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Jest", color: "#C21325" },
    { name: "React Query", color: "#FF4154" },
    { name: "Git", color: "#F05032" },
    { name: "REST APIs", color: "#009688" },
  ];

  return (
    <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-screen">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-800/50 hover:bg-gray-700/50 border rounded-full text-gray-200 text-xs sm:text-sm font-medium transition-all duration-200"
              style={{ borderColor: skill.color }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Skills;
