import React from "react";
import "./nav.css";
import favicon from '../../assets/icons/favicon.png'

import { Link, animateScroll as scroll } from "react-scroll";

// import $ from "jquery";

function NavBar() {
  return (
    <div>
      <div className="nav" id="navigator">
        {/* <a href="https://akodali9.github.io/my-portfolio/"><img src={favicon} height={} alt = "logo" className="logo"/></a> */}

        <div className="nav-links">
          <Link
            smooth
            spy
            to="about"
            className="sub-link"
            activeClass="sub-linkactive"
            offset={-70}
            duration={1000}
          >
            About
          </Link>
          <Link
            smooth
            spy
            to="expertise"
            className="sub-link"
            activeClass="sub-linkactive"
            offset={-70}
            duration={1000}
          >
            Expertise
          </Link>
          <Link
            smooth
            spy
            to="skills"
            activeClass="sub-linkactive"
            className="sub-link"
            offset={-70}
            duration={1000}
          >
            Background
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
