"use client";

import React from "react";
import { CheckCircle, Schedule, School, HelpOutline } from "@mui/icons-material";

export default function DesignMastery() {
  return (
    <div className="bg-[#1A1A1A] text-white">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 bg-[#A67C52]">
        <h1 className="text-4xl font-bold">Ctrl + C = Create</h1>
        <p className="text-lg mt-2">Design Mastery Program</p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-[#D9CDC4] leading-relaxed">
          Welcome to <b>Ctrl + C = Create</b>, a next-generation **Design Mastery Program** crafted for aspiring designers. 
          Learn **industry-relevant tools, design techniques, and creative thinking strategies** in a hands-on, **1.5-month** weekend program. 
          This isn't just a course—it's your entry ticket to the world of **high-impact design careers!**
        </p>
        <img 
          src="https://dummyimage.com/400x250/000/fff" 
          alt="Course Preview" 
          className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-lg"
        />
      </div>

      {/* Program Highlights */}
      <div className="bg-[#222] py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#D9CDC4]">🎨 Highlights of the Program</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-8">
          {[
            "Hands-on Learning – Real client briefs & creative sprints",
            "Industry-Proven Mentors – Learn from working professionals",
            "Master Key Tools – Photoshop, Illustrator, InDesign & AI Tools",
            "Creative Thinking Techniques – Design like a brand storyteller",
            "Interactive Games & Design Battles – Fun & engaging learning",
            "Real Portfolio Building – Graduate with an impressive folio",
            "Expert Feedback Sessions – Get live reviews from agency heads"
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
          Receive the **Empire Ad School - Design Mastery Certificate**.  
          Get your **portfolio reviewed by top creative experts** & gain **direct industry recognition**.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#222] py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#D9CDC4]">❓ Frequently Asked Questions</h2>
        <div className="max-w-5xl mx-auto mt-8 space-y-6">
          {[
            {
              question: "Who can apply for this program?",
              answer: "Anyone passionate about a design career in advertising, branding, or digital media. No prior experience required!"
            },
            {
              question: "What’s the batch schedule?",
              answer: "Weekend batches only – A perfect blend of learning, designing, and interactive challenges."
            },
            {
              question: "What software will I learn?",
              answer: "Adobe Photoshop, Illustrator, InDesign + AI-powered design tools."
            },
            {
              question: "Is there a final exam?",
              answer: "No boring exams! Your **portfolio and live design challenges** will be your ultimate test."
            },
            {
              question: "What if I miss a session?",
              answer: "Recorded sessions & backup materials will be provided. However, **live design battles & feedback are best experienced in real-time**!"
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
          At **Empire Ad School**, we do more than teach—we launch your career!  
          Enjoy **portfolio guidance, mock interviews, agency connects, and lifetime access** to our creative community.
        </p>
      </div>

      {/* Fee Structure */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#D9CDC4]">💰 Fee Structure</h2>
        <p className="text-[#D9CDC4] mt-4">Program Fee: <span className="font-bold">₹24,999/-</span> (all inclusive)</p>
        <p className="text-[#A67C52] mt-2 font-bold">🎯 Early Bird Offer: ₹19,999/- for first 10 students</p>
      </div>

      {/* Call to Action */}
      <div className="text-center py-10 bg-[#A67C52]">
        <h2 className="text-3xl font-bold text-white">Your Design Career Starts Here</h2>
        <p className="mt-2 text-white">Join the next-gen designers shaping the future of branding & advertising</p>
        <button className="mt-6 px-6 py-3 bg-[#1A1A1A] text-[#D9CDC4] font-medium rounded-lg text-lg hover:bg-[#000] transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
