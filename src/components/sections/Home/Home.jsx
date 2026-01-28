import React from "react";
import Name from "./components/Name";
import Contact from "./components/Contact";
import Tabs from "./components/Tabs";

export const Home = () => {
  return (
    <section
      id="home"
      className="pt-24 sm:pt-32 pb-3 sm:pb-6 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
    >
      <div className="z-10">
        <Name />
        <div className="animate-slide-up opacity-0">
          <p className="text-gray-400 text-base sm:text-lg mt-4 sm:mt-6 mb-6 sm:mb-8 leading-relaxed">
          Frontend-focused full-stack developer with 4+ years of experience building complex, high-performance web applications in React, TypeScript, and modern JavaScript ecosystems.
        
          </p>
          <Contact />
          <Tabs />
        </div>
      </div>
    </section>
  );
};
