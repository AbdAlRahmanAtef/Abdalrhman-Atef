import { BiRightArrowAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { ImStackoverflow } from "react-icons/im";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
import React, { useState } from "react";
import { projectsData } from "../utils/constants";

const Projects = () => {
  const [activeStack, setActiveStack] = useState(0);

  const handleActiveStack = (idx) => {
    if (activeStack === idx) {
      setActiveStack(0);
    } else {
      setActiveStack(idx);
    }
  };

  return (
    <div className="projects" id="proj">
      <h2 className="main-title">Projects</h2>
      <div className="container">
        <div className="content">
          {projectsData.map((project, index) => (
            <div key={index} className="card">
              <Image className="image" src={project.image} alt={project.name} />
              <div className="info">
                <p className="name">{project.name}</p>
                <div className="tec">
                  <p
                    className="stack-btn"
                    onClick={() => handleActiveStack(index + 1)}
                  >
                    <ImStackoverflow /> Stack{" "}
                    {activeStack === index + 1 ? (
                      <MdKeyboardArrowUp size={25} />
                    ) : (
                      <MdKeyboardArrowDown size={25} />
                    )}{" "}
                  </p>
                  <div
                    className={`stack ${activeStack === index + 1 && "active"}`}
                  >
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
                    title="Preview"
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
