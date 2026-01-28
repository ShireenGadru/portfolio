import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <div className="flex gap-3 sm:gap-4 items-center">
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/shireengadru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 text-xl sm:text-2xl transition-colors"
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
              className="text-gray-400 hover:text-cyan-400 text-xl sm:text-2xl transition-colors"
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
              className="text-gray-400 hover:text-cyan-400 text-xl sm:text-2xl transition-colors"
            >
              <FaEnvelope />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Email
            </span>
          </div>

          <div className="relative group">
            <a
              href="https://leetcode.com/shireengadru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 text-xl sm:text-2xl transition-colors"
            >
              <SiLeetcode />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LeetCode
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
          <FaMapMarkerAlt className="text-cyan-400" />
          <span>Hyderabad, India</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
