import React from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "./profile.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h6>
                Hi Everyone, My name is{" "}
                <span className="different">Harini</span> and I am from{" "}
                <span className="different">
                  {" "}
                  Puducherry, Pondicherry(India)
                </span>
                    I am a highly motivated and ambitious individual with a unique blend of technical. 
                    I Completed B.TECH-IT(Information Technology) from a
                {" "}
                <span className="different">
                CGPA of 7.5 out of 10.
                 </span>
              </h6>
              
              <h6>
                In order to stay current in the ever-evolving field of technology, I decided to take my skills to the next level by pursuing a 6-month intensive{" "}<span className="different"> MERN Stack Development course from Guvi IIT Madras</span>
                . Through this program, I have gained hands-on experience with technologies such as MongoDB, Express, React, and Node.js,{" "}
                <span className="different">which enables me to develop modern, responsive web applications.</span> 
                </h6>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};