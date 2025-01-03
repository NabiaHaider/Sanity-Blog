import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white mt-10">
      <form className="bg-accentDarkSecondary px-6 sm:px-8 lg:px-12 py-6 w-full md:w-1/2">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-5 text-dark text-center uppercase">
            Contact <span className="text-orange-400">Us</span>
          </h2>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-7 mb-6">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full px-3 py-5 text-dark placeholder-gray-400 bg-light border border-black rounded"
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              className="w-full px-3 py-5 text-dark placeholder-gray-400 bg-light border border-black rounded"
            />
          </div>
          <textarea
            rows={3}
            placeholder="Message"
            name="message"
            className="mb-4 w-full px-3 py-2 text-dark placeholder-gray-400 bg-light border border-black rounded"
          />
          <button className="px-12 py-3 text-xl font-semibold border-2 border-orange-400 text-light hover:text-dark uppercase transition-all duration-150 ease-linear bg-dark hover:bg-orange-200 rounded-lg block mx-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
