import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import github from '../images/github.png'
import js from '../images/javascript.png'
import sass from '../images/sass.png'
import react from '../images/react.png'
import ts from '../images/typescript.png'
import redux from '../images/redux.png'
const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <h2 className="main-title">
        Skills
      </h2>
      <div className="container">
        <div className="card">
          <img src={html} alt="html" />
          <span>HTML</span>
        </div>
        <div className="card">
          <img src={css} alt="html" />
          <span>CSS</span>
        </div>
        <div className="card">
          <img src={js} alt="html" />
          <span>JavaScript</span>
        </div>
        <div className="card">
          <img src={ts} alt="html" />
          <span>TypeScript</span>
        </div>
        <div className="card">
          <img src={react} alt="html" />
          <span>React</span>
        </div>
        <div className="card">
          <img src={redux} alt="html" />
          <span>Redux</span>
        </div>
        <div className="card">
          <img src={sass} alt="html" />
          <span>SASS</span>
        </div>
        <div className="card">
          <img src={github} alt="html" />
          <span>Github</span>
        </div>
      </div>
    </div>
  )
}

export default Skills
