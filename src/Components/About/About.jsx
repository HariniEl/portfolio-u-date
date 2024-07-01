import React from "react";
import "./About.css";
import { Type } from "./Type";
import { AiFillGithub,AiFillLinkedin,AiFillPhone } from "react-icons/ai";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
    return (
      <>
        <div className="about center">
        
  
          <h1 data-aos="fade-right" className="mobileHead">
            Hello, I am <span className="about__name">Harini E</span>
          </h1>
          <Type />
          <p className="about__desc" data-aos="fade-right">
          You can discuss with me about above things
          
          A highly passionate and creative Full Stack Developer with expertise in the MERN Stack, 
          armed with a diverse set of tools and technologies,creating interactive single page applications and 
          Knowledgeable in a wide range of programming languages
           and always eager to learn and explore new ones
            </p>
          <div className="about__contact center">
            <a
              href="https://github.com/HariniEl"
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              className="link link--icon"
            >
              <AiFillGithub/>
            </a>
           
            <a
              href="tel:9952751719"
              target="_blank"
              rel="noreferrer"
              aria-label="phone"
              className="link link--icon"
            >
              <AiFillPhone/>
            </a>
            <a
              href="https://www.linkedin.com/in/harini-elango-112132232"
              aria-label="linkedin"
              className="link link--icon"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin/>
            </a>
          </div>
  
          <button
            className="btnResume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1LDtKUXRi7dz3fhwHT4J6EOpXjzNCxoSu/view"
              );
            }}
          >
            Resume
          </button>
        </div>
        <Introduction />
        <Timeline />
        <section id="#skills">
          <Techstacks />
        </section>
      </>
    );
  };