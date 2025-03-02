"use client";

import { useEffect } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import teamData from "@/app/data/teamData";
import TeamSection from "@/components/TeamSection";

export default function CommitteesPage() {
  // Prevent horizontal scrolling
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto"; // Reset on unmount
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-gray-900 min-h-screen">
      <Navbar />
      <div className="p-6 md:p-12 w-full flex flex-col items-center">
        {teamData.map((section, index) => (
          <TeamSection key={index} title={section.category} members={section.members} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
