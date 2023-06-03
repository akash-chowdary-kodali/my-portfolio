import React from "react";
import "./css/footer.css";
import githubIcon from "./assests/icons/github.png";
import mailIcon from "./assests/icons/envelope.png";
import linkedinIcon from "./assests/icons/linkedin.png";

export const Footer = () => {
  return (
    <>
    <div className="footer">
      <p className="name">Akash Chowdary Kodali</p>
      <div className="footer-links">
        <a
          href="mailto:akashkodali6@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <img src={mailIcon} height={30} alt="mail icon" />
        </a>
        <a
          href="https://www.github.com/akodali9"
          rel="noreferrer"
          target="_blank"
        >
          <img src={githubIcon} height={30} alt="github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/akash-chowdary-kodali-885aa5240/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedinIcon} height={30} alt="Linkedin icon" />
        </a>
      </div>
    </div>
    </>
  );
};
