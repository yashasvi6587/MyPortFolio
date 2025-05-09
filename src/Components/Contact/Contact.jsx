import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "df4469d4-4f53-4b34-aef1-969c33034d50");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="relative py-32 px-12 text-white">
      {/* 3D Animated Background (copied from About) */}
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-32">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-cyan-400 dark:text-cyan-300 relative z-10">
            Get In Touch
          </h1>
          <img
            src={theme_pattern}
            alt=""
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 opacity-10 z-0"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl font-semibold">Let's Talk</h2>
            <p className="text-xl text-gray-200 dark:text-gray-300">
              I'm currently available for new projects. Feel free to reach out
              to discuss any ideas or collaborations!
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <img src={mail_icon} alt="email" className="w-8 h-8" />
                <p className="text-2xl">yashharit1991@gmail.com</p>
              </div>
              <div className="flex items-center gap-6">
                <img src={call_icon} alt="phone" className="w-8 h-8" />
                <p className="text-2xl">+91-7827747125</p>
              </div>
              <div className="flex items-center gap-6">
                <img src={location_icon} alt="location" className="w-8 h-8" />
                <p className="text-2xl">Delhi, India</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:w-1/2 bg-gray-900 dark:bg-gray-800 p-10 rounded-xl shadow-lg space-y-8"
          >
            <div>
              <label className="block text-xl font-semibold mb-2 text-white">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full px-6 py-3 rounded-md border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold mb-2 text-white">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-6 py-3 rounded-md border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xl font-semibold mb-2 text-white">
                Message
              </label>
              <textarea
                name="message"
                rows="8"
                placeholder="Write your message..."
                required
                className="w-full px-6 py-3 rounded-md border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-cyan-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-4 rounded-md hover:bg-cyan-700 transition duration-300"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
