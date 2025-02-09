import React, { useState } from "react";
import bg from '../assets/bg3.jpg'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
     <div
          className=" min-h-screen bg-black  flex-col   sm:px-6 lg:px-8 py-6  lg:mt-8 bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center text-white px-6"
          style={{ backgroundImage: `url(${bg})` }}
>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">
          Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you soon.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              required
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-10 text-center w-full max-w-2xl text-black">
        <h3 className="text-lg sm:text-xl font-semibold ">
          Our Contact Info
        </h3>
        <p className=" mt-2 text-sm sm:text-base">📍 Location: Noida, Uttar Pradesh, India</p>
        <p className="text-sm sm:text-base">📞 Phone: (0) 120-4730534</p>
        <p className=" text-sm sm:text-base">
          ✉️ Email:{" "}
          <a href="mailto:info@brainsterra.com" className="text-blue-500 hover:underline">
            info@brainsterra.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
