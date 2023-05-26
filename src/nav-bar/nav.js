import React from "react";
import "./nav.css";
import { NavLink as LinkNav } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Skills } from "../pages/Skills";
import { Edu } from "../pages/Education";

function NavBar() {
  // const Homepage = () => {
  //   const element = document.getElementById('edu');
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      {/* TODO Increase size for larger width devices and scale it up for smaller ones */}
      {/* TODO Add dropdown button and menu for easier access */}
      <div className="nav">
        <p className="logo">Akash Chowdary Kodali</p>

        <ul className="nav-links">
          <LinkNav
            to="/"
            onDurationChange={100}
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Home
          </LinkNav>
          <LinkNav
            to="/contact"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Contact
          </LinkNav>
          
          {/* <LinkNav
            to= "/" onDurationChange={100}
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Home
          </LinkNav>
          <LinkNav
            to="/projects"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Projects
          </LinkNav>
          <LinkNav
            to="/skills"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Skills
          </LinkNav>
          <LinkNav
            to="/edu"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Education
          </LinkNav> */}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
