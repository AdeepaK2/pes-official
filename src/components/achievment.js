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

  // Split into two rows: first 3 awards and next 4 awards
  const firstRow = achievements.slice(0, 3);
  const secondRow = achievements.slice(3);

  // Larger award sizes for all images
  const sizeClasses = "w-48 h-48 md:w-56 md:h-56";

  return (
    <section className="py-10 px-6 md:px-20 bg-gray-900 text-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#71F45D] mb-8">
        Achievements
      </h2>
      <div className="flex flex-col items-center gap-8">
        {/* First Row */}
        <div className="flex justify-center items-center gap-8">
          {firstRow.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              className={`relative cursor-pointer transition-transform duration-300 ${sizeClasses}`}
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
        {/* Second Row */}
        <div className="flex justify-center items-center gap-8">
          {secondRow.map((src, index) => (
            <motion.div
              key={index + 3}
              whileHover={{ scale: 1.07 }}
              className={`relative cursor-pointer transition-transform duration-300 ${sizeClasses}`}
            >
              <Image
                src={src}
                alt={`Award ${index + 4}`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
