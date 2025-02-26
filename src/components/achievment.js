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

  // For desktop, split into two rows: first 3 awards and next 4 awards.
  const firstRow = achievements.slice(0, 3);
  const secondRow = achievements.slice(3);

  const awardVariants = {
    initial: { scale: 1, boxShadow: "0px 0px 0px rgba(113,244,93,0)" },
    hover: { scale: 1.07, boxShadow: "0px 0px 15px 5px rgba(113,244,93,0.8)" },
  };

  return (
    <section className="py-10 px-6 md:px-20 bg-white text-black text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8">
        Achievements
      </h2>

      {/* Mobile view: one award per row with a larger container */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {achievements.map((src, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileHover="hover"
            variants={awardVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative cursor-pointer w-full max-w-lg mx-auto aspect-square"
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

      {/* Desktop view: two rows; first row with 3 awards and second row with 4 awards */}
      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-8 mb-8">
          {firstRow.map((src, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileHover="hover"
              variants={awardVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative cursor-pointer w-64 h-64"
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
        <div className="flex justify-center items-center gap-8">
          {secondRow.map((src, index) => (
            <motion.div
              key={index + 3}
              initial="initial"
              whileHover="hover"
              variants={awardVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative cursor-pointer w-64 h-64"
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
