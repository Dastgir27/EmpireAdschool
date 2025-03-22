"use client";

import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import { MailOutline, Phone } from "@mui/icons-material";
import emailjs from '@emailjs/browser';

// Define types for form data
interface FormData {
  name: string;
  email: string;
  mobile: string;
  age: string;
  course: string;
  reference: string;
}

interface ContactOptionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  contact: string;
  link: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    age: "",
    course: "",
    reference: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      alert('Message sent successfully!');
      setFormData({
        name: "",
        email: "",
        mobile: "",
        age: "",
        course: "",
        reference: "",
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setErrorMessage("Failed to send the message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 md:p-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Have questions? Want to know more about MasterCamp? Fill in your details, and we’ll get back to you with all the answers you need.
        </p>

        <div className="space-y-4 mb-8">
          <ContactOption
            icon={<MailOutline fontSize="small" className="text-yellow-500" />}
            title="Write to us at"
            subtitle="Share your queries here"
            contact="info@empireadschool.com"
            link="mailto:info@empireadschool.com"
          />
          <ContactOption
            icon={<Phone fontSize="small" className="text-blue-500" />}
            title="Call us at"
            subtitle="Available 24 x 7"
            contact="+91 77150 28073"
            link="tel:+917715028073"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 p-6 ">
        <div className="w-full max-w-md">
          <h3 className="text-2xl font-bold border-l-4 pl-3 border-pink-500 mb-4 mt-[40px]">
            Get a call back today!
          </h3>

          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            <div className="relative">
              <MailOutline className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full pl-10 p-3 border border-gray-300 rounded-md"
              />
            </div>

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            <input
              type="text"
              name="reference"
              placeholder="Reference"
              value={formData.reference}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md bg-white"
            >
              <option value="" disabled>Select Course</option>
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

            <button
              type="submit"
              className="w-full bg-pink-500 text-white p-3 rounded-md hover:bg-pink-600 transition"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Get Quote"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactOption({ icon, title, subtitle, contact, link }: ContactOptionProps) {
  return (
    <div className="p-4 bg-white rounded-md shadow-md flex flex-col items-start">
      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mb-2">
        {icon}
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-500 mb-1">{subtitle}</p>
      <a href={link} className="text-sm font-bold text-black underline">
        {contact}
      </a>
    </div>
  );
}
