import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"
import mylogo from "../../assets/mylogo.jpg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={mylogo} alt="" className='mylogo' />
          <p>I am a Front - End Web Developer & Back - End Web Developer from Delhi, India with 2+ years of experience</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" id="" />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bootom-left">@ 2025 Yashasvi Sharma. All Rights Reserved</p>
        <div className="footer-bottom-right">
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
