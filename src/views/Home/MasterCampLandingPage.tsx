import React from 'react';

const MasterCampLanding = () => {
  return (
<div className="min-h-screen bg-black text-white">

{/* Image Section with Overlay Text */}
<section className="relative px-12 mb-16">
  <div className="relative w-full overflow-hidden rounded-2xl">
    {/* Image */}
    <img
      src="/web-banner-.jpg"
      alt="MasterCamp classroom session with instructor and students"
      className="w-full h-screen object-cover rounded-2xl"
    />

    {/* Left-Aligned Bold Copyline & Button */}
    <div className="absolute top-1/2 left-12 transform -translate-y-1/2">
      <h2 className="text-6xl md:text-8xl font-extrabold uppercase leading-tight">
        WELCOME TO AD SCHOOL. <br /> PLEASE LEAVE LOGIC OUTSIDE.
      </h2>

      {/* Small Button */}
      <button className="mt-6 px-6 py-3 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-300 transition">
        EXPLORE PROGRAMS
      </button>
    </div>
  </div>
</section>

</div>
  
  );
};

export default MasterCampLanding;