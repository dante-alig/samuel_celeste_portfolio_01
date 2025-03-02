import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Project from "./pages/project";
import Nav from "./components/nav";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { ProjectProvider } from "./context/ProjectContext";

library.add(faArrowUpRightFromSquare);

function App() {
  const parallax = useRef(null);

  return (
    <ProjectProvider>
      <Router>
        <Nav parallaxRef={parallax} />
        <Routes>
          <Route path="/" element={<Home parallaxRef={parallax} />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
}

export default App;
