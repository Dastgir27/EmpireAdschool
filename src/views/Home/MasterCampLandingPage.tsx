import React from 'react';

const MasterCampLanding = () => {
  return (
      <div className="min-h-screen bg-black text-white">

        {/* Hero Section */}
        <section className="py-16 px-12 flex">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold leading-tight mb-16">
              Hands-On Learning.<br/> Real-World Projects.<br/> Mentorship That Matters.
            </h1>
          </div>

        </section>

        {/* Image Section */}
        <section className="px-12 mb-16">
          <div className="rounded-2xl overflow-hidden">
            {/* <img
                src="/api/placeholder/1000/500"
                alt="MasterCamp classroom session with instructor and students"
                className="w-full h-72 object-cover"
            /> */}
          </div>
        </section>
       


      </div>
  );
};

export default MasterCampLanding;