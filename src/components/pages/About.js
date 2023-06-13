import React from "react";
import "../pages/css/About.css";
import Resume from "../../assets/AkashKodali-Resume.pdf";
import myImg from "../../assets/imgs/myImage.jpg";
// import { Footer } from "./footer";
// import github_icon from "./assests/icons/github.png";
// import LinkedIn_icon from "./assests/icons/linkedin.png";
import { motion } from "framer-motion";

// const myDiv = document.getElementById('main');
// // myDiv.innerHTML = variableLongText;
// myDiv.scrollTop = 0;

export const About = () => {
  
  return (
    <motion.div
    initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.2,
      duration: 0.75,
    }}
    >
      <div className="main" id="main">
        <div className="details">
          <p className="greeting">Hello, I am Akash👋</p>
          <div className="top-block">
            <p>
              I am a student at GITAM Deemed to be University, India. An
              aspiring Computer Science Engineer currently Working towards Web
              and mobile Application Development.
            </p>
            <img
              src={myImg}
              alt="Myprofile-img"
              width={500}
              className="profile-img"
            />
          </div>
          <div className="links">
            <p className="link-heading">Connect</p>
            <p>
              <a href="mailto:akashkodali6@gmail.com" className="link">
                {/* <img src={email_icon} width={50} alt="LinkedIn Link"/>   */}
                akashkodali6@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/akash-chowdary-kodali-885aa5240/"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img src={LinkedIn_icon} width={25} alt="LinkedIn Link"/> */}
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://github.com/akodali9"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                {/* <img src={github_icon} width={60} alt="Github Link"/> */}
                Github
              </a>
            </p>
            <br />
            <p>
              <a
                href={Resume}
                className="dbutton"
                target="_blank"
                rel="noreferrer"
                // download={"AkashKodali_Resume"}
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
