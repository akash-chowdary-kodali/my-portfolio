import "./App.css";
import { React } from "react";
import {Leftnav} from "./nav-bar/left-nav";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Edu } from "./pages/Education";
// import ScrollToTop from "./pages/scrolltoTop";


function App() {
  return (
    <div>
      
      <Leftnav />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="edu">
        <Edu />
      </section>
    </div>
  );
}

export default App;
