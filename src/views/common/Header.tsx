import { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("Creative Thinking & Copyline Mastery");

  const programs = [
    {
      title: "Design Mastery Program",
      link: "/design-mastery",
      duration: "2 Months",
      mode: "Weekend",
      format: "Hands-on",
      cohort: "April, 2025",
    },
    {
      title: "Creative Thinking & Copyline Mastery",
      link: "/creative-thinking",
      duration: "2 Months",
      mode: "Weekend",
      format: "Bootcamp",
      cohort: "March, 2025",
    },
    {
      title: "Complete Creative Mastery",
      link: "/complete-creative-mastery",
      duration: "2 Months",
      mode: "Weekend",
      format: "Full-Cycle",
      cohort: "June, 2025",
    },
  ];

  return (
    <header className="bg-black text-white py-4 px-6 md:px-12 flex justify-between items-center relative">
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.png" alt="MasterCamp Logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Link to="/contact" className="hidden md:inline-block border border-white px-4 py-2 rounded-full">
          Contact Us
        </Link>

        {/* Call Us Button */}
        <a href="tel:+917400225894" className="hidden md:inline-block border border-white px-4 py-2 rounded-full">
          Call Us
        </a>

        {/* Explore Programs Button */}
        <button
          className="bg-white text-black border border-white px-4 py-2 rounded-full flex items-center transition duration-300 hover:bg-black hover:text-white"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Explore Programmes
          <span className={`ml-2 transform ${isDropdownOpen ? "rotate-180" : "rotate-0"} transition-transform`}>
            <ExpandMoreIcon />
          </span>
        </button>
      </div>

      {/* Dropdown Section */}
      {isDropdownOpen && (
        <div className="absolute left-0 top-full w-full bg-black text-white shadow-lg p-6 mt-2 z-50">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar - Program Tabs (Non-Clickable) */}
            <div className="md:w-1/4 flex flex-col gap-3">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className={`p-3 rounded-lg text-left font-medium ${
                    selectedProgram === program.title
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold"
                      : "hover:text-gray-300"
                  }`}
                  onMouseEnter={() => setSelectedProgram(program.title)}
                >
                  {program.title}
                </div>
              ))}
            </div>

            {/* Program Details (Clickable) */}
            <div className="md:w-3/4 p-6">
              {programs.map(
                (program) =>
                  selectedProgram === program.title && (
                    <Link to={program.link} key={program.title} onClick={() => setIsDropdownOpen(false)}>
                      <h2 className="text-2xl font-bold hover:text-yellow-500 transition">{program.title}</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <ProgramDetail label="Duration" value={program.duration} />
                        <ProgramDetail label="Mode" value={program.mode} />
                        <ProgramDetail label="Format" value={program.format} />
                        <ProgramDetail label="Cohort" value={program.cohort} />
                      </div>
                    </Link>
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