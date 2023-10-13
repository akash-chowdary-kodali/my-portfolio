import "./App.css";
import { React } from "react";
import { About } from "./pages/About";
import { Skills } from "./pages/Expertise";

import NavBar from "./components/navbar/nav";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "./components/loadingscreen/loader";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading === false ? (
        <div>
          <NavBar />
          <section id="about">
            <About />
          </section>
          <section id="expertise">
            <Skills />
          </section>
          <section id="works">
            <Projects />
          </section>
          <section id="Experience">
            <Experience />
          </section>
          {/* <section id="edu">
        <Edu />
      // </section> */}
          <section
            id="contact"
            style={{ backgroundColor: "hsla(0, 0%, 70%, 0.314", padding: 0 }}
          >
            <Contact />
          </section>
          
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
