import React, { useEffect} from "react";
import { tabs } from "../../../../utils/constants";
import useWindowWidth from "../../../../hooks/useWindowWidth";

const Tabs = ({ activeTab, setActiveTab }) => {
  const isMobile = useWindowWidth(640);

  const handleTabClick = (name) => {
    setActiveTab(name);
    // Delay scroll to ensure DOM updates
    setTimeout(() => {
      const tabsElement = document.getElementById("tabs");
      if (tabsElement) {
        tabsElement.scrollIntoView({ 
          behavior: "smooth", 
          block: "start",
          inline: "nearest"
        });
      }
    }, 100);
  };

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.name === activeTab);
    const overlay = document.getElementById("overlay");
    if (overlay && activeIndex !== -1) {
      const buttonWidth = isMobile ? 68 : 98;
      const gap = isMobile ? 2 : 4;
      const x = (buttonWidth + gap) * activeIndex;
      overlay.style.transform = `translateX(${x}px)`;
    }
  }, [activeTab, isMobile]);

  return (
    <nav className="flex justify-center sm:justify-start mt-6 sm:mt-12 mb-6 sm:mb-12 scroll-mt-2" id="tabs">
      <div className="relative flex gap-1 sm:gap-1 bg-gray-800/60 backdrop-blur-lg rounded-full p-1.5 sm:p-2 justify-center items-center overflow-x-auto border border-gray-700/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div
          id="overlay"
          className="cursor-pointer absolute top-1.5 sm:top-2 left-1.5 sm:left-2 h-[34px] sm:h-[42px] w-[68px] sm:w-[98px] bg-[#750ec4] rounded-full transition-all duration-400"
        />

        {tabs.map((tab) => {
          return (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab.name)}
              className={`py-2 px-2 sm:px-3 text-xs sm:text-base rounded-full w-[68px] sm:w-[98px] duration-300 cursor-pointer text-gray-100 hover:text-white hover:bg-white/10 z-10 relative whitespace-nowrap font-medium flex items-center justify-center`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Tabs;
