import "./App.css";
import { React } from "react";
// import { AnimatedRoutes } from "./functions/AnimatedRoutes";
import { HashRouter as Router } from "react-router-dom";
import { About } from "./pages/About";
import { Expertise } from "./pages/Work";
import { Background, Skills } from "./pages/Expertise";

import NavBar from "./components/navbar/nav";
// import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="expertise">
        {/* <Expertise /> */}
      </section>
    </div>
  );
}

export default App;
