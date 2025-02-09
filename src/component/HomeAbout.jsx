import React from "react";
import img1 from '../assets/bg.jpg'
import img2 from '../assets/bg.jpg'
import img3 from '../assets/bg.jpg'

const HomeAbout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 sm:p-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h2>
        <p className="text-gray-600 text-center mb-8 text-sm sm:text-base md:text-lg">
          We are a cutting-edge IT company delivering innovative digital solutions. 
          Our team ensures high-quality services in software development, 
          web applications, and cloud solutions.
        </p>

        {/* Company Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <a href="/about">
          <div className="bg-stone-300 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">🚀 Our Mission</h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              Empowering businesses with scalable technology solutions, 
              creating digital experiences that enhance efficiency.
            </p>
          </div>
          </a>
          <a href="/about"> 
          <div className="bg-stone-300 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">🌍 Our Vision</h3>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              To be a global leader in IT services, transforming the digital 
              landscape with innovative and impactful solutions.
            </p>
          </div>
          </a>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-gray-800">
            Meet Our Team
          </h3>
          <p className="text-gray-600 text-center mb-6 text-sm sm:text-base md:text-lg">
            Our talented professionals bring expertise and innovation to every project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center transition hover:shadow-xl">
              <img
                src={img1}
                alt="John Doe"
                className="w-24 h-24 rounded-full mb-3"
              />
              <h4 className="text-lg font-semibold">John Doe</h4>
              <p className="text-gray-500 text-sm">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center transition hover:shadow-xl">
              <img
                src={img2}
                alt="Jane Smith"
                className="w-24 h-24 rounded-full mb-3"
              />
              <h4 className="text-lg font-semibold">Jane Smith</h4>
              <p className="text-gray-500 text-sm">CTO & Lead Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center transition hover:shadow-xl">
              <img
                src={img3}
                alt="Michael Brown"
                className="w-24 h-24 rounded-full mb-3"
              />
              <h4 className="text-lg font-semibold">Michael Brown</h4>
              <p className="text-gray-500 text-sm">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
