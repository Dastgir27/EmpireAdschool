import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("Strategic Business Management");

  const programs = [
    {
      title: "Strategic Business Management",
      duration: "12 Months",
      mode: "Blended",
      format: "Hands-on",
      cohort: "March, 2025",
    },
    {
      title: "Strategic Marketing & AI",
      duration: "10 Months",
      mode: "Blended",
      format: "Practical",
      cohort: "April, 2025",
    },
    {
      title: "Applied Finance",
      duration: "8 Months",
      mode: "Hybrid",
      format: "Case-Based",
      cohort: "June, 2025",
    },
  ];

  return (
    <header className="bg-black text-white py-4 px-6 md:px-12 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center">
        <span className="bg-gradient-to-r from-yellow-400 to-pink-500 px-2 py-1 rounded-md text-black">M</span>
        <span className="ml-2">asterCamp</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-gray-300 transition-colors">Youtube ↗</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Instagram ↗</a>
        <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn ↗</a>
      </nav>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="hidden md:inline-block border border-white px-4 py-2 rounded-full">Hire From Us</button>

        {/* Explore Programs Button */}
        <button
          className="border border-white px-4 py-2 rounded-full flex items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Explore Programmes
          <span className={`ml-2 transform ${isDropdownOpen ? "rotate-180" : "rotate-0"} transition-transform`}>
            <ExpandMoreIcon/>
          </span>
        </button>
      </div>

      {/* Dropdown Section */}
      {isDropdownOpen && (
        <div className="absolute left-0 top-full w-full bg-black text-white shadow-lg p-6 mt-2 z-50">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar - Program Tabs */}
            <div className="md:w-1/4 flex flex-col gap-3">
              {programs.map((program) => (
                <button
                  key={program.title}
                  className={`p-3 rounded-lg text-left font-medium transition-all ${
                    selectedProgram === program.title
                      ? "bg-gradient-to-r from-red-500 to-yellow-400 text-black font-bold"
                      : "hover:text-gray-300"
                  }`}
                  onClick={() => setSelectedProgram(program.title)}
                >
                  {program.title} →
                </button>
              ))}
            </div>

            {/* Program Details */}
            <div className="md:w-3/4 p-6">
              {programs.map(
                (program) =>
                  selectedProgram === program.title && (
                    <div key={program.title}>
                      <h2 className="text-2xl font-bold">{program.title}</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <ProgramDetail label="Duration" value={program.duration} />
                        <ProgramDetail label="Mode" value={program.mode} />
                        <ProgramDetail label="Format" value={program.format} />
                        <ProgramDetail label="Cohort 1" value={program.cohort} />
                      </div>

                      {/* Section Links (No Underline) */}
                      <div className="flex flex-wrap gap-4 mt-6 text-sm font-medium">
                        <a href="#" className="hover:text-gray-300 transition-colors">OVERVIEW</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">WHY {program.title.split(" ")[0]}</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">PROGRAMME OUTCOMES</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">HIGHLIGHTS</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">MEET YOUR MASTERS</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">EXPERIENTIAL INTERVENTIONS</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">CURRICULUM</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">FAQs</a>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Helper Component for Program Details
function ProgramDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-400">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}

