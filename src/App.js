import "./App.css";
import { React } from "react";
// import { AnimatedRoutes } from "./functions/AnimatedRoutes";
// import { HashRouter as Router } from "react-router-dom";
import { About } from "./pages/About";
import { Skills } from "./pages/Expertise";
// import { Edu } from "./pages/Education";

import NavBar from "./components/navbar/nav";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact} from "./pages/Contact";
// import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar />
      <section id="about">
        <About />
        <Skills />
      </section>
      <section id="expertise">
        
      </section>
      <section id="works">
        <Projects />
      </section>
      <section id="Experience">
        <Experience/>
      </section>
      {/* <section id="edu">
        <Edu />
      </section> */}
      <section id="contact">
        {/* <p style={{ textAlign: "center", height: "50vh", fontSize: "40px" }}>
          Contact <p>Coming soon................</p>
        </p>{" "} */}
        <Contact/>
      </section>
      <p style={{backgroundColor: "hsla(0, 0%, 10%, 0.314)", textAlign:"center", padding: "20px", fontSize: "14px", fontFamily:"monospace"}}>Designed & built by Akash Chowdary kodali <br/> {":}"}</p>
    </div>
  );
}

export default App;
