import React, { useEffect, useState } from "react";
import { fullName, role } from "../../../../utils/constants";

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
    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white transition-all duration-300">
        {name}
        {!isNameRendered && (
          <span className="animate-blink text-white font-extralight text-5xl sm:text-6xl ml-2">
            |{" "}
          </span>
        )}
      </h1>
      <div className="uppercase text-cyan-400 text-sm sm:text-base mt-3 sm:mt-4 tracking-wider">
        {role}
      </div>
    </div>
  );
};

export default Name;
