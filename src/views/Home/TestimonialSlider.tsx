import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Testimonial Data
const testimonials = [
  {
    quote:
      "The MasterCamp program has completely changed my career trajectory. The mentorship and structured learning were invaluable!",
    name: "Rajesh Kumar",
    title: "Software Engineer, Infosys",
    image: "https://dummyimage.com/100x100/000000/ffffff",
  },
  {
    quote:
      "As a creative professional, this platform gave me the right resources and guidance to upskill efficiently. Highly recommended!",
    name: "Aditi Sharma",
    title: "Creative Director, DesignX",
    image: "https://dummyimage.com/100x100/000000/ffffff",
  },
  {
    quote:
      "The courses are top-notch! The hands-on projects helped me gain real-world skills, making me job-ready in no time.",
    name: "Vikram Patel",
    title: "Data Scientist, TCS",
    image: "https://dummyimage.com/100x100/000000/ffffff",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { quote, name, title, image } = testimonials[currentIndex];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#EDE0D4] to-[#D6CCC2] px-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8 text-center border border-gray-200">
        <h3 className="text-xl font-semibold text-[#8B5E3C]">Impact We Made</h3>
        
        <p className="mt-4 italic text-lg text-gray-700 transition-opacity duration-500">
          “{quote}”
        </p>

        {/* User Info */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <img src={image} alt={name} className="w-16 h-16 rounded-full border-4 border-[#D6A17E]" />
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#C08552] text-white hover:bg-[#8B5E3C] transition-all duration-300"
          >
          <ArrowBackIcon />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-[#C08552] text-white hover:bg-[#8B5E3C] transition-all duration-300"
          >
           <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
