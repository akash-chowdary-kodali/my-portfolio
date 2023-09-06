import React from "react";
import "../pages/css/About.css";
import myImg from "../assets/imgs/20220402.webp";

export const About = () => {
  return (
    <div>
      <div className="main" id="main">
        <div className="details">
          <div className="top-block">
            <p>
              <span className="title">Frontend Developer.</span>
              <br />I like to develop Good Interactive Applications
            </p>
          </div>

          <div className="intro-block">
            <div>
              <p className="name-block">
                Hello<span className="wave">👋</span>, I am
                <span className="name"> Akash. </span>
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
