import React from "react";
import "../pages/css/Projects.css";
import Weatherimg from "../assets/imgs/WeatherApp.png";
import WhatsappImg from "../assets/imgs/WhatsappClone.png";
import PortfolioImg from "../assets/imgs/portfolio.jpeg";
import QRAppImg from "../assets/imgs/qrApp.jpg";
// import CalculatorExpoImg from "../assets/imgs/Calculator_expo.jpg";

export const Projects = () => {
  return (
    <div className="proj-body">
      <div className="works-wrapper">
        <p className="works-heading">Recent Works</p>
        <div className="cards-work-container">
          <Card
            img={QRAppImg}
            title={"QR App"}
            desc={
              "This Flutter app enables users to effortlessly generate QR codes containing various data and swiftly scan both barcodes and QR codes using their device's camera, offering a seamless experience for code generation and extraction."
            }
            link={"https://github.com/akodali9/qr_app"}
            type={"App Development"}
          />
          <Card
            img={WhatsappImg}
            className="whatsapp"
            title={"Whatsapp Clone"}
            desc={
              "I successfully crafted a dynamic WhatsApp frontend clone utilizing the powerful Flutter framework, seamlessly merging intuitive design with modern user interactions."
            }
            link="https://github.com/akodali9/whatsappui_clone"
            type="App Development"
          />
          <Card
            img={PortfolioImg}
            title={"Portfolio"}
            desc={"This portfolio website project elegantly presents my proficiency and development experience, employing cutting-edge technologies to create a dynamic showcase of my capabilities."}
            link={"https://akashkodali.studio"}
            type={"Web Development"}
          />
          <Card
            img={Weatherimg}
            title={"Weather Application"}
            desc={
              "A Real-time weather Application which can be used to obtain real time weather and 7-week forecast data for specified locations."
            }
            link={"https://akodali9.github.io/weather_application/"}
            type={"Web Development"}
          />

          {/* <Card
            img={CalculatorExpoImg}
            className="Calculator"
            title={"Calculator"}
            desc={
              "I developed a fully functional Calculator mobile app using React Native and Expo CLI, blending intuitive user interface design with efficient arithmetic capabilities."
            }
            link="https://github.com/akodali9/ReactNative_calculator"
            type="App Development"
          /> */}
        </div>
      </div>
    </div>
  );
};

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        {/* <a href={props.link} target="_blank" rel="noreferrer"> */}
        <img src={props.img} alt={"project img"} className="card__image" />
        {/* </a> */}
        <p className="card__title">{props.title}</p>
        {/* <p className="card__description">{props.type}</p> */}
        <p className="card__description">{props.desc}</p>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={props.link}
        className="card__btn"
      >
        View Project
      </a>
    </div>
  );
}
