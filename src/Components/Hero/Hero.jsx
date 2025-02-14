import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mypic from "../../assets/mypic.jpg"

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={mypic} alt="" />
      <h1> <span>I'm Yashasvi Sharma,</span>Full-Stack Web Developer</h1>
      <p>I am a Front - End Web Developer & Back - End Web Developer from Delhi, India with 2+ years of experience</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        <a href='https://drive.google.com/file/d/1SfQGqU1N5Kqjs7wajLtNK5egU9UvVkj9/view?usp=sharing' target='_blank' className="hero-resume">My Resume</a>
      </div>
    </div>
  )
}

export default Hero
