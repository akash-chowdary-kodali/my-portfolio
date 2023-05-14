import React from "react";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skillsbody">
      <div className="mainS">
        <p className="headingS">Languages</p>
        <div className="detailsS">
          <ul>
            <li>C</li>
            <li> Python</li>
            <li>Java</li>
            <li>R</li>
          </ul>
          <p className="headingS">Web</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <p className="headingS">Frameworks</p>
        <div className="detailsS">
          <ul>
            <li>Flutter</li>
            <li>React JS</li>
          </ul>
        </div>

        <p className="headingS">Operating Systems</p>
        <div className="detailsS">
          <ul>
            <li>Windows</li>
            <li>MacOS</li>
            <li>Linux</li>
          </ul>
        </div>
        <p className="headingS">Tools</p>
        <div className="detailsS">
          <ul>
            <li> Git </li>
            <li> GitHub </li>
            <li> Visual Studio Code </li>
            <li> Eclipse </li>
            <li>PyCharm </li>
            <li> Word </li>
            <li>PowerPoint</li>
            <li> Excel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
