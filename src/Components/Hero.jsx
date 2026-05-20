import React from "react";
import profileImg from "../assets/2.png";

const Hero = () => {
  

  return (

    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-25"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 justify-center items-center">

        {/* Image */}

        <div className="flex justify-center">

          <img
            src={profileImg}
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl hover:scale-105 transition duration-300"
          />

        </div>

        {/* Text */}

        <div className="text-center md:text-left">

          <h1 className="text-3xl md:text-7xl font-bold leading-tight">

            Hi, I'm 

            <span className="text-cyan-400  mt-2">
             {" "} Abhijeet Bhangare
            </span>

          </h1>

          <p className="mt-6 text-xl text-gray-300">

            Full Stack Java Developer | React Developer | Blockchain Enthusiast

          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">

            I build modern, scalable, responsive web applications with clean UI
            and powerful backend systems.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 text-center"
            >

              View Projects

            </a>

            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition duration-300 text-center"
            >

              Contact Me

            </a>

          </div>

        </div>

      </div>

    </section>
  );

};

export default Hero;