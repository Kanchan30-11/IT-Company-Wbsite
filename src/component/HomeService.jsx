import React from "react";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaShieldAlt, FaCog } from "react-icons/fa";

const HomeService = () => {
  const services = [
    {
      title: "Web Development",
      description: "We build modern, scalable, and high-performance websites using the latest technologies.",
      icon: <FaLaptopCode className="text-blue-600 text-5xl" />,
    },
    {
      title: "Mobile App Development",
      description: "We create intuitive and feature-rich mobile applications for Android and iOS platforms.",
      icon: <FaMobileAlt className="text-blue-600 text-5xl" />,
    },
    {
      title: "Cloud Solutions",
      description: "Leverage our cloud computing services to scale your business with AWS, Azure, and GCP.",
      icon: <FaCloud className="text-blue-600 text-5xl" />,
    },
    {
      title: "Database Management",
      description: "We design, optimize, and manage databases to ensure efficient and secure data handling.",
      icon: <FaDatabase className="text-blue-600 text-5xl" />,
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with our cutting-edge cybersecurity solutions and threat protection.",
      icon: <FaShieldAlt className="text-blue-600 text-5xl" />,
    },
    {
      title: "IT Consulting",
      description: "Get expert IT consulting services to streamline your technology strategies and solutions.",
      icon: <FaCog className="text-blue-600 text-5xl" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full bg-blue-500 shadow-lg rounded-lg p-6 sm:p-10">
        {/* Page Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-6">
          Our Services
        </h2>
        <p className="text-gray-100 text-center mb-8 text-sm sm:text-base md:text-lg">
          We provide top-tier IT services to help businesses grow and succeed in the digital world.
        </p>

        {/* Services Grid */}
        <a href="/services">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-black mt-4">{service.title}</h3>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
        </a>
      </div>
    </div>
  );
};

export default HomeService;
