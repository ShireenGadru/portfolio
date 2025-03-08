import React, { useEffect} from "react";
import { tabs } from "../../../../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import useWindowWidth from "../../../../hooks/useWindowWidth";

const Tabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname.replace("/", "");
  const tabsElement = document.getElementById("tabs");

  const isMobile = useWindowWidth(640);

  const handleTabClick = (name) => {
    navigate(`/${name}`);
    tabsElement && tabsElement.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (currentRoute === "") return;
    const activeIndex = tabs.findIndex((tab) => tab.name === currentRoute);
    const overlay = document.getElementById("overlay");
    const x = isMobile ? 83 : 124;
    overlay.style.transform = `translateX(${x * activeIndex}px)`;
  }, [currentRoute]);

  return (
    <nav className="flex justify-center p-4 mt-[100px]" id="tabs">
      <div className="relative flex gap-1 border border-white/15 rounded-full p-1 justify-center items-center">
        <div
          id="overlay"
          className="cursor-pointer absolute top-1 left-1 h-[35px] sm:h-[39px] w-[80px] sm:w-[119px] bg-gradient-to-r from-blue-500/20 to-blue-800/20 border border-blue-900 rounded-full transition-all duration-400 shadow-blue-500/30"
        />

        {tabs.map((tab) => {
          return (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab.name)}
              className={`py-2 sm:px-5 text-sm sm:text-base rounded-full w-[80px] sm:w-[120px]  duration-300 cursor-pointer text-gray-200 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-800/20`}
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
