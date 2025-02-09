import React from "react";
import img1 from '../assets/icon1.png'
import img2 from '../assets/icon2.jpg'
import img3 from '../assets/icon3.jpg'
import img4 from '../assets/icon4.jpg'
const projects = [
  {
    id: 1,
    title: "AI-Powered Chatbot",
    description: "A smart AI chatbot for seamless customer support.",
    image:img1 // Replace with actual image
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with secure payment integration.",
    image: img2,
  },
  {
    id: 3,
    title: "Cloud-Based CRM",
    description: "A scalable cloud CRM to manage customer data effectively.",
    image: img3,
  },
  {
    id: 4,
    title: "Cybersecurity Suite",
    description: "A next-gen security suite to protect businesses from cyber threats.",
    image: img4,
  },
];

const Portfolio = () => {
  return (
    <div className="bg-black py-12  lg:mt-8 px-6 md:px-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Our Portfolio</h1>
        <p className="text-gray-200 mt-2">
          Explore some of our innovative projects that empower businesses.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
