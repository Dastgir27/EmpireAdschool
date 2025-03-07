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
      className="w-full min-h-screen flex items-center justify-end bg-cover bg-center px-24 py-12"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/office-image.webp)`,
      }}
    >
      {/* Right-Aligned Form */}
      <div className="w-full max-w-xl bg-[#fdfaf5] bg-opacity-95 rounded-3xl shadow-2xl p-10 ml-auto">
        <h3 className="text-3xl font-semibold text-center text-[#4a3f35]">Connect with Us</h3>
        <form className="mt-8 space-y-5">
          {/* Name Input */}
          <div>
            <label className="block text-[#6d4f3a] font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              className="w-full p-3 bg-white text-[#4a3f35] border border-[#c7b9a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5855e]"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-[#6d4f3a] font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              className="w-full p-3 bg-white text-[#4a3f35] border border-[#c7b9a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5855e]"
            />
          </div>

          {/* Mobile Input */}
          <div>
            <label className="block text-[#6d4f3a] font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter your mobile number"
              className="w-full p-3 bg-white text-[#4a3f35] border border-[#c7b9a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5855e]"
            />
          </div>

          {/* Age Input */}
          <div>
            <label className="block text-[#6d4f3a] font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              placeholder="Enter your age"
              min="1"
              className="w-full p-3 bg-white text-[#4a3f35] border border-[#c7b9a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5855e]"
            />
          </div>

          {/* Programme Dropdown */}
          <div>
            <label className="block text-[#6d4f3a] font-medium mb-1">Select Your Programme</label>
            <select
              name="programme"
              value={formData.programme}
              className="w-full p-3 bg-white text-[#4a3f35] border border-[#c7b9a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5855e]"
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
          <div className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              className="w-5 h-5 bg-white border-[#b5855e] rounded focus:ring-2 focus:ring-[#b5855e]"
            />
            <label className="ml-3 text-[#6d4f3a] text-sm">
              I authorize MasterCamp to contact me via Calls, SMS, WhatsApp, and Emails.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#b5855e] to-[#8c6239] text-white font-bold rounded-xl text-lg hover:bg-[#6d4f3a] transition duration-300 shadow-lg"
          >
            GET IN TOUCH
          </button>
        </form>
      </div>
    </div>
  );
}
