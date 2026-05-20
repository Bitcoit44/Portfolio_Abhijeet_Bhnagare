import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "../data/projects";

const ProjectSection = () => {
  return (

    <section
      id="projects"
      className="py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">

            My
            <span className="text-cyan-400">
              {" "}Projects
            </span>

          </h2>

          <p className="mt-4 text-gray-400">

            Some of my recent work

          </p>

        </div>

        {/* Project Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {
            projects.slice(0, 3).map((project) => (

              <div
                key={project.title}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:-translate-y-3 transition duration-300"
              >

                {/* Image */}

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />

                {/* Content */}

                <div className="p-6">

                  <h3 className="text-2xl font-semibold">

                    {project.title}

                  </h3>

                  <p className="mt-4 text-gray-400">

                    {project.description}

                  </p>

                  {/* Tech Stack */}

                  <div className="flex flex-wrap gap-2 mt-5">

                    {
                      project.tech.map((tech, i) => (

                        <span
                          key={i}
                          className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                        >

                          {tech}

                        </span>

                      ))
                    }

                  </div>

                  {/* Button */}

                  <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-block
    mt-6
    px-5
    py-3
    rounded-xl
    border border-cyan-400
    text-cyan-400
    hover:bg-cyan-400
    hover:text-black
    transition-all duration-300
  "
>
  View Project
</a>

                </div>

              </div>

            ))
          }

        </div>

        <div className="mt-14 text-center">
          <a
            href="/allproject"
            className="inline-flex items-center gap-3 rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
          >
            See All Projects
            <FaArrowRight className="text-sm" aria-hidden="true" />
          </a>
        </div>

      </div>

  
      
    </section>
  );
};
export default ProjectSection;
