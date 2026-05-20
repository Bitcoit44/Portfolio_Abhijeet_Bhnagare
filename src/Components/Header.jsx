import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-30 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold">
          <span className="text-cyanCustom">Abhijeet</span> Bhangare
        </a>

        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-cyanCustom">Home</a>
          <a href="#projects" className="hover:text-cyanCustom">Projects</a>
          <a href="#about" className="hover:text-cyanCustom">About</a>
          <a href="#contact" className="hover:text-cyanCustom">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="p-2"
            onClick={() => {
              document.documentElement.classList.toggle("light");
            }}
            aria-label="toggle theme"
          >
            🌓
          </button>
          <a href="#contact" className="border border-cyanCustom px-3 py-1 rounded">Contact</a>
        </div>
      </div>
    </nav>
  );
}
