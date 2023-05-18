import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import Title from './Title';
import { Box } from '@mui/material';
const Contact = () => {
  return (
    <Box id="contact" mb={6}>
      <Title text="Contact" />
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
    </Box>
  );
};

export default Contact;
