import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle Input Change

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Submit

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  };

  return (

    <section
      id="contact"
      className="py-24"
    >

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl md:text-5xl font-bold">

            Contact
            <span className="text-cyan-400">
              {" "}Me
            </span>

          </h2>

          <p className="mt-4 text-gray-400">

            Let's build something amazing together

          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-16 bg-zinc-900 p-8 md:p-10 rounded-3xl border border-white/10"
        >

          {/* Name + Email */}

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

          </div>

          {/* Subject */}

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full mt-6 bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
          />

          {/* Message */}

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full mt-6 bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 resize-none"
          ></textarea>

          {/* Button */}

          <button
            type="submit"
            className="mt-8 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
          >

            Send Message

          </button>

        </form>

      </div>

    </section>

  );

};

export default Contact;