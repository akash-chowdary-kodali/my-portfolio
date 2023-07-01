import React from "react";
import "./css/Expertise.css";
// import { Footer } from "../components/footer/footer";
// import { motion } from "framer-motion";
import Desktopicon from "../assets/icons/desktop.svg";
import reacticon from "../assets/icons/react.svg";
import Fluttericon from "../assets/icons/flutter.svg";

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
        </p>
        <br />
        <p className="expertise">My Expertise</p>
        <div className="detailsS">
          <div className="sub-detailsS">
            <div className="sub-headingSkills">
              <img src={Desktopicon} alt="desktop icon"/>
              <p>Software Development</p>
            </div>

            <p>
              Experienced in both functional and OOP: Python, C, Java,
              JavaScript, Dart.
            </p>
          </div>
          <div className="sub-detailsS">
            <div className="sub-headingSkills">
              <img src={reacticon} alt="react icon"/>
              <p>
                Frontend
                Web Dev
              </p>
            </div>
            <p>
              Passionate about UI/UX. Experience in React js, Express js, HTML,
              CSS.
            </p>
          </div>
          <div className="sub-detailsS">
            <div className="sub-headingSkills">
              <img src={Fluttericon} alt="flutter icon"x/>
              <p>
                Flutter Dev Android, iOS
              </p>
            </div>
            <p>
              Experience in developing Cross-platfrorm applications using
              Flutter framework.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
