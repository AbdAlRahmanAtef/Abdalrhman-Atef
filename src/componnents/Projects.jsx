import React from "react";
import ec from "../images/e-commerce.png";
import crypto from "../images/crypto.png";
import todo from "../images/todo.png";
import game from "../images/typing.png";
import cruds from "../images/cruds.png";
import weather from "../images/weather.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { TbBrandJavascript, TbBrandSass } from "react-icons/tb";
import { DiReact } from "react-icons/di";
import { ImHtmlFive, ImStackoverflow } from "react-icons/im";
import { SiRedux } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { AiOutlineApi } from "react-icons/ai";

const Projects = () => {
  return (
    <div className="projects" id="proj">
      <h2 className="main-title">Projects</h2>
      <div className="container">
        <div className="card">
          <img src={crypto} alt="e-commerce" />
          <div className="info">
            <p className="name">Crypto App</p>
            <div className="tec">
              <p>
                <ImStackoverflow /> Stack
              </p>
              <div className="stack">
                <span>
                  <DiReact /> React
                </span>
                <span>
                  <TbBrandSass /> SASS
                </span>
                <span>
                  <AiOutlineApi /> API
                </span>
                <span>
                  <SiRedux /> Redux
                </span>
              </div>
            </div>
            <div className="code">
              <a
                href="https://github.com/AbdAlRahmanAtef/Cryptocurrency-App"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <BiRightArrowAlt className="icon" />
              </a>
              <a
                href="https://abdalrahmanatef.github.io/Cryptocurrency-App/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <BiRightArrowAlt className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ec} alt="e-commerce" />
          <div className="info">
            <p className="name">E-Commerce App</p>
            <div className="tec">
              <p>
                <ImStackoverflow /> Stack
              </p>
              <div className="stack">
                <span>
                  <DiReact /> React
                </span>
                <span>
                  <TbBrandSass /> SASS
                </span>
                <span>
                  <AiOutlineApi /> API
                </span>
              </div>
            </div>
            <div className="code">
              <a
                href="https://github.com/AbdAlRahmanAtef/React-E-Commerce"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <BiRightArrowAlt className="icon" />
              </a>
              <a
                href="https://abdalrahmanatef.github.io/React-E-Commerce/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <BiRightArrowAlt className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={weather} alt="e-commerce" />
          <div className="info">
            <p className="name">Weather App</p>
            <div className="tec">
              <p>
                <ImStackoverflow /> Stack
              </p>
              <div className="stack">
                <span>
                  <DiReact /> React
                </span>
                <span>
                  <IoLogoCss3 /> CSS
                </span>
                <span>
                  <AiOutlineApi /> API
                </span>
              </div>
            </div>
            <div className="code">
              <a
                href="https://github.com/AbdAlRahmanAtef/Weather-App-PWA"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <BiRightArrowAlt className="icon" />
              </a>
              <a
                href="https://abdalrahmanatef.github.io/Weather-App-PWA/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <BiRightArrowAlt className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={cruds} alt="e-commerce" />
          <div className="info">
            <p className="name">CRUDS App</p>
            <div className="tec">
              <p>
                <ImStackoverflow /> Stack
              </p>
              <div className="stack">
                <span>
                  <ImHtmlFive /> HTML
                </span>
                <span>
                  <TbBrandSass /> SASS
                </span>
                <span>
                  <TbBrandJavascript />
                  JavaScript
                </span>
              </div>
            </div>
            <div className="code">
              <a
                href="https://github.com/AbdAlRahmanAtef/Products-Management-System-CRUDS"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <BiRightArrowAlt className="icon" />
              </a>
              <a
                href="https://abdalrahmanatef.github.io/Products-Management-System-CRUDS/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <BiRightArrowAlt className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={game} alt="game" />
          <div className="info">
            <p className="name">Typing-Test App</p>
            <div className="tec">
              <p>
                <ImStackoverflow /> Stack
              </p>
              <div className="stack">
                <span>
                  <ImHtmlFive /> HTML
                </span>
                <span>
                  <IoLogoCss3 /> CSS
                </span>
                <span>
                  <TbBrandJavascript />
                  JavaScript
                </span>
              </div>
            </div>
            <div className="code">
              <a
                href="https://github.com/AbdAlRahmanAtef/Typing-Speed-Test-Game"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <BiRightArrowAlt className="icon" />
              </a>
              <a
                href="https://abdalrahmanatef.github.io/Typing-Speed-Test-Game/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <BiRightArrowAlt className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={todo} alt="game" />
          <div className="info">
            <p className="name">Todo App</p>
            <div className="tec">
              <p>
                <ImStackoverflow /> Stack
              </p>
              <div className="stack">
                <span>
                  <DiReact />
                  React
                </span>
                <span>
                  <ImHtmlFive /> HTML
                </span>
                <span>
                  <TbBrandSass /> SASS
                </span>
              </div>
            </div>
            <div className="code">
              <a
                href="https://github.com/AbdAlRahmanAtef/Todo-App"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <BiRightArrowAlt className="icon" />
              </a>
              <a
                href="https://abdalrahmanatef.github.io/Todo-App/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <BiRightArrowAlt className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/AbdAlRahmanAtef?tab=repositories"
        className="all"
        target="_blank"
        rel="noreferrer"
      >
        See More
        <BiRightArrowAlt className="icon" />
      </a>
    </div>
  );
};

export default Projects;
