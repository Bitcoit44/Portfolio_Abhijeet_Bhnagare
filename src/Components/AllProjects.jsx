import React from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";

const AllProjects = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
        

          <div className="mt-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              All
              <span className="text-cyan-400"> Projects</span>
            </h1>

            <p className="mt-4 text-gray-400">
              A complete collection of my recent development work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:-translate-y-3 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    View Project
                    <FaExternalLinkAlt className="text-sm" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllProjects;
