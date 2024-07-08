import React from "react";
import "./css/Expertise.css";
// import { Footer } from "../components/footer/footer";
// import { motion } from "framer-motion";
import Desktopicon from "../assets/icons/desktop.svg";
import reacticon from "../assets/icons/react.svg";
import Fluttericon from "../assets/icons/flutter.svg";
import Mongoicon from "../assets/icons/mongo.svg";
import Servericon from "../assets/icons/server.svg";

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
    <div className="skillsbody" id="skillsbody" data-aos="side-up">
      <div className="mainS">
        <p className="headingS">
          I like to code things from scratch, and enjoy bringing ideas to life
        </p>
        <br />
        <div data-aos="zoom-in" data-aos-duration="1000">
          <p className="expertise">My Expertise</p>
        </div>
        <div className="detailsS">
          <div data-aos="fade-right" data-aos-duration="1400">
            <div className="sub-detailsS">
              <div className="sub-headingSkills">
                <img src={Desktopicon} alt="desktop icon" />
                <p>Software Development</p>
              </div>

              <p>
                Experienced in both functional and OOP: Python, C, Java,
                JavaScript, Dart, BigData.
              </p>
            </div>
          </div>
          {/* <div data-aos="fade-right" data-aos-duration="1400">
            <div className="sub-detailsS">
              <div className="sub-headingSkills">
                
                <p>Frontend Web Dev</p>
              </div>
              <p>
                Passionate about UI/UX. Experience in React js, Express js,
                HTML, CSS.
              </p>
            </div>
          </div> */}
          <div data-aos="fade-right" data-aos-duration="1400">
            <div className="sub-detailsS">
              <div className="sub-headingSkills">
                <img src={Fluttericon} alt="flutter icon" />
                <img src={reacticon} alt="react icon" />
                <p>Flutter & React Dev </p>
              </div>
              <p>
                {/* Experience in developing Cross-platfrorm applications using
                Flutter framework. */}
                Passionate about UI/UX, skilled in ReactJS, HTML, CSS, and
                Flutter for cross-platform development.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1400">
            <div className="sub-detailsS">
              <div className="sub-headingSkills">
                <img src={Mongoicon} alt="mongo icon" />
                <img src={Servericon} alt="server icon" />
                <p>ExpressJS & MongoDB</p>
              </div>
              <p>
                {" "}
                Experience with ExpressJS servers using NoSQL databases like
                Firebase and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
