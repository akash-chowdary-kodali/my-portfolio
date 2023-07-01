import React from "react";
import "../pages/css/About.css";
import myImg from "../assets/imgs/20220402.jpg";

export const About = () => {
  return (
    <div>
      <div className="main" id="main">
        <div className="details">
          <div className="top-block">
            <p>
              <p className="title">Frontend Developer.</p>I like to develop Good
              Interactive Applications
            </p>
          </div>

          <div className="intro-block">
            <div>
              <p className="name-block">
                Hello, I am
                <span className="name">
                  {" "}Akash Kodali.{" "}
                </span>
                Nice to meet you
              </p>
              <p>
                An aspiring Computer Science Engineer currently Working towards
                Web and mobile Application Development.
              </p>
            </div>

            <img src={myImg} alt="Myprofile-img" className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
