import React from "react";
import img1 from '../assets/bg.jpg';
import img2 from '../assets/bg.jpg';
import img3 from '../assets/bg.jpg';
import img4 from '../assets/bg.jpg';
import missionImg from '../assets/bg.jpg';
import valuesImg from '../assets/bg.jpg';
import clientImg from '../assets/bg.jpg';
import bg from '../assets/bg5.jpg'
const About = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center py-12 lg:mt-8 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${bg})` }}>
      
      {/* Header Section */}
      <div className="w-full  max-w-6xl bg-white shadow-lg rounded-lg p-8 sm:p-12">
        <h2 className="lg:text-6xl text-3xl font-bold text-center text-blue-600 mb-6">
          About Our Company
        </h2>
        <p className="text-gray-600 text-center text-lg">
          We are a leading IT solutions provider, specializing in custom software development, 
          cloud computing, AI-driven solutions, and enterprise technology consulting. 
          Our team is dedicated to delivering excellence and innovation to businesses worldwide.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mt-12">
        
        {/* Mission */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <img src={missionImg} alt="Mission" className="w-40 h-40 rounded-full mb-4" />
          <h3 className="text-2xl font-semibold text-blue-600">🚀 Our Mission</h3>
          <p className="text-gray-700 mt-3 text-lg">
            Our mission is to empower businesses through innovative technology, providing seamless 
            and scalable solutions that drive efficiency, security, and growth.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <img src={valuesImg} alt="Vision" className="w-40 h-40 rounded-full mb-4" />
          <h3 className="text-2xl font-semibold text-blue-600">🌍 Our Vision</h3>
          <p className="text-gray-700 mt-3 text-lg">
            To become a globally recognized leader in digital transformation, 
            AI, and cloud-based solutions, helping businesses shape the future of technology.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-6xl mt-16 text-center">
        <h3 className="text-3xl font-semibold text-blue-600">Our Core Values</h3>
        <p className="text-gray-100 mt-4 font-semibold text-lg">
          Our principles drive us towards excellence and customer satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-600">🏆 Excellence</h4>
            <p className="text-gray-600 mt-2 text-lg">Delivering high-quality services with precision and expertise.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-600">🤝 Integrity</h4>
            <p className="text-gray-600 mt-2 text-lg">Building long-term relationships with honesty and trust.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-600">🌱 Innovation</h4>
            <p className="text-gray-600 mt-2 text-lg">Continuously evolving to integrate the latest technology trends.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mt-16">
        <h3 className="text-3xl font-semibold text-blue-600 text-center">Why Choose Us?</h3>
        <p className="text-gray-100 font-semibold text-center mt-4 text-lg">
          Here’s what makes us stand out from the competition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-600">💡 Expertise</h4>
            <p className="text-gray-600 mt-2 text-lg">Over a decade of experience in IT solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-blue-600">🚀 Cutting-Edge Technology</h4>
            <p className="text-gray-600 mt-2 text-lg">We use AI, cloud, and modern frameworks for best results.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mt-16">
        <h3 className="text-3xl font-semibold text-blue-600 text-center">Meet Our Leadership Team</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[{ img: img1, name: "John Doe", role: "CEO & Founder" },
            { img: img2, name: "Jane Smith", role: "CTO & Lead Developer" },
            { img: img3, name: "Michael Brown", role: "UI/UX Designer" },
            { img: img4, name: "Sarah Johnson", role: "Marketing Head" }]
            .map((member, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-3" />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mt-16">
        <h3 className="text-3xl font-semibold text-blue-600 text-center">What Our Clients Say</h3>
        <div className="flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 text-lg">
              "The team at this company delivered an outstanding solution tailored to our needs. Highly recommended!"
            </p>
            <h4 className="text-lg font-semibold mt-4">- Alex Johnson</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 text-lg">
              "The team at this company delivered an outstanding solution tailored to our needs. Highly recommended!"
            </p>
            <h4 className="text-lg font-semibold mt-4">- Alex Johnson</h4>
          </div>
        </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-600 text-white text-center py-8 px-4 mt-16 rounded-lg shadow-md w-full max-w-6xl">
        <h3 className="text-2xl font-semibold">Ready to Transform Your Business?</h3>
        <p className="text-lg mt-2">Let's discuss how our IT solutions can help you grow.</p>
        <button className="mt-4 bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200">
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default About;
