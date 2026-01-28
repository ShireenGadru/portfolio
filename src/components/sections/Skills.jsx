import React from "react";
import { RevealOnScroll } from "../../utils/RevealOnScroll";

const Skills = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "shadcn/ui",
    "React Query",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git",
    "REST APIs",
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
              className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-full text-gray-200 text-xs sm:text-sm font-medium transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Skills;
