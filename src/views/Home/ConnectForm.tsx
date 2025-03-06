"use client"; // If using Next.js

import React, { useState } from "react";

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    programme: "",
    consent: true,
  });

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: event.target.checked }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div
    className="w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/office-image.webp)`,
    }}
  >
    <div className="w-full max-w-6xl bg-[#fdfaf5] bg-opacity-95 rounded-t-3xl shadow-xl flex flex-col md:flex-row text-[#4a3f35]">
      {/* Left Side: Copy Text */}
      <div className="flex-1 p-8 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl font-bold">Connect with Us</h2>
        <p className="text-[#6d4f3a] mt-4">
          Have questions? Want to know more about MasterCamp? Fill in your details, and we’ll get back to you with all the answers you need.
        </p>
        <ul className="mt-6 space-y-3 text-[#8c6239]">
          <li>📞 Get personalized guidance</li>
          <li>📩 Receive program details & insights</li>
          <li>🤝 Join a community of top learners & mentors</li>
        </ul>
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1 p-8 bg-[#fcf5ed] rounded-lg">
        <h3 className="text-2xl font-semibold text-center text-[#4a3f35]">Fill out the form</h3>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-[#6d4f3a] font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 bg-white text-[#4a3f35] border border-[#c7b9a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5855e]"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-[#6d4f3a] font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 bg-white text-[#4a3f35] border border-[#c7b9a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5855e]"
            />
          </div>

          {/* Mobile Input */}
          <div>
            <label className="block text-[#6d4f3a] font-medium">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="w-full p-3 bg-white text-[#4a3f35] border border-[#c7b9a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b5855e]"
            />
          </div>

          {/* Programme Dropdown */}
          <div>
            <label className="block text-[#6d4f3a] font-medium">Select Your Programme</label>
            <select
              name="programme"
              value={formData.programme}
              onChange={handleChange}
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
              onChange={handleCheckboxChange}
              className="w-4 h-4 bg-white border-[#b5855e] rounded focus:ring-2 focus:ring-[#b5855e]"
            />
            <label className="ml-2 text-[#6d4f3a] text-sm">
              I authorize MasterCamp to contact me with updates via Calls, SMS, WhatsApp, and Emails.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#b5855e] to-[#8c6239] text-white font-bold rounded-lg text-lg hover:bg-[#6d4f3a] transition duration-300 shadow-md"
          >
            GET IN TOUCH
          </button>
        </form>
      </div>
    </div>
  </div>

  );
}
