import EmailLink from "../pages/assests/imgs/email.png";
import Githublink from "../pages/assests/imgs/github.png";
import LinkedInlink from "../pages/assests/imgs/linkedin.png";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Skills } from "../pages/Skills";
import { Edu } from "../pages/Education";
// import {Link} from "react-scroll";
import "./left-nav.css";

const handleClickScroll = (idname) => {
    const element = document.getElementById(idname);
    if (element) {
      // 👇 Will scroll smoothly href the hrefp of the next section
      element.scrollIntoView({behavior: 'smooth'});
    }
  };


export function Leftnav() {
  return (
    <>
      <div className="left-navbar">
        <div className="Links">
          <a href={handleClickScroll("home")}>
            01
          </a>
          <a href={handleClickScroll("projects")}>
            02
          </a>
          <a href={handleClickScroll("skills")}>
            03
          </a>
          <a href={handleClickScroll("edu")}>
            04
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
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="edu">
        <Edu />
      </section>
    </>
  );
}
