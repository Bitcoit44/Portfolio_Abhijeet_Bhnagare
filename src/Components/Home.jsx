import React from "react";
import Hero from "./Hero";
import TechStackSection from "./TechStackSection";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <TechStackSection />
      <ProjectSection />
      <AboutSection />
      <Contact />
    </>
  );
};

export default Home;
