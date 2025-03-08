import React, { useEffect, useState } from "react";
import { fullName } from "../../../../utils/constants";

const Name = () => {
  const [name, setName] = useState("");
  const [isNameRendered, setIsNameRendered] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setName(fullName.substring(0, index));
      index++;

      if (index > fullName.length) {
        setIsNameRendered(true);
        clearInterval(interval);
      }
    }, 80);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h1 className="text-5xl md:text-7xl font-bold mb-3 bg-gradient-to-r  from-blue-400 to-violet-400 leading-right bg-clip-text text-transparent transition-all duration-300">
      {name}
      {!isNameRendered && (
        <span className="animate-blink text-white font-extralight text-6xl ml-2">
          |{" "}
        </span>
      )}
    </h1>
  );
};

export default Name;
