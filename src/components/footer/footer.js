import React from "react";
import "./footer.css";
import githubIcon from "../../assets/icons/github.png";
import mailIcon from "../../assets/icons/email.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

export const Footer = () => {
  return (
    <>
    <div className="footer">
      <p className="name">Connect here {";)"}</p>
      <div className="footer-links">
        <a
          href="mailto:akashkodali6@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="footer-link"
        >
          <img src={mailIcon} height={30} alt="mail icon" className="footericon" />
        </a>
        <a
          href="https://www.github.com/akodali9"
          rel="noreferrer"
          target="_blank"
          className="footer-link"
        >
          <img src={githubIcon} height={30} alt="github icon" className="footericon" />
        </a>
        <a
          href="https://www.linkedin.com/in/akash-chowdary-kodali-885aa5230/"
          rel="noreferrer"
          target="_blank"
          className="footer-link"
        >
          <img src={linkedinIcon} height={30} alt="Linkedin icon" className="footericon" />
        </a>
      </div>
    </div>
    </>
  );
};
