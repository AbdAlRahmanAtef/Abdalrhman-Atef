import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="footer" id="contact">
      <h2 className="main-title">Contact</h2>
      <div className="container">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/abdalrhman-atef-12b73022b/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/AbdAlRahmanAtef"
            rel="noreferrer"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            href="mailto:abdalrhman.atef.ramadan@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <HiMail />
          </a>
          <a href="tel:01019694471" rel="noreferrer">
            <BsTelephoneFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
