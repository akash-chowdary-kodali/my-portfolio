import React from "react";
import "../pages/css/Expertise.css";
import Weatherimg from "../assets/imgs/WeatherApp.png";
import WhatsappImg from "../assets/imgs/WhatsappClone.png";
import SalesforceinternImg from "../assets/imgs/salesforce-developer-intern-certificate.png";
// import { Footer } from "../components/footer/footer";
import {motion} from "framer-motion";

export const Expertise = () => {
  return (
    <motion.div initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      delay: 0.2,
      duration: 0.75,
    }}>
      <div className="mainp" id= "mainp">
        <p className="headingp">Work Experience</p>
        <div className="Work-Exeperince">
          <div className="project">
            <div className="project-details">
              <p className="title">Salesforce Developer Intern</p>
              <div className="desc">
                <p>
                  During my internship, I had the opportunity of Learning,
                  Developing and maintaining Salesforce applications.
                    Staying up-to-date on the latest Salesforce features and
                    trends present in the market.
                </p>
              </div>
            </div>
            <a
              href="https://smartinternz.com/internships/salesforce_certificates/45c7a284efa7d07f7bb5c9afb3080ffd"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SalesforceinternImg}
                width={750}
                className="expertise-img"
                alt="Weather Application"
              />
            </a>
          </div>
          <br />
          <br />
        </div>
        <p className="headingp">Projects</p>
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
          <a
            href="https://akodali9.github.io/weather_application/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Weatherimg}
              width={750}
              className="expertise-img"
              alt="Weather Application"
            />
          </a>
        </div>
        <div className="project">
          <div className="project-details">
            <p className="title">WhatsApp Clone</p>
            <div className="desc">
              <p>
                This App is a Front-end clone of the major social platfrom Built
                Using Flutter Framework. An Open-Source frameWork Used to build
                Cross-platform Apps maintained by Google. It has greater library
                support.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/akodali9/whatsappclone"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={WhatsappImg}
              width={450}
              className="expertise-img whatsapp-img"
              alt="WhatsApp Clone"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
