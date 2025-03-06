"use client";

import React from "react";
import { CheckCircle, Schedule, School, HelpOutline, Bolt } from "@mui/icons-material";

export default function CreativeMastery() {
  return (
    <div className="bg-[#1A1A1A] text-white">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 bg-[#A67C52]">
        <h1 className="text-4xl font-bold">Ctrl + C + V</h1>
        <p className="text-lg mt-2">Complete Creative Mastery Program</p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-[#D9CDC4] leading-relaxed">
          Welcome to <b>Ctrl + C + V</b>, the **ultimate Creative Power Combo** program.  
          This **1.5-month, weekend-only** immersive experience blends **design, creative thinking, and copywriting skills**.  
          You’ll **think, design, and write like an ad agency pro** — making you a **complete creative powerhouse!**  
        </p>
        <img 
          src="https://dummyimage.com/400x250/000/fff" 
          alt="Course Preview" 
          className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-lg"
        />
      </div>

      {/* Program Highlights */}
      <div className="bg-[#222] py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#D9CDC4]">🌟 Highlights of the Program</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-8">
          {[
            "Hands-on Design Training – Photoshop, Illustrator, InDesign & AI tools",
            "Creative Thinking Games – Train your brain to crack ideas instantly",
            "Copyline Crafting – Write powerful headlines, taglines & brand messages",
            "Live Brief Decoding – Learn to break down real-world client briefs",
            "Weekend Creative Battles – Compete in design & tagline challenges",
            "Full Campaign Thinking – Master strategy, design & communication",
            "Real Portfolio Building – Graduate with a designer’s & thinker’s folio",
            "Expert Feedback – Work reviewed by creative heads & agency founders"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="text-[#A67C52] text-3xl" />
              <p className="text-[#D9CDC4]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certification */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <School className="text-5xl text-[#A67C52] mx-auto" />
        <h2 className="text-3xl font-bold text-[#D9CDC4] mt-4">🎓 Certification After Completion</h2>
        <p className="text-[#D9CDC4] mt-4">
          Earn the **Empire Ad School - Creative Mastery Certificate**,  
          get a **dual portfolio review by industry experts**, and gain **direct industry recognition**.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#222] py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#D9CDC4]">❓ Frequently Asked Questions</h2>
        <div className="max-w-5xl mx-auto mt-8 space-y-6">
          {[
            {
              question: "Who should join Ctrl + C + V?",
              answer: "Anyone who dreams of becoming a creative powerhouse in design & copywriting. No prior experience needed!"
            },
            {
              question: "What’s the batch schedule?",
              answer: "Weekend sessions packed with creative games, group projects, and real-world brand challenges."
            },
            {
              question: "Can I join only one part — Design or Copy?",
              answer: "Yes, but this combo program makes you industry-ready **faster** with **both** skills."
            },
            {
              question: "What will I create during this program?",
              answer: "A full creative portfolio with **campaign ideas, headlines, design projects, and real client briefs.**"
            }
          ].map((item, index) => (
            <div key={index} className="border-b border-[#444] pb-4">
              <h3 className="text-[#A67C52] font-bold flex items-center gap-2">
                <HelpOutline className="text-xl" /> {item.question}
              </h3>
              <p className="text-[#D9CDC4] mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Support */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#D9CDC4]">🚀 Career Support</h2>
        <p className="text-[#D9CDC4] mt-4">
          Beyond learning, we **help launch your creative career** with:
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            "Portfolio Assistance – Build a job-ready creative folio",
            "Agency Recommendations – We refer top students",
            "Mock Creative Rounds – Practice real ad agency brainstorming",
            "Lifetime Creative Community – Connect with mentors & alumni"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <Bolt className="text-[#A67C52] text-3xl" />
              <p className="text-[#D9CDC4]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fee Structure */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#D9CDC4]">💰 Fee Structure</h2>
        <p className="text-[#D9CDC4] mt-4">Combo Program Fee: <span className="font-bold">₹49,999/-</span> (all inclusive)</p>
        <p className="text-[#A67C52] mt-2 font-bold">🔥 Early Bird Offer: ₹42,999/- for first 10 students</p>
      </div>

      {/* Call to Action */}
      <div className="text-center py-10 bg-[#A67C52]">
        <h2 className="text-3xl font-bold text-white">Your Creative Future Starts Here</h2>
        <p className="mt-2 text-white">Join the next-gen creatives shaping the future of branding & advertising</p>
        <button className="mt-6 px-6 py-3 bg-[#1A1A1A] text-[#D9CDC4] font-medium rounded-lg text-lg hover:bg-[#000] transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
