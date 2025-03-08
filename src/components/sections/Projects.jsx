import React from "react";
import { RevealOnScroll } from "../../utils/RevealOnScroll";
import {
  SiClerk,
  SiFirebase,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";

const projects = [
  {
    title: "Clem AI",
    summary:
      "An AI-powered chatbot built using the Gemini API, with Tailwind CSS for styling, Clerk for authentication, and ImageKit for media optimization, enhancing user engagement and responsiveness.",
    techStack: [
      {
        name: "ReactJS",
        icon: <FaReact className="text-blue-500" />,
        key: "react",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-700" />,
        key: "typescript",
      },
      {
        name: "NodeJS",
        icon: <FaNodeJs className="text-green-600" />,
        key: "nodejs",
      },
      {
        name: "Clerk",
        icon: <SiClerk className="text-gray-500" />,
        key: "clerk",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
        key: "tailwind",
      },
      {
        name: "TanStack Query",
        icon: <SiReactquery className="text-red-500" />,
        key: "tanstack",
      },
    ],
    url: "https://github.com/ShireenGadru/clem-ai",
  },

  {
    title: "Live Text Editor",
    summary:
      "Developed a real-time collaborative document editor using React, Tailwind CSS, and Firebase. Enables multiple users to edit documents simultaneously with seamless synchronization and a clean UI.",
    techStack: [
      {
        name: "ReactJS",
        icon: <FaReact className="text-blue-500" />,
        key: "react",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-700" />,
        key: "typescript",
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-amber-400" />,
        key: "firebase",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
        key: "tailwind",
      },
    ],
    url: "https://github.com/ShireenGadru/live-text-editor",
  },
];

const Projects = () => {
  return (
    <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-300  bg-clip-text text-transparent text-center">
          My Projects
        </h2>
        <div className=" flex justify-center items-center ">
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="p-4 border border-blue-300/30 rounded-lg shadow-sm"
              >
                <h3 className="bg-gradient-to-tr from-purple-400 to-cyan-400 bg-clip-text text-transparent text-2xl font-bold mb-5">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.summary}</p>
                <div className="flex  justify-between items-start sm:items-center flex-col sm:flex-row">
                  <div className="text-sm text-gray-400 mt-4 flex items-center gap-3 font-semibold">
                    <span>Tech Used:</span>
                    {project.techStack.map((tech) => (
                      <div key={tech.key} className="relative group">
                        <div className="text-2xl transition-colors group-hover:opacity-80 cursor-pointer">
                          {tech.icon}
                        </div>

                        <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a href={project.url} target="_blank">
                    <button className="mt-5 cursor-pointer flex items-center gap-2 px-4 py-2 border border-blue-300/30  text-blue-400 rounded-lg hover:bg-blue-600/20 hover:text-white transition">
                      <FaGithub /> View on GitHub
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Projects;
