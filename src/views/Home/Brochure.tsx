export function Brochure() {
    return (
      <div className="w-full bg-gray-100 py-20 px-6 md:px-24">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Portfolio That Opens Doors */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden min-h-[260px] md:min-h-[300px]">
            <div className="absolute top-0 left-0 right-0 bg-[#0A0F23] text-white p-5 font-bold text-xl rounded-t-xl">
              Portfolio That Opens Doors
            </div>
            <div className="pt-20 p-8 space-y-5">
              <p className="flex items-center gap-4 text-lg">
                <img src="/verified.png" alt="check" className="w-6 h-6" />
                <strong>Real Work.</strong> Real Brands.
              </p>
              <p className="flex items-center gap-4 text-lg">
                <img src="/verified.png" alt="check" className="w-6 h-6" />
                Reviewed by <strong>Industry Legends.</strong>
              </p>
              <p className="flex items-center gap-4 text-lg">
                <img src="/verified.png" alt="check" className="w-6 h-6" />
                Crafted for <strong>Global Standards.</strong>
              </p>
              <p className="flex items-center gap-4 text-lg">
                <img src="/verified.png" alt="check" className="w-6 h-6" />
                Your Ticket to <strong>Top Agencies.</strong>
              </p>
            </div>
          </div>
  
          {/* Lifetime Creative Community */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden min-h-[260px] md:min-h-[300px]">
            <div className="absolute top-0 left-0 right-0 bg-[#0A0F23] text-white p-5 font-bold text-xl rounded-t-xl">
              Lifetime Creative Community
            </div>
            <div className="pt-20 p-8 space-y-5">
              <p className="flex items-center gap-4 text-lg">
                <img src="/verified.png" alt="check" className="w-6 h-6" />
                <strong>Mentors</strong> Who Stay Mentors.
              </p>
              <p className="flex items-center gap-4 text-lg">
                <img src="/verified.png" alt="check" className="w-6 h-6" />
                <strong>Alumni</strong> Who Open Doors.
              </p>
              <p className="flex items-center gap-4 text-lg">
                <img src="/verified.png" alt="check" className="w-6 h-6" />
                <strong>Opportunities</strong> Beyond Graduation.
              </p>
              <p className="flex items-center gap-4 text-lg">
                <img src="/verified.png" alt="check" className="w-6 h-6" />
                A <strong>Network</strong> That Works.
              </p>
            </div>
          </div>
        </div>
  
        {/* Download Brochure Button */}
        <div className="text-center mt-16">
          <p className="text-lg font-medium">Want to know more about us?</p>
          <button className="mt-5 px-8 py-4 bg-green-500 text-white font-semibold rounded-lg text-lg hover:bg-green-600 transition duration-300 border-2 border-black">
            Download Brochure
          </button>
        </div>
      </div>
    );
  }
  