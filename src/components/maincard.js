"use client";
import { motion } from "framer-motion";

const text = "IEEE Power & Energy Society Student Branch Chapter";
const subText = "University of Moratuwa";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-white text-center overflow-hidden px-4">
      {/* Cyber-Tech Rotating Rings */}
      <motion.div
        className="absolute w-64 md:w-80 h-64 md:h-80 border-4 border-[#71F45D] rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />
      <motion.div
        className="absolute w-72 md:w-96 h-72 md:h-96 border-4 border-gray-500 rounded-full opacity-20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />
      <motion.div
        className="absolute w-56 md:w-64 h-56 md:h-64 border-2 border-[#71F45D] rounded-full opacity-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/* Thunder Energy Effect */}
      <motion.div
        className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] opacity-60"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <svg
          className="absolute left-0 top-0 w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M50 100 Q75 80 100 100 T150 100"
            stroke="#71F45D"
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray="10,10"
            animate={{
              strokeDashoffset: [0, 20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M60 110 Q85 90 110 110 T160 110"
            stroke="#71F45D"
            strokeWidth="1.5"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>

      {/* Animated IEEE PES SBC UoM Text */}
      <motion.h1
        className="text-lg md:text-3xl font-bold text-black z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.3 },
          },
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Glowing Line Effect */}
      <motion.div
        className="mt-2 h-1 w-24 md:w-40 bg-[#71F45D] shadow-lg"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Subtext Animation */}
      <motion.p
        className="mt-2 text-sm md:text-lg text-gray-600 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {subText}
      </motion.p>
    </div>
  );
}
