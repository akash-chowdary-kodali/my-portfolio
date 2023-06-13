import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     document.getElementById("navbar").style.padding = "10px";
//     // document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     // document.getElementById("logo").style.fontSize = "35px";
//   }
// }

function NavBar() {
  return (
    <>
      {/* TODO Increase size for larger width devices and scale it up for smaller ones */}
      {/* TODO Add dropdown button and menu for easier access */}
      <div className="nav" id = "navbar">
        <p className="logo">Akash Chowdary Kodali</p>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/expertise"
            className={({ isActive }) =>
              isActive ? "sub-linkactive sub-link" : "sub-link"
            }
          >
            Expertise
          </NavLink>
          <NavLink
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
