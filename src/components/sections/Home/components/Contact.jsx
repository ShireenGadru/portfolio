import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { role } from "../../../../utils/constants";



const Contact = () => {
  return (
    <>
      <div className="text-gray-100 text-md mb-12 max-auto tracking-[0.4em]">
        {role}
      </div>

      <div className="flex justify-center flex-col items-center">
        <a
          href="#contact"
          className="border w-fit border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-gradient-to-r hover:from-blue-500/90 hover:to-indigo-600/90 hover:text-white"
        >
          Contact Me
        </a>
        <div className="mt-5 flex gap-4 justify-center items-center">
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/shireengadru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-2xl transition-colors"
            >
              <FaLinkedin />
            </a>

            <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </div>

          <div className="relative group">
            <a
              href="https://github.com/ShireenGadru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-2xl transition-colors"
            >
              <FaGithub />
            </a>

            <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Github
            </span>
          </div>

          <div className="relative group">
            <a
              href="mailto:shiru411@gmail.com"
              target="_blank"
              className="text-gray-400  hover:text-blue-500 text-2xl transition-colors"
            >
              <FaEnvelope />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Email
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
