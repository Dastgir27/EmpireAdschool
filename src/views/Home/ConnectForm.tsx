"use client"; // If using Next.js

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS

// ✅ Define TypeScript Interface for Form Data
interface FormData {
  name: string;
  email: string;
  mobile: string;
  age: string;
  programme: string;
  reference: string;
}

export default function ConnectForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    age: "",
    programme: "",
    reference: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null); // Form reference

  // ✅ Handle Input Change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID as string, 
        process.env.REACT_APP_TEMPLATE_ID as string, 
        formRef.current as HTMLFormElement, 
        process.env.REACT_APP_PUBLIC_KEY as string
      );
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        age: "",
        programme: "",
        reference: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setErrorMessage("Failed to send the message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center md:justify-end bg-cover bg-center px-6 md:px-24 py-12"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/web-banner-2.jpg)`,
      }}
    >
      {/* Form Section */}
      <div className="w-full max-w-xl md:max-w-xl bg-[#FFF3EB] bg-opacity-95 rounded-3xl shadow-2xl p-6 md:p-10 md:ml-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#5A2E1A]">
          Connect with Us
        </h3>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        {/* ✅ Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 md:mt-8 space-y-4 md:space-y-5">
          {/* Name */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              min="1"
              required
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            />
          </div>

          {/* Programme Dropdown */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Select Your Programme</label>
            <select
              name="programme"
              value={formData.programme}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            >
              <option value="">Choose a Programme</option>
              <option value="Ctrl + C Create - Design Mastery Program">Ctrl + C Create - Design Mastery Program</option>
              <option value="Ctrl + V Visualize - Creative Copy Writing">Ctrl + V Visualize - Creative Copy Writing</option>
              <option value="Ctrl + C + V Visualize - Master Branding Program">Ctrl + C + V Visualize - Master Branding Program</option>
            </select>
          </div>

          {/* Reference */}
          <div>
            <label className="block text-[#8A3E1B] font-medium mb-1">Reference</label>
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              placeholder="Enter reference"
              required
              className="w-full p-3 bg-white text-[#5A2E1A] border border-[#FFA07A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF784E]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#FF4B00] text-white font-bold rounded-xl text-lg hover:bg-[#E04300] transition duration-300 shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "GET IN TOUCH"}
          </button>
        </form>
      </div>
    </div>
  );
}
