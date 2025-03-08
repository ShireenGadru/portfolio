import React from "react";
import Name from "./components/name";
import Contact from "./components/Contact";
import Tabs from "./components/Tabs";

export const Home = () => {
  return (
    <section
      id="home"
      className="pt-[200px] mb-[60px] flex items-center justify-center"
    >
      <div className="text-center z-10 px-4">
        <Name />
        <div className="animate-slide-up opacity-0">
          <Contact />
          <Tabs />
        </div>
      </div>
    </section>
  );
};
