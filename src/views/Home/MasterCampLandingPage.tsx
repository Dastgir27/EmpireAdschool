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

          <div className="w-1/2 pl-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">Hands-on Bootcamps for students & young professionals</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">Designed & delivered by industry leaders</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg">Experiential learning for tools & practices that drive real-world success</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="px-12 mb-16">
          <div className="rounded-2xl overflow-hidden">
            <img
                src="/api/placeholder/1000/500"
                alt="MasterCamp classroom session with instructor and students"
                className="w-full h-72 object-cover"
            />
          </div>
        </section>
       


      </div>
  );
};

export default MasterCampLanding;