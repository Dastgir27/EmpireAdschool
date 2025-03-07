"use client"; // If using Next.js

import React from "react";

export default function MentorsSection() {
  return (
    <div className="w-full px-24 py-24 flex flex-col md:flex-row items-center gap-8 bg-white text-black shadow-lg min-h-screen">
      {/* Left Side: Text Content */}
      <div className="flex-1 max-w-3xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold">Mentors You’ll Work With</h2>
        <p className="text-gray-700 mt-3">
          Learn from creative geniuses, agency founders & brand heads who’ve built the campaigns you admire.
        </p>

        {/* Mentor Categories */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">👩‍🎨</span>
            <p className="text-gray-800 font-medium">Creative Directors from leading agencies</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">✍️</span>
            <p className="text-gray-800 font-medium">Award-winning copywriters & scriptwriters</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">📣</span>
            <p className="text-gray-800 font-medium">Performance marketers & social media mavens</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <p className="text-gray-800 font-medium">Brand strategists & campaign planners</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">🌟</span>
            <p className="text-gray-800 font-medium">
              …and surprise celebrity mentors from the world of advertising!
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 text-center">
        <img
          src="https://dummyimage.com/600x400/000000/ffffff" 
          alt="Mentors"
          className="w-full max-w-[500px] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
