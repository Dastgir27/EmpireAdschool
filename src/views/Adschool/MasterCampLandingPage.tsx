import React from 'react';

const MasterCampLanding = () => {
  return (
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-4 px-12 border-b border-gray-800">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="bg-orange-300 px-1 py-0.5 mr-1 text-black">Empire</span>
              Adschool
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300 flex items-center">
              Youtube
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 flex items-center">
              Instagram
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300 flex items-center">
              LinkedIn
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a href="/contact" className="border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition">
              Contact Us
            </a>
            <button className="bg-white text-black font-medium rounded-full px-6 py-2 flex items-center hover:bg-gray-200 transition">
              Explore Programmes
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </nav>

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

        {/* Programmes Section */}
        <section className="py-16 px-12 bg-gray-100 text-black">
          <h2 className="text-4xl font-bold mb-12">Programmes at a Glance</h2>

          <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 pr-6">
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg shadow-sm font-medium">
                  CTRL+C (Create) Design Mastery
                </div>
                <div className="p-4 font-medium">
                  Strategic Marketing & AI
                </div>
                <div className="p-4 font-medium">
                  Applied Finance
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-3/4 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-8"> CTRL+C (Create) Design Mastery</h3>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Round 3 Deadline:</p>
                    <p className="text-gray-600">24th March, 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Blended</p>
                    <p className="text-gray-600">Online+In-Person Weekend Classes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-gray-600">12 Months</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Taught by:</p>
                    <p className="text-gray-600">Industry Practitioners</p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="w-3/5 pr-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="min-w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">1</div>
                      <p>Learn from Industry Leaders, CXOs & Startup Founders to gain first-hand insights</p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="min-w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">2</div>
                      <p>Test your learning with 4 unique challenges for Real-World Business Exposure</p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="min-w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">3</div>
                      <p>Target average placement of 6-12 LPA with our Career Advisory Team</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a href="#" className="block border border-black rounded-full px-6 py-3 text-center hover:bg-black hover:text-white transition font-medium flex items-center justify-center">
                      EXPLORE PROGRAMME
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="w-2/5">
                  <img
                      src="/api/placeholder/400/300"
                      alt="MasterCamp event"
                      className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
  );
};

export default MasterCampLanding;