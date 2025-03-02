"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroCard from "@/components/maincard";
import { motion } from "framer-motion";
import AchievementsSection from "@/components/achievment";

export default function Home() {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Navbar />
      <HeroCard />

      {/* IEEE PES Content Section with dark theme */}
      <section className="py-10 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/80">
            What is PES?
          </h2>
          <p className="mt-4 text-gray-400">
            IEEE Power & Energy Society (PES) is the world’s largest forum to share technological developments in the electric power industry as well as to educate members developing standards. The IEEE PES Student Branch Chapter University of Moratuwa strives to realize the vision and mission of IEEE PES through volunteering and spreading awareness on means to gain experience and exposure in the field of electric power. The student branch chapter annually organizes the Undergraduate Design Competition to appreciate the design thinking of the Electrical Engineering Undergraduates of the University, along with guest lectures and field visits.
          </p>
        </div>
      </section>
      
      {/* Video Section with dark theme */}
      <section className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/80 mb-6">
          IEEE PES Promotional Video
        </h2>
        <div className="max-w-4xl mx-auto border-4 border-[#71F45D] rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-auto rounded-lg" autoPlay muted loop controls>
            <source src="/main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Achievements Section (No extra margin-bottom) */}
      <AchievementsSection />

      {/* Transition Gap with Same Background as Achievements Section */}
      <div className="h-10 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>

      {/* Footer (Matching Background) */}
      <Footer />
    </div>
  );
}
