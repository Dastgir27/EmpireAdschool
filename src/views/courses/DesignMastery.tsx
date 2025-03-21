"use client";

import React, {useState} from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function DesignMastery() {

  const highlights = [
    {
      title: "Hands-on Learning",
      description:
        "Learn by Doing — Because Design is a Skill, Not a Theory. In Ctrl + C = Create, every session is hands-on. You'll not just watch tutorials — you'll design real projects right from Day 1. From creating brand logos to social media posts to campaign visuals, you'll work on actual creative briefs just like in a real agency. By the end of the program, you'll not only master tools like Photoshop and Illustrator, but also understand how to use design to solve brand problems. This isn't classroom learning — this is creative gym training for your design muscles.",
    },
    {
      title: "Industry-Proven Mentors",
      description:
        "Learn From Those Who've Done It — Not Just Those Who've Taught It. Our mentors aren't just instructors; they're active creative professionals from top agencies and design studios. They bring real-world briefs, industry insights, and practical knowledge that textbooks simply can't offer. With their guidance, you'll understand not just design theory, but the unwritten rules of the industry — client management, creative presentation, and how to stand out in a competitive field. These connections can become your gateway to internships and job opportunities.",
    },
    {
      title: "Master Key Tools",
      description:
        "Learn the Tools Pros Use — And the Tricks They Don't Teach in Tutorials. Great design needs great tools — and we teach you how to command them like a pro. In this program, you'll master Adobe Photoshop, Illustrator, and InDesign along with a sneak peek into AI design tools that are shaping the future. But tools are only half the game — we'll also teach you pro techniques, creative shortcuts, and workflow hacks that real designers use to save time and boost creativity. After all, being fast + creative = unstoppable in the design industry.",
    },
    {
      title: "Creative Thinking Techniques",
      description:
        "Design is More Than Pretty Pictures — Learn to Think Like a Problem Solver. Most designers can create a pretty image, but the best designers create solutions. In Ctrl + C = Create, you'll train your brain to think like a creative strategist. You'll learn how to decode client briefs, understand brand personalities, and create visuals that tell a story. This unique mix of creative thinking + design execution makes you a complete designer — someone who can think, plan, and design for brands that want results, not just beautiful posts.",
    },
    {
      title: "Interactive Games & Design Battles",
      description:
        "Learn Through Play — Because Creativity Thrives in Fun. Forget boring lectures! We've gamified design learning with creative challenges, design battles, and collaborative competitions that make every session exciting. You'll participate in timed design sprints, creative face-offs, and team challenges that simulate agency pitch situations. These games aren't just fun — they're training you to think fast, collaborate effectively, and produce quality work under pressure, exactly what real design jobs demand.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can apply for this program?",
      answer:
        "Any student, fresher, or creative enthusiast passionate about making a career in graphic design, advertising, or branding. No prior experience required.",
    },
    {
      question: "What is the batch schedule?",
      answer:
        "Weekends Only – Perfect for students and working professionals. Sessions are a mix of learning, designing, games, and feedback.",
    },
    {
      question: "What software will I learn?",
      answer:
        "Adobe Photoshop, Illustrator, InDesign + creative thinking exercises + bonus sessions on AI design tools.",
    },
    {
      question: "Is there a final exam?",
      answer:
        "No boring exams. Your portfolio and design challenges will be your ultimate test — just like the real industry!",
    },
    {
      question: "What if I miss a session?",
      answer:
        "Recorded sessions and backup learning materials will be provided — but design battles and live feedback are best experienced live!",
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
        Welcome to <span className="text-[#FF4B00]">Ctrl + C = Create</span>, a next-generation Design Mastery Program by Empire Ad School
      </h2>

      {/* Description */}
      <p className="text-black leading-relaxed mt-4">
        Crafted for aspiring designers who want to <b>think creatively</b>, <b>design professionally</b>, and <b>enter the advertising industry</b> with confidence.
        This <b>1.5-month weekend-only</b> program blends:
      </p>

      {/* Key Points */}
      <div className="mt-4 space-y-2">
        <p>🎨 Cutting-edge design tools & techniques</p>
        <p>💡 Real industry challenges & briefs</p>
        <p>✍️ Playful learning techniques</p>
        <p>⚡ Portfolio-building projects</p>
      </div>

      <p className="text-black leading-relaxed mt-4">
        This is not just a course — it's your <b>entry ticket</b> into the world of <b>high-impact design careers</b>.
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
        src="/001.jpg"
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
          <p className="text-gray-500 font-semibold">Upon successful completion, you will receive:</p>
          <h2 className="text-4xl font-bold mt-2 cerebri-sans-bold">
          🎓 Certification After Completion
          </h2>
          <div className="mt-4 space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-[#FF4B00] text-2xl">✅</span>
              <p className="text-lg font-medium">
                Empire Ad School - Design Mastery Certificate
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF4B00] text-2xl">✅</span>
              <p className="text-lg font-medium">
                Portfolio Review by Top Creative Experts
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF4B00] text-2xl">✅</span>
              <p className="text-lg font-medium">
                Direct Industry Recognition - A Certification That Matters
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-600">
            Your certificate won't be a piece of paper — it will be your passport to real design jobs.
          </p>
        </div>

        {/* Right Image (Certificate) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/certificate.jpg" 
            alt="Design Mastery Certificate"
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
        At Empire Ad School, our role doesn't end at teaching. We open doors for you:
      </p>

      <div className="mt-4 space-y-6">
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">✅</span>
          <p className="text-lg font-medium">Portfolio Placement Assistance – We help you create a job-ready portfolio</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">✅</span>
          <p className="text-lg font-medium">Agency Connects – We refer top students directly to design agencies, ad firms & digital companies</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">✅</span>
          <p className="text-lg font-medium">Mock Interviews – Practice facing real creative heads before your actual job hunt</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#FF4B00] text-2xl">✅</span>
          <p className="text-lg font-medium">Lifetime Design Community Access – Once a student, always part of our design tribe</p>
        </div>
        </div>
        <p className="mt-6 text-gray-600">
          We don't just teach design — we build your creative career from Day 1.
        </p>
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
      <div className="w-full py-16 px-6 md:px-24 bg-black text-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content: CTA Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold">
            Your Design Career Starts Here
          </h2>
          <p className="text-gray-600 leading-relaxed mt-4 text-white">
            Ctrl + C = Create isn't just a program — it's a launchpad for your creative future.
          </p>
          <div className="mt-4 space-y-2 text-white">
            <p>✅ Learn what agencies actually expect from designers</p>
            <p>✅ Build a portfolio that speaks louder than your resume</p>
            <p>✅ Become part of a creative community that grows together</p>
          </div>
          <p className="mt-4 text-white">
            Seats are limited. Admissions open now!
          </p>
          <button 
  className="mt-6 px-6 py-3 bg-[#FF4B00] text-white font-medium rounded-lg text-lg hover:bg-[#E04300] transition duration-300"
  onClick={() => window.location.href = "/contact"}
>
  Enroll Now
</button>
        </div>

        {/* Right Content: Career Support */}
        <div className="md:w-1/2">
          <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            {/* Program Name */}
            <h2 className="text-2xl cerebri-sans-bold text-black">Ctrl + C = Create: Design Mastery Program</h2>
            <hr className="my-4 border-gray-300" />

            {/* Fee Structure */}
            <p className="text-lg font-semibold text-gray-700">💰 Fee Structure</p>

            {/* Program Fee */}
            <p className="mt-2 text-2xl font-bold text-[#5A2D82]">
              ₹30,999/- <span className="text-gray-600 text-sm">(all inclusive)</span>
            </p>

            {/* Early Bird Offer */}
            <p className="mt-4 text-lg font-semibold text-red-600">
              🔥 Early Bird Offer: <span className="text-black">₹25,999/-</span> for first 10 students
            </p>
            
            <p className="mt-4 text-gray-600">
              This investment is your shortcut into the creative industry — at a fraction of the cost of long-term design programs.
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