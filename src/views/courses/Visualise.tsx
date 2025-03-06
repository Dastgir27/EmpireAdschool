"use client";

import React from "react";
import { CheckCircle, Schedule, School, HelpOutline } from "@mui/icons-material";

export default function Visualise() {
  return (
    <div className="bg-[#1A1A1A] text-white">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 bg-[#A67C52]">
        <h1 className="text-4xl font-bold">Ctrl + V = Visualise</h1>
        <p className="text-lg mt-2">Creative Thinking & Copyline Mastery Program</p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-[#D9CDC4] leading-relaxed">
          Welcome to <b>Ctrl + V = Visualise</b>, a power-packed **1.5-month program** designed to sharpen your 
          creative mind and master the **art of impactful copylines**. This isn't just a classroom course—it's a **creative bootcamp** 
          where you think like an ad genius!
        </p>
        <img 
          src="https://dummyimage.com/400x250/000/fff" 
          alt="Course Preview" 
          className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-lg"
        />
      </div>

      {/* Program Highlights */}
      <div className="bg-[#222] py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#D9CDC4]">🔥 Highlights of the Program</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mt-8">
          {[
            "Decode Briefs Like a Pro – Understand what clients want",
            "Brand Approach Mapping – Build a brand personality",
            "Creative Copy Mastery – Headlines, hashtags & more",
            "Think Beyond the Obvious – Find unexpected solutions",
            "Fun Brainstorming Battles – Live creative war rooms",
            "Creative Group Discussions (GDs) – Clash & innovate",
            "Level-Up Challenges – Weekly creative boosters",
            "Real-World Case Studies – Dissect iconic campaigns"
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
          Earn the <b>Empire Ad School - Creative Thinking & Copyline Mastery Certificate</b>, 
          get a **portfolio review by industry experts**, and make a mark in the industry.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#222] py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#D9CDC4]">❓ Frequently Asked Questions</h2>
        <div className="max-w-5xl mx-auto mt-8 space-y-6">
          {[
            {
              question: "Who is this program for?",
              answer: "Anyone with a passion for creativity—students, freshers, content creators, freelancers, or aspiring advertisers."
            },
            {
              question: "What’s the batch schedule?",
              answer: "Weekend Batches Only – Perfect for students & working professionals. Every weekend is a creative adventure!"
            },
            {
              question: "Do I need prior experience in writing or advertising?",
              answer: "Not at all! We’ll build you from scratch — all you need is a curious mind and love for creativity."
            },
            {
              question: "What if I’m not confident in English?",
              answer: "No worries! Creativity is language-proof — we’ll teach you copywriting skills that work across multiple languages."
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

      {/* Fee Structure */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#D9CDC4]">💰 Fee Structure</h2>
        <p className="text-[#D9CDC4] mt-4">Program Fee: <span className="font-bold">₹32,999/-</span> (all inclusive)</p>
        <p className="text-[#A67C52] mt-2 font-bold">🎯 Early Bird Offer: ₹28,999/- for first 10 students</p>
      </div>

      {/* Call to Action */}
      <div className="text-center py-10 bg-[#A67C52]">
        <h2 className="text-3xl font-bold text-white">Your Creative Thinking Career Starts Here</h2>
        <p className="mt-2 text-white">Join a community of next-gen creative minds</p>
        <button className="mt-6 px-6 py-3 bg-[#1A1A1A] text-[#D9CDC4] font-medium rounded-lg text-lg hover:bg-[#000] transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
