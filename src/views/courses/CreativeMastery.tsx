"use client";

import React, {useState} from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from "react-router-dom";

export default function CreativeMastery() {

   const navigate = useNavigate();

  const highlights = [
    {
      title: "Hands-On Creative Training",
      description:
        "Learn by Doing — Because Design is a Skill, Not a Theory. In Ctrl + C = Create, every session is hands-on. You’ll not just watch tutorials — you’ll design real projects right from Day 1. From creating brand logos to social media posts to campaign visuals, you’ll work on actual creative briefs just like in a real agency. By the end of the program, you’ll not only master tools like Photoshop and Illustrator, but also understand how to use design to solve brand problems. This isn’t classroom learning — this is creative gym training for your design muscles.",
    },
    {
      title: "Tools & Techniques Mastery",
      description:
        "Learn the Tools Pros Use — And the Tricks They Don’t Teach in Tutorials. Great design needs great tools — and we teach you how to command them like a pro. In this program, you’ll master Adobe Photoshop, Illustrator, and InDesign along with a sneak peek into AI design tools that are shaping the future. But tools are only half the game — we’ll also teach you pro techniques, creative shortcuts, and workflow hacks that real designers use to save time and boost creativity. After all, being fast + creative = unstoppable in the design industry.",
    },
    {
      title: "Creative Thinking for Designers",
      description:
        "Design is More Than Pretty Pictures — Learn to Think Like a Problem Solver. Most designers can create a pretty image, but the best designers create solutions. In Ctrl + C = Create, you’ll train your brain to think like a creative strategist. You’ll learn how to decode client briefs, understand brand personalities, and create visuals that tell a story. This unique mix of creative thinking + design execution makes you a complete designer — someone who can think, plan, and design for brands that want results, not just beautiful posts.",
    },
    {
      title: "Real-Time Feedback & Portfolio Building",
      description:
        "Your Work Reviewed by Pros — So You Graduate Job-Ready. What’s the point of learning if you don’t know how good you are? In this program, every project you design gets reviewed by industry mentors — creative directors, design heads, and real agency professionals. This direct feedback loop helps you sharpen your skills fast and understand what agencies actually want in a designer. Plus, by the end of the program, you’ll walk out with a ready-to-show design portfolio that doesn’t just show your talent — it proves your thinking, execution, and creative maturity.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who should join Ctrl + C + V?",
      answer:
        "Anyone who dreams of becoming a creative powerhouse in design & copywriting. No prior experience needed!",
    },
    {
      question: "What’s the batch schedule?",
      answer:
        "Weekend sessions packed with creative games, group projects, and real-world brand challenges.",
    },
    {
      question: "Can I join only one part — Design or Copy?",
      answer:
        "Yes, but this combo program makes you industry-ready faster with both skills.",
    },
    {
      question: "What will I create during this program?",
      answer:
        "A full creative portfolio with  campaign ideas, headlines, design projects, and real client briefs. ",
    },
  ];

  const [selected, setSelected] = useState(highlights[0]);

  return (
    <div className="bg-[#1A1A1A] text-white">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 bg-[#A67C52]">
        <h1 className="text-4xl font-bold">Ctrl + C + V</h1>
        <p className="text-lg mt-2">Complete Creative Mastery Program</p>
      </div>

      {/* Introduction */}
      <div className="w-full bg-white text-black shadow-lg">
      <div className="w-full p-8 md:px-24 py-24 flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Side: Text Content */}
    <div className="text-center md:text-left max-w-3xl mx-auto">
      {/* Headline */}
      <h2 className="text-3xl font-bold">
        Welcome to <span className="text-[#FF4B00]">Ctrl + C + V</span>, the Ultimate Creative Power Combo Program by Empire Ad School.
      </h2>

      {/* Description */}
      <p className="text-black leading-relaxed mt-4">
        This combo program gives you the best of both worlds — <b>design mastery + creative thinking & copyline wizardry</b>.  
        Over <b>1.5 months of weekend-only immersive learning</b>, you’ll:
      </p>

      {/* Key Points */}
      <div className="mt-4 space-y-2">
        <p>🎨 Master visual design tools & techniques</p>
        <p>💡 Decode briefs & crack creative ideas</p>
        <p>✍️ Write copy that grabs attention</p>
        <p>⚡ Tackle real-world challenges with full agency-style fun</p>
      </div>

      <p className="text-black leading-relaxed mt-4">
        If you want to become a <b>creative mind</b> who can think, design & write like a pro — <b>Ctrl + C + V</b> is your complete creative passport.  
        This is not just learning — this is your entry into the <b>creative industry</b>.
      </p>

      {/* CTA Button */}
      <button className="mt-6 px-6 py-3 bg-[#FF4B00] text-white font-medium rounded-lg text-lg hover:bg-[#8B5E3C] transition duration-300">
        Enroll Now
      </button>
    </div>

    {/* Right Side: Image Section */}
    <div className="text-center max-w-3xl mx-auto">
      <img
        src="/003.jpg"
        alt="Course Preview"
        className="w-full max-w-md mx-auto mt-6 rounded-lg shadow-lg"
      />
    </div>

  </div>
      </div>


      {/* Program Highlights */}
      <div className="w-full bg-black text-white py-16 px-6 md:px-24">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: List of Highlights */}
        <div className="md:w-1/2">
      <h2 className="text-4xl font-bold mb-6 cerebri-sans-bold">
        Programme Highlights
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
        <div className="md:w-1/2 bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold cerebri-sans-bold">{selected.title}</h3>
          <p className="mt-3">{selected.description}</p>
        </div>
      </div>
    </div>

      {/* Certification */}
      <div className="w-full py-16 px-6 md:px-24 bg-white text-black">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <p className="text-gray-500 font-semibold"> Complete the program and earn:</p>
          <h2 className="text-4xl font-bold mt-2 cerebri-sans-bold">
          🎓 Certification After Completion
          </h2>
          <div className="mt-4 space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-[#FF4B00] text-2xl">✅</span>
              <p className="text-lg font-medium">
                Empire Ad School - Creative Mastery Certificate (Design + Copy + Strategy)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF4B00] text-2xl">✅</span>
              <p className="text-lg font-medium">
                Dual Portfolio Review by Top Industry Experts
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF4B00] text-2xl">✅</span>
              <p className="text-lg font-medium">
                Direct Recognition from Creative Agencies
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-600">
            This isn’t a basic certificate — this is a creative passport that opens doors to design
            studios, ad agencies, digital firms, and content creation houses.
          </p>
        </div>

        {/* Right Image (Certificate) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/certificate.jpg" 
            alt="Creative Mastery Certificate"
            className="w-full md:w-3/4 rounded-lg shadow-lg border border-gray-200"
          />
        </div>
      </div>
    </div>

      {/* FAQ Section */}
      <div className="bg-black py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-6">❓ Frequently Asked Questions</h2>
      
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
        Beyond learning, we help launch your creative career with:
      </p>

      <div className="mt-4 space-y-6">
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">🎨</span>
          <p className="text-lg font-medium">Portfolio Assistance – Build a job-ready creative folio</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">🏆</span>
          <p className="text-lg font-medium">Agency Recommendations – We refer top students</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">🧠</span>
          <p className="text-lg font-medium">Mock Creative Rounds – Practice real ad agency brainstorming</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">🌍</span>
          <p className="text-lg font-medium">Lifetime Creative Community – Connect with mentors & alumni</p>
        </div>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="https://dummyimage.com/600x400/000/fff"
        alt="Career Support Preview"
        className="w-full md:w-3/4 rounded-lg shadow-lg border border-gray-200"
      />
    </div>
  </div>
</div>




      {/* Fee Structure */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#D9CDC4]">💰 Fee Structure</h2>
        <p className="text-[#D9CDC4] mt-4">Combo Program Fee: <span className="font-bold">₹49,999/-</span> (all inclusive)</p>
        <p className="text-[#A67C52] mt-2 font-bold">🔥 Early Bird Offer: ₹42,999/- for first 10 students</p>
      </div>

      {/* Call to Action */}
      <div className="text-center py-10 bg-[#005B96]">
      <h2 className="text-3xl font-bold text-white">Your Creative Future Starts Here</h2>
      <p className="mt-2 text-white">Join the next-gen creatives shaping the future of branding & advertising</p>
      <button
        onClick={() => navigate("/contact")}
        className="mt-6 px-6 py-3 bg-[#1A1A1A] text-[#D9CDC4] font-medium rounded-lg text-lg hover:bg-[#000] transition duration-300"
      >
        Enroll Now
      </button>
    </div>
    </div>
  );
}
