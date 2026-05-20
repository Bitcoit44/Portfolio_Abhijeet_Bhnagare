import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          <span className="text-cyan-400">Abhijeet</span> Bhangare
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <a
            href="/#home"
            className="hover:text-cyan-400 transition"
          >
            Home
          </a>

          <a
            href="/#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="/#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="/#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

        {/* Desktop Button */}
        <button className="hidden md:block border border-cyan-400 text-cyan-400 px-4 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition">

          Hire Me

        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >

          {
            isOpen ? <FaTimes /> : <FaBars />
          }

        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >

        <div className="flex flex-col items-center gap-6">

          <a
            href="/#home"
            className="hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>

          <a
            href="/#projects"
            className="hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>

          <a
            href="/#about"
            className="hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>

          <a
            href="/#contact"
            className="hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <button className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition">

            Hire Me

          </button>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;
