import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { ScrollSectionDown } from "../greeting/greeting";
// import $ from "jquery";


function NavBar() {
  return (
    <>
      {/* TODO Increase size for larger width devices and scale it up for smaller ones */}
      {/* TODO Add dropdown button and menu for easier access */}
      <div className="nav" id="navigator">
        <p className="logo">Akash Chowdary Kodali</p>

        <div className="nav-links">
          <NavLink
            onClick={ScrollSectionDown}
            to="/"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={ScrollSectionDown}
            to="/expertise"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Expertise
          </NavLink>
          <NavLink
            onClick={ScrollSectionDown}
            to="/skills"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Background
          </NavLink>
          {/* <NavLink
            to="/Education"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Education
          </NavLink> */}
        </div>
        
      </div>
    </>
  );
}

export default NavBar;
