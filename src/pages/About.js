import React from "react";
import "../pages/css/About.css";
// import Resume from "../assets/AkashKodali-Resume.pdf";
import myImg from "../assets/imgs/_3c33bcaf-3327-4704-bdd2-2c6aed19ec9c.jpeg";

export const About = () => {
  return (
    <div>
      <div className="main" id="main">
        <div className="details">
          <div className="top-block">
            <p><article className="title">Frontend Developer.</article>
            I like to develop Good Interactive Applications</p>
          </div>

          <div className="intro-block">
            <p>
              Hello👋, I am <span className="name">Akash.</span> Nice to meet you<br/>
              An aspiring Computer Science Engineer currently Working
              towards Web and mobile Application Development.
            </p>
            <img src={myImg} alt="Myprofile-img" className="profile-img" />
          </div>

          {/* <div className="links">
            <p className="link-heading">Connect</p>
            <p>
              <a href="mailto:akashkodali6@gmail.com" className="link">
                <img src={email_icon} width={50} alt="LinkedIn Link"/>  
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
                <img src={LinkedIn_icon} width={25} alt="LinkedIn Link"/>
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
                <img src={github_icon} width={60} alt="Github Link"/>
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
                download={"AkashKodali_Resume"}
              >
                Resume
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
