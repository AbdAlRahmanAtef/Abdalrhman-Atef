import Image from "next/image";
import React from "react";
import home from "../assets/home.jpg";
const HomePage = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="info">
          <p>Hi, my name is</p>
          <h1>Abdalrhamn Atef</h1>
          <h2>I&apos;m a Front-End Developer.</h2>
          <p>I&apos;m building web applications</p>
        </div>
        <div className="image">
          <Image className="img" src={home} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
