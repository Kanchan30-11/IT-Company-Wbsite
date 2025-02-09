import { useState } from "react";
import React from "react";
import { Link } from "react-router";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black fixed left-0 top-0 right-0 text-white z-50 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">IT Company</h1>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/portfolio" className="hover:underline">Portfolio</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col  text-blue-200 p-2 space-y-2">
          <a href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
