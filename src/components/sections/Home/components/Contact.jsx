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
        <div className="flex gap-4 justify-center items-center">
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
