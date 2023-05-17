import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <>
      {/* TODO Increase size for larger width devices and scale it up for smaller ones */}
      {/* TODO Add dropdown button and menu for easier access */}
      <div className="nav">
        <p className="logo">Akash Chowdary Kodali</p>

        <ul className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/Education"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Education
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
