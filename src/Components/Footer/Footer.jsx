import React from 'react';
import mylogo from "../../assets/mylogo.jpg";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";
import './Footer.css'; // Optional: For animated background
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-32 px-12 relative">
      {/* 3D Animated Background */}
      <div className="animated-bg-pattern"></div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 mb-16 relative z-10">
        {/* Left Section */}
        <div className="flex items-start gap-6 md:w-2/3 text-center md:text-left">
          <img 
            src={mylogo} 
            alt="Logo" 
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl transform hover:scale-110 transition duration-500" 
          />
          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            Full-Stack Developer skilled in <strong className="text-cyan-400">MERN stack, Java, C++, and Python.</strong> I build responsive frontends, robust backends, and scalable web applications with clean code and strong DSA foundations.
          </p>
        </div>

        {/* Right Section: Socials & Stack Tags */}
        <div className="flex flex-col items-center gap-6 md:w-1/3">
          <div className="flex gap-5 text-2xl text-white">
            <a href="https://github.com/yashasvi6587" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yashasvi-sharma-286a182a6" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-gray-300">
            <span className="bg-gray-800 px-3 py-1 rounded-full">React.js</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Java</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">C++</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">Firebase</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8 w-full"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-lg text-gray-400 gap-8 relative z-10">
        <p>@2025 <strong>Yashasvi Sharma</strong>. All Rights Reserved.</p>
        <Link href="/contact" className="hover:text-white transition text-lg">
          Connect With Me
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
