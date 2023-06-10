import React from "react";
import "./css/Background.css";
import { Footer } from "./footer";

export const Background = () => {
  return (
    <>
      <div className="skillsbody">
        <div className="mainS">
          <p className="headingS">Skills</p>
          <div className="detailsS">
            <p>Flutter</p>
            <p>React JS</p>
            <p>C</p>
            <p> Python</p>
            <p>Java</p>
            <p>Dart</p>
            <p>R</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Oracle SQL</p>
            <p>Firebase</p>
            <p> Git </p>
            <p> GitHub </p>
            <p> Visual Studio Code </p>
            <p> Eclipse </p>
            <p>PyCharm </p>
            <p>Figma</p>
            <p>Word</p>
          </div>
        </div>
      </div>
      <div className="edubody">
      <p className="headingS">Education</p>
        <section className="timeline-section">
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2020 - 2024</div>
              <div className="timeline-content">
                <h3>
                  GITAM Deemed to be university
                  <br />
                  <sub>Visakhapatnam, India</sub>
                </h3>
                <p>Computer Science and Engineering</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2018 - 2020</div>
              <div className="timeline-content">
                <h3>
                  Narayana Junior college <sub>Vijayawada, India</sub>
                </h3>
                <p>+1 & +2</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2018</div>
              <div className="timeline-content">
                <h3>
                  veeramachaneni siddhartha public school{" "}
                  <sub>Vijayawada, India</sub>
                </h3>
                <p>10th Standard</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};
