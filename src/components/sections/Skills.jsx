import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RevealOnScroll } from "../../utils/RevealOnScroll";

const Skills = () => {
  const skills = [
    {
      name: "React.js",
      logo: <RiReactjsFill className="text-blue-500 w-6 h-6" />,
    },
    { name: "Redux", logo: <SiRedux className="text-purple-500 w-6 h-6" /> },
    // { name: "Next.js", logo: <SiNextdotjs className="text-white w-6 h-6" /> },
    {
      name: "TypeScript",
      logo: <SiTypescript className="text-blue-600 w-6 h-6" />,
    },
    {
      name: "JavaScript",
      logo: <SiJavascript className="text-yellow-400 w-6 h-6" />,
    },

    { name: "Sass", logo: <SiSass className="text-pink-500 w-6 h-6" /> },
    {
      name: "Tailwind CSS",
      logo: <SiTailwindcss className="text-blue-300 w-6 h-6" />,
    },
    {
      name: "Node.js",
      logo: <SiNodedotjs className="text-green-400 w-6 h-6" />,
    },
    {
      name: "Express.js",
      logo: <SiExpress className="text-gray-400 w-6 h-6" />,
    },
    { name: "MongoDB", logo: <SiMongodb className="text-green-500 w-6 h-6" /> },

    // {
    //   name: "Postgres",
    //   logo: <SiPostgresql className="text-blue-500 w-6 h-6" />,
    // },
    // { name: "GraphQL", logo: <SiGraphql className="text-pink-500 w-6 h-6" /> },
    {
      name: "Git",
      logo: <SiGit className="text-orange-500 w-6 h-6" />,
    },
  ];

  const additionalSkills = [
    "Accessibility Enhancements",
    "Unit Testing with Jest",
    "Performance Optimization",
    "Working with REST APIs",
    "Authentication using JWT",
    "RTK Query",
  ];

  return (
    <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          My Tech Skills
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all flex justify-center items-center flex-col">
          <div className="sm:grid sm:grid-cols-3 gap-7">
            {skills.map((skill, index) => (
              <div key={index} className="flex gap-3 mx-7 my-5 sm:my-0 ">
                {skill.logo}
                <span className="text-white text-2xl  sm:text-lg font-semibold">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <h4 className="text-2xl sm:text-xl font-bold my-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Additional skills:
            <div className="sm:grid sm:grid-cols-2 gap-4 text-white text-xl sm:text-base mt-7">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 sm:mx-7 my-4 sm:my-0 ">
                  <span>•</span> {skill}
                </div>
              ))}
            </div>
          </h4>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Skills;
