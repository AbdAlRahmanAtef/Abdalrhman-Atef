import { BiRightArrowAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import {
  TbBrandJavascript,
  TbBrandSass,
  TbBrandHtml5,
  TbBrandNextjs,
  TbBrandCss3,
} from "react-icons/tb";
import { DiReact } from "react-icons/di";
import { FaCode } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";
import { SiRedux } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { FiDatabase } from "react-icons/fi";
import Image from "next/image";
import React from "react";
import rec from "../assets/r-commerce.jpg";
import sec from "../assets/s-commerce.jpg";
import coffee from "../assets/coffee.jpg";
import crypto from "../assets/crypto.jpg";
import todo from "../assets/todo.jpg";
import game from "../assets/typing.jpg";
import cruds from "../assets/cruds.jpg";
import weather from "../assets/weather.jpg";

const projects = [
  {
    name: "Cryptocurrency",
    code: "https://github.com/AbdAlRahmanAtef/Cryptocurrency-App",
    live: "https://abdalrahmanatef.github.io/Cryptocurrency-App/",
    image: crypto,
    stack: [
      {
        tec: "React",
        icon: <DiReact />,
      },
      {
        tec: "Redux",
        icon: <SiRedux />,
      },
      {
        tec: "SASS",
        icon: <TbBrandSass />,
      },
      {
        tec: "API",
        icon: <AiOutlineApi />,
      },
    ],
  },
  {
    name: "Next E-Commerce",
    code: "https://github.com/AbdAlRahmanAtef/nextjs-ecommerce",
    live: "https://nextjs-ecommerce-4zcku11tc-abdalrahmanatef.vercel.app/",
    image: sec,
    stack: [
      {
        tec: "Next",
        icon: <TbBrandNextjs />,
      },
      {
        tec: "SASS",
        icon: <TbBrandSass />,
      },
      {
        tec: "Sanity",
        icon: <FiDatabase />,
      },
    ],
  },
  {
    name: "React E-Commerce",
    code: "https://github.com/AbdAlRahmanAtef/React-E-Commerce",
    live: "https://abdalrahmanatef.github.io/React-E-Commerce/",
    image: rec,
    stack: [
      {
        tec: "React",
        icon: <DiReact />,
      },
      {
        tec: "SASS",
        icon: <TbBrandSass />,
      },
      {
        tec: "API",
        icon: <AiOutlineApi />,
      },
    ],
  },
  {
    name: "Todo App",
    code: "https://github.com/AbdAlRahmanAtef/react-todo-list",
    live: "https://abdalrahmanatef.github.io/react-todo-list/",
    image: todo,
    stack: [
      {
        tec: "React",
        icon: <DiReact />,
      },
      {
        tec: "Redux",
        icon: <SiRedux />,
      },
      {
        tec: "SASS",
        icon: <SiRedux />,
      },
    ],
  },
  {
    name: "Weather App",
    code: "https://github.com/AbdAlRahmanAtef/Weather-App-PWA",
    live: "https://abdalrahmanatef.github.io/Weather-App-PWA/",
    image: weather,
    stack: [
      {
        tec: "React",
        icon: <DiReact />,
      },
      {
        tec: "CSS",
        icon: <TbBrandCss3 />,
      },
      {
        tec: "API",
        icon: <AiOutlineApi />,
      },
    ],
  },
  {
    name: "Coffee Shop",
    code: "https://github.com/AbdAlRahmanAtef/Responsive-Coffee-shop",
    live: "https://abdalrahmanatef.github.io/Responsive-Coffee-shop/",
    image: coffee,
    stack: [
      {
        tec: "HTML",
        icon: <TbBrandHtml5 />,
      },
      {
        tec: "CSS",
        icon: <TbBrandCss3 />,
      },
      {
        tec: "JavaScript",
        icon: <TbBrandJavascript />,
      },
    ],
  },
  {
    name: "Inventory App",
    code: "https://github.com/AbdAlRahmanAtef/Products-Management-System-CRUDS",
    live: "https://abdalrahmanatef.github.io/Products-Management-System-CRUDS/",
    image: cruds,
    stack: [
      {
        tec: "HTML",
        icon: <TbBrandHtml5 />,
      },
      {
        tec: "SASS",
        icon: <TbBrandSass />,
      },
      {
        tec: "JavaScript",
        icon: <TbBrandJavascript />,
      },
    ],
  },
  {
    name: "Typing Speed Test",
    code: "https://github.com/AbdAlRahmanAtef/Typing-Speed-Test-Game",
    live: "https://abdalrahmanatef.github.io/Typing-Speed-Test-Game/",
    image: game,
    stack: [
      {
        tec: "HTML",
        icon: <TbBrandHtml5 />,
      },
      {
        tec: "CSS",
        icon: <TbBrandCss3 />,
      },
      {
        tec: "JavaScript",
        icon: <TbBrandJavascript />,
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="projects" id="proj">
      <h2 className="main-title">Projects</h2>
      <div className="container">
        <div className="content">
          {projects.map((project) => (
            <div key={project.name} className="card">
              <Image className="image" src={project.image} alt={project.name} />
              <div className="info">
                <p className="name">{project.name}</p>
                <div className="tec">
                  <p>
                    <ImStackoverflow /> Stack
                  </p>
                  <div className="stack">
                    {project.stack.map((tec) => (
                      <>
                        <span>
                          {tec.icon}
                          {tec.tec}
                        </span>
                      </>
                    ))}
                  </div>
                </div>
                <div className="code">
                  <a
                    href={project.code}
                    title="Code On Github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaCode size={20} />
                  </a>
                  <a
                    href={project.live}
                    title="Code On Github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsEye size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
    </div>
  );
};

export default Projects;
