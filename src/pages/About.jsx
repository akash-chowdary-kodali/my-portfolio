import React from "react";
import "../pages/css/About.css";
import myImg from "../assets/imgs/20220402.webp";

export const About = () => {
  return (
    <div className="mainbody">
      <div className="main" id="main">
        <div className="details" data-aos = "zoom-out-down" data-aos-duration="1000">
          <div className="top-block">
            <p >
              <span className="title">Software Developer.</span>
              <br />I like to develop innovative software applications
            </p>
          </div>

          <div className="intro-block">
            <div >
              <p className="name-block">
                Hello<span className="wave">👋</span>, I am
                <span className="name"> Akash. </span>
                Nice to meet you
              </p>
              <p>
                {/* An aspiring Computer Science Engineer currently Working towards
                Web and mobile Application Development. */}
                An aspiring Computer Science Engineer, fueled by a passion for tech innovation, I am determined to create a meaningful impact in a dynamic role.
              </p>
            </div>

            <img src={myImg} alt="Myprofile-img" className="profile-img" data-aos = "fade-up-right" data-aos-duration="1400" />
          </div>
        </div>
      </div>
    </div>
  );
};
