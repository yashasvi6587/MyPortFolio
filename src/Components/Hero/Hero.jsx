import React from 'react'
import mypic from "../../assets/mypic.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css' // Custom styles for 3D background
import Skills from '../Skills/Skills'
import Banner from "../Banner/Banner"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id='home' className='hero-section relative overflow-hidden'>
      <div className='hero-background'></div>

      <div className='relative z-10 flex flex-col items-center justify-center text-center px-8 py-40'>
        <img
          src={mypic}
          alt="Profile"
          className='w-80 h-80 rounded-full border-8 border-white dark:border-blue-500 shadow-2xl animate-float mb-10'
        />

        <h1 className='text-6xl sm:text-7xl font-extrabold text-white drop-shadow-lg mb-6'>
          <span className='text-blue-500'>I'm Yashasvi Sharma,</span><br /> Full-Stack Web Developer
        </h1>

        <p className='text-2xl text-gray-300 max-w-4xl mb-10 leading-relaxed'>
          With a passion for building dynamic and scalable web applications, I specialize in both front-end and back-end technologies. From React.js and Next.js to Node.js and MongoDB, I craft seamless user experiences and robust server-side solutions. Whether it's designing responsive websites with HTML, CSS, and JavaScript, or solving complex problems with Python, C++, and Java, I bring a versatile set of skills to every project.
        </p>

        <div className='flex flex-col sm:flex-row gap-6'>
          <Link
            offset={50}
            to='/contact'
            className='bg-blue-600 hover:bg-blue-700 text-white text-xl px-10 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105'
          >
            Connect with Me
          </Link>

          <a
            href='https://drive.google.com/file/d/1axfKCDcBQNCJJoAvk_wchKVd5gaHp0Eh/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl px-10 py-4 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300'
          >
            My Resume
          </a>
        </div>
      </div>
      <Skills/>
      <Banner/>
    </div>
  )
}

export default Hero
