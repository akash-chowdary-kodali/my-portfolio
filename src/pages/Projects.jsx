import React from "react";
import "../pages/css/Projects.css";
import Weatherimg from "../assets/imgs/WeatherApp.webp";
import WhatsappImg from "../assets/imgs/WhatsappClone.webp";
import PortfolioImg from "../assets/imgs/portfolio.webp";
import QRAppImg from "../assets/imgs/qrApp.webp";
import G_Bloodbank from "../assets/imgs/gitamBloodbank.webp";

export const Projects = () => {
  return (
    <div className="proj-body">
      <div className="works-wrapper">
        <p className="works-heading">Recent Works</p>
        <div className="cards-work-container">
          <Card
            img={G_Bloodbank}
            title={"BloodBank"}
            desc={
              "I and our team successfully developed a blood bank website for our university. This platform serves as a crucial resource for students and faculty to donate and request blood donations within the campus community."
            }
            link={"https://www.bloodbankgitam.live"}
            type={"Web Development"}
          /><Card
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
              // A Real-time weather Application which can be used to obtain real time weather and 7-week forecast data for specified locations. 
              "A real-time weather application which provides current weather information and a comprehensive 7-week forecast for specified location. Users can easily access current conditions, temperature, humidity, wind speed etc."
            }
            link={"https://akodali9.github.io/weather_application/"}
            type={"Web Development"}
          />
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
