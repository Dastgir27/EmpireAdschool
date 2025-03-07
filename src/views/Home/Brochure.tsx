export function Brochure() {
    return (
      <div className="w-full bg-gray-100 py-16 px-6 md:px-24">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Portfolio That Opens Doors */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-[#0A0F23] text-white p-4 font-bold text-xl rounded-t-lg">
              Portfolio That Opens Doors
            </div>
            <div className="pt-16 p-6 space-y-4 mt-2"> {/* Added more vertical spacing */}
              <p className="flex items-center gap-3">
                <img src="/verified.png" alt="check" className="w-5 h-5" />
                <strong>Real Work.</strong> Real Brands.
              </p>
              <p className="flex items-center gap-3">
                <img src="/verified.png" alt="check" className="w-5 h-5" />
                Reviewed by <strong>Industry Legends.</strong>
              </p>
              <p className="flex items-center gap-3">
                <img src="/verified.png" alt="check" className="w-5 h-5" />
                Crafted for <strong>Global Standards.</strong>
              </p>
              <p className="flex items-center gap-3">
                <img src="/verified.png" alt="check" className="w-5 h-5" />
                Your Ticket to <strong>Top Agencies.</strong>
              </p>
            </div>
          </div>
  
          {/* Lifetime Creative Community */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-[#0A0F23] text-white p-4 font-bold text-xl rounded-t-lg">
              Lifetime Creative Community
            </div>
            <div className="pt-16 p-6 space-y-4 mt-2"> {/* Added more vertical spacing */}
              <p className="flex items-center gap-3">
                <img src="/verified.png" alt="check" className="w-5 h-5" />
                <strong>Mentors</strong> Who Stay Mentors.
              </p>
              <p className="flex items-center gap-3">
                <img src="/verified.png" alt="check" className="w-5 h-5" />
                <strong>Alumni</strong> Who Open Doors.
              </p>
              <p className="flex items-center gap-3">
                <img src="/verified.png" alt="check" className="w-5 h-5" />
                <strong>Opportunities</strong> Beyond Graduation.
              </p>
              <p className="flex items-center gap-3">
                <img src="/verified.png" alt="check" className="w-5 h-5" />
                A <strong>Network</strong> That Works.
              </p>
            </div>
          </div>
  
        </div>
        <div className="text-center mt-12">
        <p className="text-lg font-medium">Want to know more about us?</p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg text-lg hover:bg-green-600 transition duration-300 border-2 border-black">
          Download Brochure
        </button>
      </div>
      </div>
    );
  }
  