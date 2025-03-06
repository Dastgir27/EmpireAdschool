"use client"; // If using Next.js

import React from "react";

export default function MoneyBackGuarantee() {
  return (
    <div className="w-full px-8 py-12 flex flex-col md:flex-row items-center gap-10 bg-[#D9CDC4] text-[#4A3F35] shadow-lg min-h-screen">
      {/* Left Side: Text Content */}
      <div className="flex-1 text-center md:text-left max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4A3F35] leading-snug">
          Our Promise: Love it or Leave it —  
          <span className="text-[#A67C52]"> 100% Money-Back Guarantee</span>
        </h2>
        <p className="text-[#5F5145] mt-4 leading-relaxed">
          We believe in the power of our program, our mentors, and the real-world learning we deliver.
          If you attend the sessions, submit your assignments, actively participate, and still feel the  
          course isn’t worth what you paid — we’ll refund 100% of your fees.  
          Because great education stands tall on its value, not just its price.
        </p>

        {/* Guarantee Points */}
        <div className="flex flex-wrap gap-3 mt-5">
          <span className="bg-[#B9A48A] text-[#4A3F35] px-4 py-2 rounded-md text-sm font-medium">
            ✅ Join with confidence. Learn without fear.
          </span>
          <span className="bg-[#B9A48A] text-[#4A3F35] px-4 py-2 rounded-md text-sm font-medium">
            ✅ We invest in you — and we expect you to invest your effort too.
          </span>
        </div>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-[#A67C52] text-white font-medium rounded-lg text-lg hover:bg-[#8B5E3C] transition duration-300">
          Get a 75% Discount
        </button>
      </div>

      {/* Right Side: Image Section */}
      <div className="flex-1 text-center max-w-3xl mx-auto">
        <img
          src="https://dummyimage.com/600x400/ffffff/000000"
          alt="Happy customer"
          className="w-full max-w-[500px] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
