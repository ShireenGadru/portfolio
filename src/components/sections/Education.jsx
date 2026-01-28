import React from "react";
import { RevealOnScroll } from "../../utils/RevealOnScroll";

const education = [
  {
    degree: "Instrumentation and Control Engineering",
    institution: "Manipal Institute of Technology, Manipal",
    period: "2017-2021",
  
  },
];

const Education = () => {
  return (
    <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-screen">
        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-cyan-400/50 pl-4 sm:pl-6 pb-6 sm:pb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap sm:ml-4">
                  {edu.period}
                </span>
              </div>
              <p className="text-cyan-400 mb-2 sm:mb-3 text-sm sm:text-base">{edu.institution}</p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {"8.3 CGPA"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Education;
