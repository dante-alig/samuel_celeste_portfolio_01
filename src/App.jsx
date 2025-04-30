import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Project from "./pages/project";
import Services from "./pages/services";
import Nav from "./components/nav";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUpRightFromSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { ProjectProvider } from "./context/ProjectContext";
import { CalendlyProvider } from "./context/CalendlyContext";

library.add(faArrowUpRightFromSquare, faArrowRight);

function App() {
  const parallax = useRef(null);

  return (
    <ProjectProvider>
      <CalendlyProvider>
        <Router>
          <div className="App">
            <Nav parallaxRef={parallax} />
            <Routes>
              <Route path="/" element={<Home parallaxRef={parallax} />} />
              <Route path="/project/:id" element={<Project />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </Router>
      </CalendlyProvider>
    </ProjectProvider>
  );
}

export default App;
