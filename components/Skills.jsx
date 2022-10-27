import React from "react";
import Image from "next/image";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import ts from "../assets/typescript.png";
import react_image from "../assets/react.png";
import redux_image from "../assets/redux.png";
import next_image from "../assets/next.png";
import sass from "../assets/sass.png";
import github from "../assets/github.png";

const skills = [
  {
    image: html,
    name: "HTML",
  },
  {
    image: css,
    name: "CSS",
  },
  {
    image: js,
    name: "JavaScript",
  },
  {
    image: ts,
    name: "TypeScript",
  },
  {
    image: react_image,
    name: "React",
  },
  {
    image: redux_image,
    name: "Redux",
  },
  {
    image: next_image,
    name: "Next",
  },
  {
    image: sass,
    name: "SASS",
  },
  {
    image: github,
    name: "Github",
  },
];

const Skill = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="main-title">Skills</h2>
      <div className="container">
        {skills.map((item) => (
          <div key={item.name} className="card">
            <Image src={item.image} width={100} height={100} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
