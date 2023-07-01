import React from "react";
import "./nav.css";
import favicon from "../../assets/icons/Ak.png";

import { Link } from "react-scroll";
import { useState } from "react";

// import $ from "jquery";

function NavBar() {
  const [toggle, settoggle] = useState(false);

  const handletoggle = () => {
    settoggle(!toggle);
  };
  return (
      <div className={toggle ? "nav expanded" : "nav"} id="navigator">
        <a href="https://akodali9.github.io/my-portfolio/">
          <img src={favicon} alt="logo" className="logo" />
        </a>

        <div className={"nav-links"}>
          <Link
            smooth
            spy
            to="about"
            className="sub-link"
            activeClass="sub-linkactive"
            offset={-70}
            duration={1000}
            onClick={handletoggle}
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
            onClick={handletoggle}
          >
            Expertise
          </Link>
          <Link
            smooth
            spy
            to="works"
            activeClass="sub-linkactive"
            className="sub-link"
            offset={-70}
            duration={1000}
            onClick={handletoggle}
          >
            Work
          </Link>
          <Link
            smooth
            spy
            to="Experience"
            activeClass="sub-linkactive"
            className="sub-link"
            offset={-70}
            duration={1000}
            onClick={handletoggle}
          >
            Experience
          </Link>
          <Link
            smooth
            spy
            to="contact"
            activeClass="sub-linkactive"
            className="sub-link"
            offset={-70}
            duration={1000}
            onClick={handletoggle}
          >
            Contact
          </Link>
        </div>
        <div className="toggle-icon" onClick={handletoggle}>
          {toggle ? (
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M19 5L5 19M5.00001 5L19 19"
                  stroke="#6ce0dc"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Menu / Menu_Alt_02">
                  {" "}
                  <path
                    id="Vector"
                    d="M11 17H19M5 12H19M11 7H19"
                    stroke="#6ce0dc"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          )}
        </div>
      </div>
  );
}

export default NavBar;
