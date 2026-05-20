import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const TechStackSection = () => {

  const techStack = [
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
    },

    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-500",
    },

    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
    },

    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
    },

    {
      name: "Java",
      icon: FaJava,
      color: "text-red-500",
    },

    {
      name: "Node.js",
      icon: SiSpringboot,
      color: "text-green-500",
    },
  ];

  return (

    <section className="py-24 bg-zinc-950/70 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Technologies I work with
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-16">

          {techStack.map((tech, index) => {

            const Icon = tech.icon;

            return (

              <div
                key={index}
                className="bg-zinc-900 rounded-2xl p-6 border border-white/10 hover:-translate-y-2 transition duration-300 text-center"
              >

                <Icon
                  className={`text-6xl mx-auto ${tech.color}`}
                />

                <p className="mt-4 font-medium">
                  {tech.name}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

};

export default TechStackSection;