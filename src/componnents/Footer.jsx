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
            <span className="icon">
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://github.com/AbdAlRahmanAtef"
            rel="noreferrer"
            target="_blank"
          >
            <span className="icon">
              <BsGithub />
            </span>
          </a>
          <a
            href="mailto:abdalrhman.atef.ramadan@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <span className="icon">
              <HiMail />
            </span>
          </a>
          <a href="tel:01019694477" rel="noreferrer">
            <span className="icon">
              <BsTelephoneFill />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
