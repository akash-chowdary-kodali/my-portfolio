import React from "react";
import "../pages/css/About.css";
import Resume from "./assests/AkashKodali-Resume.pdf";
import myImg from "./assests/imgs/myImage.jpg";
// import { Footer } from "./footer";
// import github_icon from "./assests/icons/github.png";
// import LinkedIn_icon from "./assests/icons/linkedin.png";

export const Home = () => {
  return (
    <div className="homebody">
      <div className="main">
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
    
    </div>
  );
};
