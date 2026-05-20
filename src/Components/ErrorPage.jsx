import React from "react";
import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
          <FaExclamationTriangle className="text-3xl" aria-hidden="true" />
        </div>

        <p className="text-cyan-400 font-semibold tracking-wide">404 Error</p>

        <h1 className="mt-4 text-4xl md:text-6xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-5 text-gray-400 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>

        <a
          href="/"
          className="mt-10 inline-flex items-center gap-3 rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
        >
          <FaArrowLeft className="text-sm" aria-hidden="true" />
          Back To Home
        </a>
      </section>
    </main>
  );
};

export default ErrorPage;
