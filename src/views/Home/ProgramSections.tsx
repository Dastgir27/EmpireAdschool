import { useState } from "react";
import { CalendarToday, LocationOn, AccessTime, Person } from "@mui/icons-material";

export default function ProgramSections() {
    const programs = [
        {
          title: "Ctrl + C Create - Design Mastery Program",
          deadline: "24th March, 2025",
          mode: "Blended",
          modeDetails: "In-Person Weekend Classes",
          duration: "1 Month",
          instructors: "Industry Practitioners",
          keyPoints: [
            " Learn from Top Designers, Brand Creatives & Art Directors to Master Visual Storytelling",
            " Test your skills with 4 Live Branding Projects — Real Clients, Real Briefs, Real Feedback",
            " Target average placement of 4.5-8 LPA with Portfolio Curation & Direct Industry Referrals from our Career Advisory Team",
          ],
          image: "/001.jpg",
          link:"/design-mastery",
        },
        {
          title: "Ctrl + V Visualize - Creative Copy Writing",
          deadline: "24th March, 2025",
          mode: "Blended",
          modeDetails: "In-Person Weekend Classes",
          duration: "1 Month",
          instructors: "Industry Practitioners",
          keyPoints: [
            " Learn from Top Copywriters, Creative Directors & Brand Builders to Master the Art of Words that Sell",
            " Test your pen with 4 Live Campaign Briefs — Write for Real Brands, Real Products, Real Impact",
            " Target average placement of 5-9 LPA with Portfolio Showcasing & Direct Connects via our Career Advisory Team",
          ],
          image: "/002.jpg",
          link:"/creative-thinking",
        },
        {
          title: "Ctrl + C + V Visualize - Master Branding Program",
          deadline: "24th March, 2025",
          mode: "Blended",
          modeDetails: "In-Person Weekend Classes",
          duration: "1 Month",
          instructors: "Industry Practitioners",
          keyPoints: [
            " Master Visual Storytelling & Killer Copy in One Power-Packed Program",
            " Work on 8 Real Projects — Design it. Write it. Sell it.",
            " Target average placement of 6-12 LPA with a Portfolio that’s 2X More Powerful",
            " Because great campaigns need both a Headline & a Design that turns heads.",
          ],
          image: "/003.jpg",
          link:"/complete-creative-mastery",
        },
      ];

  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  return (
    <section className="py-12 px-6 md:px-16 bg-gray-100 text-black ">
      <h2 className="text-4xl font-bold text-center mb-8 p-4">Programmes at a Glance</h2>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Sidebar (Program List) */}
        <div className="md:w-1/4 flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          {programs.map((program, index) => (
            <button
              key={index}
              className={`p-4 text-lg font-medium text-left rounded-lg transition-all ${
                selectedProgram.title === program.title
                  ? "bg-white shadow-md text-black font-bold"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setSelectedProgram(program)}
            >
              {program.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        {/* Main Content */}
<div className="md:w-3/4 bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col lg:flex-row lg:gap-12">
  <div className="lg:w-3/5">
    <h3 className="text-2xl font-bold mb-4">{selectedProgram.title}</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <ProgramDetail icon="calendar" label="Round 3 Deadline" value={selectedProgram.deadline} />
      <ProgramDetail icon="location" label={selectedProgram.mode} value={selectedProgram.modeDetails} />
      <ProgramDetail icon="clock" label="Duration" value={selectedProgram.duration} />
      <ProgramDetail icon="teacher" label="Taught by" value={selectedProgram.instructors} />
    </div>

    <div className="space-y-3">
      {selectedProgram.keyPoints.map((point, index) => (
        <p key={index} className="flex items-start space-x-2">
          <span className="text-lg">✱</span>
          <span>{point}</span>
        </p>
      ))}
    </div>

    <div className="mt-6">
      <a
        href={selectedProgram.link}
        className="inline-flex items-center border border-black rounded-full px-6 py-2 text-black font-medium hover:bg-black hover:text-white transition"
      >
        EXPLORE PROGRAMME
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>

  {/* Image Section */}
  <div className="lg:w-2/5 mt-8 lg:mt-0">
    <img
      src={selectedProgram.image}
      alt={selectedProgram.title}
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>

      </div>
    </section>
  );
}

// Helper Component for Program Details
interface ProgramDetailProps {
  icon: "calendar" | "location" | "clock" | "teacher";
  label: string;
  value: string;
}

function ProgramDetail({ icon, label, value }: ProgramDetailProps) {
  return (
    <div className="flex items-start space-x-3">
      {/* Icon Container */}
      <div className="p-2 rounded-full bg-gray-100 text-black">
        {icon === "calendar" && <CalendarToday className="w-5 h-5" />}
        {icon === "location" && <LocationOn className="w-5 h-5" />}
        {icon === "clock" && <AccessTime className="w-5 h-5" />}
        {icon === "teacher" && <Person className="w-5 h-5" />}
      </div>

      {/* Label & Value */}
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}
