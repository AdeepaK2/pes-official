"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { teamData, advisor } from "@/app/data/teamData";
import TeamSection from "@/components/TeamSection";
import { motion } from "framer-motion";

export default function CommitteesPage() {
  // Prevent horizontal scrolling
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto"; // Reset on unmount
    };
  }, []);

  // State to control visibility of the About section
  const [showAbout, setShowAbout] = useState(false);

  // Function to toggle the About section visibility
  const toggleAbout = () => {
    setShowAbout((prevState) => !prevState);
  };

  return (
    <div className="overflow-x-hidden bg-gray-900 min-h-screen">
      <Navbar />
      <div className="p-6 md:p-12 bg-white min-h-screen flex flex-col items-center">
        {/* Advisor Section */}
        {advisor && (
          <div className="flex flex-col items-center text-center mb-12 mt-20">
            <motion.div
              className="w-72 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={advisor.image}
                alt={advisor.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h2 className="text-green-600 text-3xl font-bold mt-6">ADVISOR</h2>
            <h3 className="text-gray-800 text-2xl font-semibold mt-2">
              {advisor.name}
            </h3>

            <h4 className="text-green-600 font-bold mt-4">
              <button
                className="text-green-600 hover:text-green-800"
                onClick={toggleAbout}
              >
                About
              </button>
            </h4>

            {/* Conditionally render the About section with smooth transition */}
            {showAbout && (
              <motion.div
                className="mt-4 w-96 p-4 bg-gray-100 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-600 text-sm">{advisor.qualifications}</p>
                <p className="text-gray-500 text-sm">{advisor.title}</p>
                <p className="text-gray-500 text-sm">{advisor.department}</p>
                <p className="text-gray-500 text-sm">{advisor.university}</p>
              </motion.div>
            )}
          </div>
        )}

        {/* Team Sections */}
        {teamData.map((section, index) => (
          <TeamSection
            key={index}
            title={section.category}
            members={section.members}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
