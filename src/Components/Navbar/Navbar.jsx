import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import mylogo from "../../assets/mylogo.jpg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("/");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Me" },
    { to: "/services", label: "Services" },
    { to: "/project", label: "Portfolio" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg backdrop-blur-lg transform transition-all duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        
        {/* Logo with Animation */}
        <img 
          src={mylogo} 
          alt="Logo" 
          className="w-20 h-20 rounded-full border-4 border-white shadow-xl transform transition-all duration-500 hover:scale-125 hover:rotate-12 hover:shadow-2xl"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-2xl font-semibold text-gray-200 hover:text-blue-500 transition duration-300 ease-in-out">
          {links.map(link => (
            <li key={link.to} className="relative group">
              <Link
                to={link.to}
                onClick={() => setMenu(link.to)}
                className="transition hover:text-blue-400 transform hover:scale-110"
              >
                {link.label}
              </Link>
              {menu === link.to && (
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-blue-500 rounded-full animate-pulse" />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Connect Button */}
        <Link
          to="/contact"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-110"
        >
          Connect with Me
        </Link>

        {/* Mobile Menu Toggle */}
        <img
          src={menu_open}
          onClick={openMenu}
          className="w-8 h-8 cursor-pointer md:hidden transform transition-all duration-300"
          alt="menu"
        />

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="fixed top-0 right-[-100%] w-80 h-full bg-black text-white shadow-lg p-8 z-50 flex flex-col items-start gap-6 transition-all duration-500"
        >
          <img
            src={menu_close}
            alt="close"
            onClick={closeMenu}
            className="w-7 h-7 self-end cursor-pointer mb-6"
          />
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => {
                setMenu(link.to);
                closeMenu();
              }}
              className="w-full py-3 px-5 rounded-md text-lg transition hover:bg-blue-600 transform hover:scale-105"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full text-center"
          >
            Connect with Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
