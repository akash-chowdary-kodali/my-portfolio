import React from "react";
import "./css/contact.css";
// import githubIcon from "../assets/icons/github.png";
// import mailIcon from "../assets/icons/email.png";
// import linkedinIcon from "../assets/icons/linkedin.png";
import Resume from "../assets/AkashKodali-Resume.pdf";

export const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact">
        <p className="heading">Connect Here{" ;}"}</p>
        <p className="heading-desc">
          I’m always looking for new opportunities to learn and develop
          Applications. My inbox is always open for collaboration,
          brainstorming, tech chat, or discussing new ideas.
        </p>
        <div className="contact-links">
          <div className="normal-b">
            <a
              href="mailto:akashkodali6@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="contact-link"
            >
              <p className="email">akashkodali6@gmail.com</p>
              {/* <img src={mailIcon} height={30} alt="mail icon" className="contacticon" /> */}
            </a>
          </div>
          <div className="normal-b">
            <a
              href="https://www.github.com/akodali9"
              rel="noreferrer"
              target="_blank"
              className="contact-link"
            >
              <p>Github</p>
              {/* <img src={githubIcon} height={30} alt="github icon" className="contacticon" /> */}
            </a>
          </div>
          <div className="normal-b">
            <a
              href="https://www.linkedin.com/in/akash-chowdary-kodali-885aa5230/"
              rel="noreferrer"
              target="_blank"
              className="contact-link"
            >
              <p>Linkedin</p>
              {/* <img src={linkedinIcon} height={30} alt="Linkedin icon" className="contacticon" /> */}
            </a>
          </div>

          <div className="normal-b">
            <a
              href={Resume}
              rel="noreferrer"
              target="_blank"
              className="dbutton"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
