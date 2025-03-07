"use client"; // If using Next.js

import React, { useState } from "react";

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    age: "",
    programme: "",
    consent: true,
  });

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center md:justify-end bg-cover bg-center px-6 md:px-24 py-12"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/web-banner-2.jpg)`,
      }}
    >
      {/* Form Section - Right Aligned on Desktop */}
      <div className="w-full max-w-xl md:max-w-2xl bg-[#FFF3EB] bg-opacity-95 rounded-3xl shadow-2xl p-6 md:p-10 md:ml-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#5A2E1A]">
          Connect with Us
        </h3>
        <form className="mt-6 md:mt-8 space-y-4 md:space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            />
          </div>

          {/* Mobile Input */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter your mobile number"
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            />
          </div>

          {/* Age Input */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              placeholder="Enter your age"
              min="1"
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            />
          </div>

          {/* Programme Dropdown */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Select Your Programme</label>
            <select
              name="programme"
              value={formData.programme}
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            >
              <option value="">Choose a Programme</option>
              <option value="Ctrl + C Create - Design Mastery Program">
                Ctrl + C Create - Design Mastery Program
              </option>
              <option value="Ctrl + V Visualize - Creative Copy Writing">
                Ctrl + V Visualize - Creative Copy Writing
              </option>
              <option value="Ctrl + C + V Visualize - Master Branding Program">
                Ctrl + C + V Visualize - Master Branding Program
              </option>
            </select>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              className="w-5 h-5 bg-white border-[#FFA07A] rounded focus:ring-2 focus:ring-[#E04300]"
            />
            <label className="text-[#8A3E1B] text-sm">
              I authorize MasterCamp to contact me via Calls, SMS, WhatsApp, and Emails.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FF4B00] text-white font-bold rounded-xl text-lg hover:bg-[#E04300] transition duration-300 shadow-lg"
          >
            GET IN TOUCH
          </button>
        </form>
      </div>
    </div>
  );
}
