import React from "react";
import "./css/contact.css";
// import githubIcon from "../assets/icons/github.png";
// import mailIcon from "../assets/icons/email.png";
// import linkedinIcon from "../assets/icons/linkedin.png";
import Resume from "../assets/AKASH_CHOWDARY_KODALI_Resume.pdf";

export const Contact = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1600">
      <div className="contact-main">
        <div className="contact">
          <p className="heading">Connect Here{" ;}"}</p>
          <p className="heading-desc">
            I’m always looking for new opportunities to learn and develop
            software endeavors. My inbox is always open for collaboration,
            brainstorming, tech chat, or discussing new ideas.
          </p>
          <div className="contact-links">
            <a
              href="mailto:akashkodali6@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="contact-link"
            >
              <span className="email">akashkodali6@gmail.com</span>
              {/* <img src={mailIcon} height={30} alt="mail icon" className="contacticon" /> */}
            </a>
            <a
              href="https://www.github.com/akodali9"
              rel="noreferrer"
              target="_blank"
              className="contact-link"
            >
              Github
              {/* <img src={githubIcon} height={30} alt="github icon" className="contacticon" /> */}
            </a>
            <a
              href="https://www.linkedin.com/in/akashchowdarykodali"
              rel="noreferrer"
              target="_blank"
              className="contact-link"
            >
              Linkedin
              {/* <img src={linkedinIcon} height={30} alt="Linkedin icon" className="contacticon" /> */}
            </a>
            <br />
            <a
              type="button"
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
      <p
        style={{
          textAlign: "center",
          color: "#2a2833",
          padding: "20px",
          fontSize: "14px",
          fontFamily: "monospace",
        }}
      >
        Designed & built by Akash Chowdary kodali <br /> {":}"}
      </p>
    </div>
  );
};
