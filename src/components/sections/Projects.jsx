import React from "react";
import { RevealOnScroll } from "../../utils/RevealOnScroll";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Build Your Routine",
    description:
      "Intelligent fitness app that generates personalized workout routines based on user goals, fitness level, and available equipment using AI algorithms.",
    techStack: "Next.js • React • TypeScript • Prisma • PostgreSQL • Tailwind CSS • shadcn/ui",
    githubUrl: "https://github.com/ShireenGadru/build-your-routine",
    liveUrl: "https://workout-builder.vercel.app",
    image: "/routine-app.png",
  },
  {
    title: "Clem AI",
    description:
      "A full-stack AI chatbot application with user authentication powered by Google's Gemini 1.5 Flash model, featuring conversation history and dashboard.",
    techStack: "React • TypeScript • Node.js • Express • MongoDB • Clerk • TanStack Query",
    githubUrl: "https://github.com/ShireenGadru/clem-ai",
    liveUrl: "https://clem-ai.onrender.com",
    image: "/clem-ai.png",
  },
  {
    title: "Live Text Editor",
    description:
      "Real-time collaborative document editor enabling multiple users to edit documents simultaneously with seamless synchronization and a clean UI.",
    techStack: "React • TypeScript • Firebase • Tailwind CSS",
    githubUrl: "https://github.com/ShireenGadru/live-text-editor",
    liveUrl: "https://live-text-editor.vercel.app",
    image: "/live-text-editor.png",
  },
];

const Projects = () => {
  return (
    <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 min-h-screen">
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg bg-gray-800/30 w-full sm:w-48 md:w-64 h-32 sm:h-32 md:h-40 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500 mb-3 sm:mb-4">
                  {project.techStack}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  {/* <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#750ec4] text-white rounded-lg hover:bg-[#8b2dd4] transition-all duration-200 font-medium text-xs"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Site
                  </a> */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-[#750ec4] hover:text-[#a855f7] transition-all duration-200 font-medium text-xs"
                  >
                    <FaGithub />
                    View Code 
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Projects;
