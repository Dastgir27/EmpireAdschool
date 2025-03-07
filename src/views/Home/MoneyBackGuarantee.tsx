export default function MoneyBackGuarantee() {
  return (

    <>

<div className="w-full bg-[#FFD700] text-black py-2 font-bold uppercase overflow-hidden relative">
        <div className="flex animate-marquee space-x-8 whitespace-nowrap p-2 cerebri-sans-bold">
          <span>Caution: Side effects include uncontrollable fame and creative addiction. 🚀🔥</span>
          <span>Caution: Side effects include uncontrollable fame and creative addiction. 🚀🔥</span>
          <span>Caution: Side effects include uncontrollable fame and creative addiction. 🚀🔥</span>
          <span>Caution: Side effects include uncontrollable fame and creative addiction. 🚀🔥</span>
          <span>Caution: Side effects include uncontrollable fame and creative addiction. 🚀🔥</span>
        </div>
      </div>
     <div className="w-full bg-black text-white shadow-lg">
      <div className="w-full p-8 md:px-24 py-24 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold leading-snug">
            Our Promise: Love it or Leave it —  
            <span className="text-[#FF4B00]"> 100% Money-Back Guarantee</span>
          </h2>
          <p className="text-[#D9CDC4] mt-4 leading-relaxed">
            We believe in the power of our program, our mentors, and the real-world learning we deliver.
            If you attend the sessions, submit your assignments, actively participate, and still feel the  
            course isn’t worth what you paid — we’ll refund 100% of your fees.  
            Because great education stands tall on its value, not just its price.
          </p>

          {/* Guarantee Points */}
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="bg-[#222] text-white px-4 py-2 rounded-md text-sm font-medium">
              ✅ Join with confidence. Learn without fear.
            </span>
            <span className="bg-[#222] text-white px-4 py-2 rounded-md text-sm font-medium">
              ✅ We invest in you — and we expect you to invest your effort too.
            </span>
          </div>

          {/* CTA Button */}
          <button className="mt-6 px-6 py-3 bg-[#FF4B00] text-white font-medium rounded-lg text-lg hover:bg-[#8B5E3C] transition duration-300">
            Get a 75% Discount
          </button>
        </div>

        {/* Right Side: Image Section */}
        <div className="text-center max-w-3xl mx-auto">
          <img
            src="/guarantee.jpg"
            alt="Happy customer"
            className="w-full max-w-[500px] rounded-lg shadow-md"
          />
        </div>

      </div>
    </div>
   
    </>
    
  );
}
