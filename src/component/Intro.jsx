import React from 'react';
import bg from '../assets/bg10.jpg';

const Intro = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center text-white px-6"
      
    >
      <div className="text-center max-w-3xl lg:pt-40 ">
        {/* Headline */}
        <h1 className="text-4xl text-blue-500 sm:text-6xl font-bold mb-4">
          Empowering Businesses with Cutting-Edge Technology
        </h1>
        
        {/* Paragraph */}
        <p className="text-lg sm:text-xl font-semibold text-gray-200 lg:pt-10">
          We are a leading IT solutions provider, helping businesses transform their digital presence 
          with innovative, scalable, and secure technology solutions. From web and mobile development 
          to cloud computing and cybersecurity, we deliver excellence in every project.
        </p>
      </div>
    </div>
  );
};

export default Intro;
