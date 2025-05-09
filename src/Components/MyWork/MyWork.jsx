import React, { useState } from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import { projects } from '../../assets/mywork_data' // Adjust path as needed
import arrow_icon from '../../assets/arrow_icon.svg'
import './MyWork.css'

const MyWork = () => {
  const [visible, setVisible] = useState(6)

  const handleShowMore = () => {
    setVisible(projects.length)
  }

  return (
    <div id="work" className="relative py-32 px-12 text-white">
      {/* 3D Animated Background (copied from About) */}
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="max-w-7xl py-32 mx-auto text-center relative z-10">
        <h1 className="text-6xl font-bold mb-8 text-cyan-400 dark:text-cyan-300 relative z-10">
          My Latest Work
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 opacity-20 z-0"
        />

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 z-10 relative">
          {projects.slice(0, visible).map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-cyan-700 rounded-3xl shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-cyan-500/50"
            >
              <h1 className='text-center font-bold text-2xl m-5 text-blue-900'>{project.title} </h1>
              <img
                src={project.image}
                alt={`Project ${index}`}
                className="w-full h-52 object-cover rounded-xl mb-6 group-hover:brightness-75 transition duration-300"
              />
              <p className="text-lg text-gray-300 mb-3">{project.desc}</p>
              <p className="text-sm text-cyan-400 font-semibold mb-4">{project.tech}</p>
              <ul className="text-sm text-left text-gray-400 list-disc list-inside mb-4">
                <li>{project.highlight1}</li>
                <li>{project.highlight2}</li>
                <li>{project.highlight3}</li>
              </ul>
              <div className="flex gap-20 justify-center mt-4">
                <a href={project.link1} target="_blank" rel="noopener noreferrer">
                  <p className="w-8 h-8 text-xl hover:scale-110 transition" >Github</p>
                </a>
                <a href={project.link2} target="_blank" rel="noopener noreferrer">
                  <p className="w-8 h-8 text-xl hover:scale-110 transition" >Live</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyWork
