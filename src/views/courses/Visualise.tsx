"use client";

import React, {useState} from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function CreativeCopylineMastery() {

  const highlights = [
    {
      title: "Decode Briefs Like a Pro",
      description:
        "Learn the Art of Brief Analysis — The First Step to Great Ideas. Most creatives jump straight to solutions, but pros know the magic happens in brief decoding. We'll teach you how to read between the lines of client requirements, spot the real challenges, and identify the true objectives behind marketing requests. You'll master the skill of turning vague client wishes into clear creative directions, asking the right questions, and setting up a strategic foundation that makes the creative work 10x more effective. This skill alone will set you apart in any creative role.",
    },
    {
      title: "Brand Approach Mapping",
      description:
        "Map the Journey from Strategy to Creativity. Great campaigns don't happen by accident — they follow a strategic pathway. In this program, you'll learn how to map a brand's journey from business challenge to creative solution. We'll show you how to analyze brand personalities, understand target audiences deeply, and identify emotional triggers that drive consumer actions. This mapping technique helps you create campaigns that aren't just creative but strategically sound. You'll learn to think like both a marketing strategist and a creative director — making your ideas twice as valuable.",
    },
    {
      title: "Creative Copy Mastery",
      description:
        "Craft Words That Sell, Inspire, and Change Minds. Words have power, and in this program, you'll master how to wield them. You'll learn the science behind attention-grabbing headlines, emotion-triggering taglines, and storytelling that makes brands unforgettable. We'll train you in the art of saying more with less — crafting crisp copy that cuts through the noise. From billboard headlines to social media captions to brand manifestos, you'll master different copywriting styles and tones. By the end, you'll craft language that doesn't just communicate — it converts and creates brand lovers.",
    },
    {
      title: "Think Beyond the Obvious",
      description:
        "Break Through Creative Blocks and Find Original Ideas. The difference between average and exceptional creatives is the ability to push past obvious ideas. We'll equip you with proven creativity techniques used by top agencies — from lateral thinking exercises and forced connections to reverse brainstorming and analogical thinking. You'll learn how to generate not just more ideas but better, more original ones. Most importantly, you'll develop your own creative process that helps you consistently deliver breakthrough thinking, even under tight deadlines and challenging briefs.",
    },
    {
      title: "Fun Brainstorming Battles",
      description:
        "Master Teamwork Through Creative Competitions. Creativity in agencies isn't a solo sport — it's a team game. Our program features exciting brainstorming battles where you'll collaborate, compete, and create under pressure. These fun, high-energy sessions simulate real agency environments where quick thinking and building on others' ideas is crucial. You'll learn to present concepts convincingly, accept and improve on feedback, and develop the collaborative spirit agencies prize in their creative teams. Plus, these battles are simply fun — reminding you that creativity should always be playful at its core.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who is this program for?",
      answer:
        "Anyone with a passion for creativity — students, freshers, content creators, freelancers, or anyone wanting to break into advertising or branding.",
    },
    {
      question: "What's the batch schedule?",
      answer:
        "Weekend Batches Only – Perfect for students & working professionals. Every weekend is a creative adventure!",
    },
    {
      question: "Do I need prior experience in writing or advertising?",
      answer:
        "Not at all! We'll build you from scratch — all you need is a curious mind and love for creativity.",
    },
    {
      question: "What if I'm not confident in English?",
      answer:
        "No worries! Creativity is language-proof — we'll teach you the art of copylines in a way that works across Hindi, English, and even regional languages.",
    },
    {
      question: "What will I create during this program?",
      answer:
        "By the end, you'll have a creative folio packed with: ✅ Decoded briefs ✅ Brand positioning ideas ✅ Campaign concepts ✅ Taglines, slogans & more",
    },
  ];

  const [selected, setSelected] = useState(highlights[0]);

  return (
    <div className="bg-[#1A1A1A] text-white">

      {/* Introduction */}
      <div className="w-full bg-white text-black shadow-lg">
      <div className="w-full p-8 md:px-24 py-24 flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Side: Text Content */}
    <div className="text-center md:text-left max-w-3xl mx-auto">
      {/* Headline */}
      <h2 className="text-3xl font-bold">
        Welcome to <span className="text-[#FF4B00]">Ctrl + V = Visualise</span>, Creative Thinking & Copyline Mastery Program
      </h2>

      {/* Description */}
      <p className="text-black leading-relaxed mt-4">
        A power-packed <b>1.5-month program</b> designed to sharpen your creative mind and master the art of crafting impactful copylines.
      </p>

      <p className="text-black leading-relaxed mt-4">
        Whether you dream of becoming a <b>creative strategist</b>, <b>copywriter</b>, or <b>brand storyteller</b>, this program will train you to think like an ad genius — from decoding tricky client briefs to delivering creative ideas that stick.
      </p>

      {/* Key Points */}
      <div className="mt-4 space-y-2">
        <p>🎯 Not a typical classroom course</p>
        <p>💡 Action-packed creative bootcamp</p>
        <p>🚀 Surprise challenges & brainstorming games</p>
        <p>⚡ Real-time brand simulations</p>
      </div>

      <p className="text-black leading-relaxed mt-4">
        If you've ever wondered how agencies come up with award-winning campaigns, this is your <b>backstage pass</b>!
      </p>

      {/* CTA Button */}
      <button 
  className="mt-6 px-6 py-3 bg-[#FF4B00] text-white font-medium rounded-lg text-lg hover:bg-[#E04300] transition duration-300"
  onClick={() => window.location.href = "/contact"}
>
  Enroll Now
</button>
    </div>

    {/* Right Side: Image Section */}
    <div className="text-center max-w-3xl mx-auto">
      <img
        src="/002.jpg"
        alt="Course Preview"
        className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-lg"
      />
    </div>

  </div>
      </div>


      {/* Program Highlights */}
      <div className="w-full bg-black text-white py-16 px-16 md:px-24">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: List of Highlights */}
        <div className="md:w-1/2">
      <h2 className="text-4xl font-bold mb-6 cerebri-sans-bold">
        Highlights of the Program
      </h2>
      <div className="space-y-6">
        {highlights.map((item, index) => (
          <div key={index} onMouseEnter={() => setSelected(item)}>
            <div
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
                selected?.title === item.title
                  ? "text-[#FF4B00] font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ArrowOutwardIcon
                className={`transition-all duration-300 ${
                  selected?.title === item.title ? "text-[#FF4B00]" : "text-gray-400"
                }`}
              />
              {item.title}
            </div>
            <div className="w-[60%] h-[2px] bg-gray-600 mt-2"></div> 
          </div>
        ))}
      </div>
    </div>

        {/* Right: Dynamic Content */}
        <div className="md:w-2/5 bg-white text-black p-6 rounded-lg shadow-lg">
  <h3 className="text-xl font-bold cerebri-sans-bold">{selected.title}</h3>
  <p className="mt-3">{selected.description}</p>
</div>
      </div>
    </div>

      {/* Certification */}
      <div className="w-full py-24 px-6 md:px-24 bg-white text-black">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <p className="text-gray-500 font-semibold">After completing the program, you'll earn:</p>
          <h2 className="text-4xl font-bold mt-2 cerebri-sans-bold">
          🎓 Certification After Completion
          </h2>
          <div className="mt-4 space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-[#FF4B00] text-2xl">✅</span>
              <p className="text-lg font-medium">
                Empire Ad School - Creative Thinking & Copyline Mastery Certificate
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF4B00] text-2xl">✅</span>
              <p className="text-lg font-medium">
                Creative Portfolio Review by Industry Experts
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF4B00] text-2xl">✅</span>
              <p className="text-lg font-medium">
                Direct Industry Recognition – Your certification will be a talking point in interviews
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-600">
            This isn't just a certificate — it's proof that you think like a creative professional.
          </p>
        </div>

        {/* Right Image (Certificate) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/certificate.jpg" 
            alt="Creative Thinking Certificate"
            className="w-full md:w-3/4 rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      </div>
    </div>

      {/* FAQ Section */}
      <div className="bg-black py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-6">❓ FAQ</h2>
      
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-500 mb-4">
            <button
              className="w-full text-left py-3 text-lg font-medium flex justify-between items-center text-white"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span className="text-red-500">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="p-3 text-white text-center">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="w-full py-16 px-6 md:px-24 bg-white text-black">
       <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Left Content: Career Support */}
      <div className="md:w-1/2">
      <h2 className="text-4xl font-bold cerebri-sans-bold">
        🚀 Career Support
      </h2>
      <p className="text-gray-600 leading-relaxed mt-4">
        At Empire Ad School, we don't stop at teaching — we nurture careers:
      </p>

      <div className="mt-4 space-y-6">
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">✅</span>
          <p className="text-lg font-medium">Portfolio Guidance – We'll help you build a standout Creative Thinker's Folio</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">✅</span>
          <p className="text-lg font-medium">Agency Recommendations – Top-performing students get direct references to creative agencies</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">✅</span>
          <p className="text-lg font-medium">Mock Ideation Rounds – Practice how real brainstorming sessions happen at agencies</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">✅</span>
          <p className="text-lg font-medium">Lifetime Creative Community Access – Your creative tribe, forever</p>
        </div>
        </div>
        <p className="mt-6 text-gray-600">
          We don't just teach creativity — we launch creative careers.
        </p>
       </div>

    {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
      <img
        src="/career.jpg"
        alt="Career Support Preview"
        className="w-full md:w-3/4 rounded-lg shadow-lg border border-gray-200"
      />
    </div>
   </div>
  </div>




      {/* Fee Structure */}
      <div className="w-full py-16 px-6 md:px-24 bg-black text-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content: CTA Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold">
            Your Creative Thinking Career Starts Here
          </h2>
          <p className="text-gray-600 leading-relaxed mt-4 text-white">
            In the advertising industry, the best thinkers write history. Ctrl + V = Visualise is where you begin your story.
          </p>
          <div className="mt-4 space-y-2 text-white">
            <p>✅ Learn the creative process from the pros</p>
            <p>✅ Build a folio that proves your creative thinking skills</p>
            <p>✅ Join a community of next-gen creative minds</p>
          </div>
          <p className="mt-4 text-white">
            Admissions open now — limited seats only!
          </p>
          <button 
  className="mt-6 px-6 py-3 bg-[#FF4B00] text-white font-medium rounded-lg text-lg hover:bg-[#E04300] transition duration-300"
  onClick={() => window.location.href = "/contact"}
>
  Enroll Now
</button>
        </div>

        {/* Right Content: Fee Structure */}
        <div className="md:w-1/2">
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            {/* Program Name */}
            <h2 className="text-2xl cerebri-sans-bold text-black">Ctrl + V = Visualise: Creative Thinking & Copyline Mastery</h2>
            <hr className="my-4 border-gray-300" />

            {/* Fee Structure */}
            <p className="text-lg font-semibold text-gray-700">💰 Fee Structure</p>

            {/* Program Fee */}
            <p className="mt-2 text-2xl font-bold text-[#5A2D82]">
              ₹38,999/- <span className="text-gray-600 text-sm">(all inclusive)</span>
            </p>

            {/* Early Bird Offer */}
            <p className="mt-4 text-lg font-semibold text-red-600">
              🔥 Early Bird Offer: <span className="text-black">₹34,999/-</span> for first 10 students
            </p>
            
            <p className="mt-4 text-gray-600">
              This isn't an expense — it's your investment in becoming a creative thinker agencies will fight to hire.
            </p>

            {/* Bottom Gradient Line */}
            <div className="mt-6 h-2 w-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
          </div>
        </div>
        
      </div>
    </div>

    </div>
  );
}