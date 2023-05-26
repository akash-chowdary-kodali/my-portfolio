import EmailLink from "../pages/assests/imgs/email.png";
import Githublink from "../pages/assests/imgs/github.png";
import LinkedInlink from "../pages/assests/imgs/linkedin.png";

// import {Link} from "react-scroll";
import "./left-nav.css";



export function Leftnav() {
  return (
    <>
      <div className="left-navbar">
        <div className="Links">
          <a href={"#home"}>
            0.1
          </a>
          <a href={"#projects"}>
            0.2
          </a>
          <a href={"#skills"}>
            0.3
          </a>
          <a href={"#edu"}>
            0.4
          </a>
        </div>
        <div className="social-Links">
          <a
            href="mail:akashkodali6@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={EmailLink} width={30} alt="Email link" />
          </a>
          <a
            href="https://github.com/akodali9"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Githublink} width={30} alt="Github link" />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-chowdary-kodali-885aa5240/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInlink} width={30} alt="Linkedin-Link" />
          </a>
        </div>
      </div>
      
    </>
  );
}
