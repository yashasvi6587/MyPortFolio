import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile_img.svg"
import mypic from "../../assets/mypic.jpg"
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={mypic} alt="" />
        </div>
        <div className="about-right">
             <div className="about-para">
              <p>I have a good knowldeg of Front-end and Back-end web development</p>
              <p>I am also skilled in C++ , Python & Machine Learning</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>ReactJs,NodeJS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>C++ , DSA , Git</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>MongoDB , FireBase</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Python , Machine Learning</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>Happy Clients</p>
        </div>
      </div>
    </div>
  )
}

export default About
