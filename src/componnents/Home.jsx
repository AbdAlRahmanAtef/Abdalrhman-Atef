import React from 'react'
import home from '../images/home.jpg';
const Home = () => {
  return (
    <div className="home" id='home'>
      <div className="container">
        <div className="info">
          <p>Hi, my name is</p>
          <h1>Abdalrhamn Atef</h1>
          <h2>I'm a Front-End Developer.</h2>
          <p>I'm building web applications</p>
        </div>
        <div className="image">
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home
