import React from "react";
import { RevealOnScroll } from "../../utils/RevealOnScroll";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Clem AI",
    description:
      "An AI-powered chatbot built using the Gemini API, with Tailwind CSS for styling, Clerk for authentication, and ImageKit for media optimization.",
    techStack: "React • TypeScript • Node.js • Clerk • Tailwind CSS",
    githubUrl: "https://github.com/ShireenGadru/clem-ai",
    liveUrl: "https://clem-ai.vercel.app",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  },
  {
    title: "Live Text Editor",
    description:
      "Real-time collaborative document editor enabling multiple users to edit documents simultaneously with seamless synchronization and a clean UI.",
    techStack: "React • TypeScript • Firebase • Tailwind CSS",
    githubUrl: "https://github.com/ShireenGadru/live-text-editor",
    liveUrl: "https://live-text-editor.vercel.app",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
  },
  {
    title: "AI Workout Routine Builder",
    description:
      "Intelligent fitness app that generates personalized workout routines based on user goals, fitness level, and available equipment using AI algorithms.",
    techStack: "React • TypeScript • OpenAI API • PostgreSQL • Tailwind CSS",
    githubUrl: "https://github.com/ShireenGadru/workout-builder",
    liveUrl: "https://workout-builder.vercel.app",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-all duration-200 font-medium text-xs"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Site
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 font-medium text-xs"
                  >
                    <FaGithub />
                    GitHub
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
