import React from 'react';

const MasterCampLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Image Section with Overlay Button */}
      <section className="relative px-6 md:px-12 py-6">
        <div className="relative w-full overflow-hidden rounded-2xl">
          {/* Responsive Image */}
          <img
            src="/web-banner.jpg"
            alt="MasterCamp classroom session with instructor and students"
            className="w-full h-screen md:h-auto object-cover rounded-2xl"
          />

          {/* Button - Centered on Mobile, Right on Desktop */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:bottom-[20%] md:left-[30%]">
            <button className="px-8 md:px-10 py-4 md:py-5 text-xl md:text-2xl font-bold rounded-lg transition-all duration-300 cerebri-sans-medium
              bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] text-white shadow-lg 
              hover:scale-105 hover:shadow-xl hover:from-[#8A2BE2] hover:to-[#4B0082] active:scale-95">
              EXPLORE PROGRAMS
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MasterCampLanding;
