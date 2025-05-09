import React from "react";
import Services_Data from "../../assets/services_data";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="relative px-6 sm:px-12 text-white">
      {/* 3D Animated Background (copied from Contact) */}
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="max-w-7xl py-64 mx-auto text-center relative z-10">
        {/* Title */}
        <h1 className="text-6xl font-bold mb-6 text-cyan-400 dark:text-cyan-300 relative z-10">
          My Services
        </h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 opacity-20 z-0"
        />

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
          {Services_Data.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 sm:p-10 rounded-3xl shadow-xl border border-blue-200 dark:border-gray-700 transition-transform duration-500 hover:scale-105 hover:rotate-[1deg] cursor-pointer overflow-hidden"
            >
              {/* Shine effect */}
              <div className="shine-effect"></div>

              {/* Service index number */}
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-400 mb-4">
                0{index + 1}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
                {service.title}
              </h2>

              {/* Features */}
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-left">
                <li>✅ {service.line_1}</li>
                <li>✅ {service.line_2}</li>
                <li>✅ {service.line_3}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
