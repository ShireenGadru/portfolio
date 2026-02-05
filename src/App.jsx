import "./index.css";
import { useState } from "react";
import { Home } from "./components/sections/Home/Home";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import GridBackground from "./components/GridBackground";

function App() {
  const [activeTab, setActiveTab] = useState("skills");

  const renderContent = () => {
    switch (activeTab) {
      case "skills":
        return <Skills />;
      case "work":
        return <Work />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      default:
        return <Skills />;
    }
  };

  return (
    <>
      <GridBackground />
      <div className="relative z-10">
        <Home activeTab={activeTab} setActiveTab={setActiveTab} />
        <div key={activeTab} className="animate-slide-up">
          {renderContent()}
        </div>
      </div>
    </>
  );
}

export default App;
