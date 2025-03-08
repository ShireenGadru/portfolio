import React from "react";
import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../../utils/RevealOnScroll";

const Work = () => {
  return (
    <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          My Work Experience
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all flex justify-center items-center flex-col text-gray-200">
          <h3 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-transparent">
              {" "}
              Wipro Digital
            </span>{" "}
            (2021 - Present)
          </h3>
          <p className="text-white/50 my-4">FRONTEND DEVELOPER</p>
          <ul className="list-disc list-outside mt-4 space-y-2">
            <li>
              <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Tech Stack:
              </strong>{" "}
              React.js, TypeScript, Css, Sass, Jest, Git
            </li>
            <li>
              <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Feature Development:
              </strong>{" "}
              Increased conversion rates by 30%
            </li>
            <li>
              <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                UI & Performance:
              </strong>{" "}
              Built reusable components, optimized load speed
            </li>
            <li>
              <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Testing & Quality:
              </strong>{" "}
              Wrote Jest tests, conducted code reviews
            </li>
            <li>
              <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Accessibility:
              </strong>{" "}
              Ensured accessibility compliance
            </li>
            <li>
              <strong className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Agile Development:
              </strong>{" "}
              Worked in a Scrum-based environment
            </li>
          </ul>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Work;
