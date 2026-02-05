import React from "react";
import { RevealOnScroll } from "../../utils/RevealOnScroll";

const workExperience = [
  {
    title: "Software Developer",
    company: "Soulax",
    period: "2025 – Present",
    points: [
      "Built and scaled complex frontend systems using React, TypeScript, and Google Maps APIs",
      "Implemented advanced geofencing features (polygons, circles, rectangles) with editing, merging, and rich interactions",
      "Optimized rendering and interactions for thousands of map objects to ensure smooth zooming and panning",
      "Worked on a GenAI-powered data analytics application enabling natural-language queries to generate SQL, tables, and charts",
      "Implemented UI workflows for model and schema selection, query execution, and saving results to dashboards and widgets",
      "Refactored shared map and drawing logic to improve performance, reuse, and maintainability",
      "Contributed to frontend architecture and mentored junior developers"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Wipro",
    period: "2021 – 2025",
    points: [
      "Developed and maintained large client-facing React applications",
      "Worked on state management, API integration, and component architecture",
      "Performed performance optimizations and refactoring in production codebases",
      "Wrote and maintained unit tests and supported CI/CD pipelines",
      "Collaborated with cross-functional teams to deliver features at scale"
    ]
  },
];


const Work = () => {
  return (
    <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-screen">
        <div className="space-y-6 sm:space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className="border-l-2 border-[#750ec4]/50 pl-4 sm:pl-6 pb-6 sm:pb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {job.title}
                </h3>
                <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap sm:ml-4">
                  {job.period}
                </span>
              </div>
              <p className="text-[#a855f7] mb-3 sm:mb-4 text-sm sm:text-base">{job.company}</p>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                {job.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="pl-5 relative leading-relaxed">
                    <span className="text-[#a855f7] absolute left-0 top-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Work;
