import React, { useState, useEffect } from "react";

export default function MentorsSection() {
  const images = ["/slider-1.jpg", "/slider-2.jpg", "/slider-3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500); // Fade duration
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-8 md:px-24 md:py-24 flex flex-col-reverse md:flex-row items-center gap-8 bg-white text-black shadow-lg min-h-screen">
      {/* Left Side: Text Content */}

     {/* Right Side: Image Section */}
<div className="flex-1 flex justify-center">
  <div className="relative w-full max-w-[350px] md:max-w-[500px] h-[400px] md:h-[600px] bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out">
    <img
      src={images[currentIndex]}
      alt="Mentors"
      className={`w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    />
  </div>
</div>


      <div className="flex-1 max-w-3xl mx-auto text-center md:text-left">
        <h2 className="cerebri-sans-bold text-[40px] md:text-[50px] leading-tight">
          Bring Your Brain. <br /> We’ll Bring the Madness.
        </h2>
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

    </div>
  );
}
