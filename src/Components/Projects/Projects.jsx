import React from "react";
import Ticketing from "./pic/Ticketing.png";
import Dice from "./pic/Dice.png";
import "./Projects.css";
import {
  
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
           <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Ticketing}
                    alt="Ticketing"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Zenclass Ticketing System for Query Resolving</h2>
                <p>
                Zen Class Query Resolving Platform for mentor and student. A real time status update on query and
real time chat feature.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://courageous-piroshki-353f31.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/HariniEl/ticketing-system-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
<div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Dice}
                    alt="Dice"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Dice Game</h2>
                <p>
                  Dice Game between the two players.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://clever-pothos-1f20ba.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/HariniEl/Dice-Game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
      
    </>
  );
};