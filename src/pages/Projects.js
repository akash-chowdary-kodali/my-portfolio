import React from "react";
import "./css/projects.css";
import Weatherimg from "./imgs/WeatherApp.png";
import WhatsappImg from "./imgs/WhatsappClone.png";

export const Projects = () => {
  return (
    <div className="mainp">
      <p className="headingp">RECENT</p>
      <div className="project">
        <div className="project-details">
          <p className="title">Weather Application</p>
          <div className="desc">
            <p>
              A Real-time Weather Application that helps users to find out the
              present Temperature and a week forecast of that particular city.
              This was made possible by using HTML, CSS, REACT JS.
            </p>
            <br />
            <div>
              <p>Api's Used :-</p>
              <p>{"-->"} Open Weather Api</p>
              <p>{"-->"} GeoDB Cities Api</p>
            </div>
          </div>
        </div>
        <a href="https://github.com/akodali9/weather_application" target="_blank" rel="noreferrer">
          <img src={Weatherimg} width={750} className="project-img" alt = "Weather Application"/>
        </a>
      </div>
      <div className="project">
        <div className="project-details">
          <p className="title">WhatsApp Clone</p>
          <div className="desc">
            <p>
              This App is a Front-end clone of the major social platfrom Built Using Flutter Framework.
            An Open-Source frameWork Used to build Cross-platform Apps maintained by Google. It has greater library support</p>
          </div>
        </div>
        <a href="https://github.com/akodali9/whatsappclone" target="_blank" rel="noreferrer">
          <img src={WhatsappImg} width={450} className="project-img whatsapp-img" alt = "Weather Application"/>
        </a>
      </div>
    </div>
  );
};
