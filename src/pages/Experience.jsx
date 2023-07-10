import { useEffect, useState } from "react";
// import SalesforceinternImg from "../assets/imgs/salesforce-developer-intern-certificate.png";

import "./css/Experience.css";

export const Experience = () => {
  const data = [
    {
      id: 0,
      label: "Developer Intern @Salesforce Inc",
      location: "Virtual",
      period: "April 2023 - may 2023",
      link: "https://smartinternz.com/internships/salesforce_certificates/45c7a284efa7d07f7bb5c9afb3080ffd",
      desc: "During my internship, I had the opportunity of Learning, Developing and maintaining Salesforce applications. Staying up-to-date on the latest Salesforce features and trends present in the market.",
    },
  ];
  return (
    <div className="exp-body">
    <div className="exp">
      <p className="exp-heading">Professional Experience</p>
      <ExpAccordion items={data} keepOthersOpen={false} />
    </div></div>
  );
};

const ExpAccordion = ({ items, keepOthersOpen }) => {
  const [accordionItems, setAccordionItems] = useState(null);

  useEffect(() => {
    if (items) {
      setAccordionItems([
        ...items.map((item) => ({
          ...item,
          toggled: false,
        })),
      ]);
    }
  }, [items]);

  function handleAccordionToggle(clickedItem) {
    setAccordionItems([
      ...accordionItems.map((item) => {
        let toggled = item.toggled;

        if (clickedItem.id === item.id) {
          toggled = !item.toggled;
        } else if (!keepOthersOpen) {
          toggled = false;
        }

        return {
          ...item,
          toggled,
        };
      }),
    ]);
  }
  
  return (
    <div className="accordion-parent">
      {accordionItems?.map((listItem, key) => {
        return (
          <div
            className={`accordion ${listItem.toggled ? "toggled" : "" || (listItem.id === 0)?"toggled":"" }`}
            key={key}
          >
            <button
              className="toggle"
              onClick={() => handleAccordionToggle(listItem)}
            >
              <p>{listItem.label}</p>
              {/* <p>{listItem.period}</p> */}
              <div className="direction-indicator">
                {listItem.toggled ? <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>: 
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                }
              </div>
            </button>
            <div className="content-parent">
              <div className="content">
                <div className="top-content-details">
                  <p>
                    {/* <span class="material-symbols-outlined">location_on</span> */}
                    {listItem.location + " Mode"}
                  </p>
                  <p>
                    {listItem.period}
                  </p>
                </div>
                <br/>
                <div className="content-descblock">
                  <p>{listItem.desc}</p>
                  <img
                    src="https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg"
                    alt="company img"
                  />
                </div>
                <div className="button-exp"><a href={listItem.link} target="_blank" rel="noreferrer">
                  View Certificate
                </a></div>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
