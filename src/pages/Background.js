import React from "react";
import "./css/Background.css";
// import { Footer } from "../components/footer/footer";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    // motion.
    // <div
    // initial={{ y: 25, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // transition={{
    //   delay: 0.2,
    //   duration: 0.75,
    // }}
    // >
      <div className="skillsbody" id="skillsbody">
        <div className="mainS">
          <p className="headingS">
            I like to code things from scratch, and enjoy bringing ideas to life
            in your devices.
          </p>
          <div className="detailsS">
            <ul className="sub-detailsS">
              <article>Languages i speak</article>
              <li>Flutter</li> <li>React JS</li> <li>C</li>
              <li>Python</li>
              <li>Java</li>
              <li>R</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <br />
            <ul className="sub-detailsS">
              <article>Dev Tools</article>
              <li>Oracle SQL</li>
              <li>Firebase</li>
              <li> Git </li>
              <li> GitHub </li>
              <li> Visual Studio Code </li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    // </div>
  );
};
