import "./index.css";
import { Home } from "./components/sections/Home/Home";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <>
      <Home />
      <div className="animate-slide-up opacity-0">
        <Routes>
          <Route path="/" element={<Skills />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
