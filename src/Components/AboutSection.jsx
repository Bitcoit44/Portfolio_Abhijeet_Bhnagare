import React from "react";

const AboutSection = () => {

  return (

    <section
      id="about"
      className="py-24 bg-zinc-950/70"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">

            About
            <span className="text-cyan-400">
              {" "}Me
            </span>

          </h2>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Card 1 */}

          <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">

              Who Am I?

            </h3>

            <p className="text-gray-400 leading-relaxed">

              I am a passionate Full Stack Developer focused on building
              scalable, modern, and user-friendly applications using Java,
              Spring Boot, React, and modern frontend technologies.

            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-zinc-900 p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4">

              My Goal

            </h3>

            <p className="text-gray-400 leading-relaxed">

              My goal is to become an enterprise software developer and
              contribute to impactful products in software engineering.

            </p>

          </div>

        </div>

      </div>

    </section>

  );

};

export default AboutSection;