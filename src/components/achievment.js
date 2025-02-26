"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  const achievements = [
    "/awards/awd_1.png",
    "/awards/awd_2.png",
    "/awards/awd_3.png",
    "/awards/awd_4.png",
    "/awards/awd_5.png",
    "/awards/awd_6.png",
    "/awards/awd_7.png",
  ];

  return (
    <section className="py-10 px-6 md:px-20 bg-gray-900 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#71F45D] mb-8">
        Achievements
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {achievements.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07 }}
            className="relative cursor-pointer transition-transform duration-300 w-32 h-32 md:w-48 md:h-48"
          >
            <Image
              src={src}
              alt={`Award ${index + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
