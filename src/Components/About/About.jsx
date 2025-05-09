import React from 'react'
import mypic from "../../assets/mypic.jpg"
import './About.css'

const About = () => {
  return (
    <>
      {/* 3D Animated Background */}
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="relative z-10 py-64 px-10 text-white backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          
          {/* Profile Image */}
          <div className="flex-shrink-0 transform hover:scale-110 transition-transform duration-500">
            <img
              src={mypic}
              alt="Yashasvi Sharma"
              className="w-96 h-96 rounded-3xl shadow-2xl border-8 border-blue-500 object-cover animate-float-glow"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-blue-400/30 shadow-xl animate-fade-in">
            <h2 className="text-6xl font-extrabold mb-10 text-cyan-400 drop-shadow-lg">About Me</h2>
            <p className="text-xl leading-relaxed mb-6 text-gray-200">
              I'm <span className="font-semibold text-blue-300">Yashasvi Sharma</span>, a full-stack web developer, I specialize in crafting responsive, high-performance web applications. With a solid foundation in both front-end and back-end development, I have honed my skills in various technologies including React.js, Next.js, Node.js, and Express.js. My expertise extends to databases such as MongoDB and Firebase, ensuring robust and scalable solutions.
            </p>
            <p className="text-xl leading-relaxed mb-6 text-gray-200">
              I am proficient in programming languages such as <span className='font-semibold text-blue-300'>C, C++, Java, and Python,</span>  enabling me to approach complex problems with a versatile mindset. My experience with <span className='font-semibold text-blue-300'>HTML, CSS, and JavaScript</span>  allows me to build intuitive and engaging user interfaces, while my understanding of Git ensures seamless version control and collaboration in team environments.
            </p>
            <p className="text-xl leading-relaxed text-gray-200">
              Driven by a passion for continuous learning, I thrive on turning ideas into reality through clean, efficient code and innovative solutions. I am always looking to collaborate on exciting projects and leverage my diverse skill set to create impactful web experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
