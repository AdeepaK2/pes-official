"use client";

import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const TeamMemberCard = ({ name, role, image, linkedin }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px #71F45D" }}
      transition={{ duration: 0.3 }}
      className="w-64 h-80 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl p-6 text-center border border-gray-300 flex flex-col items-center justify-center"
    >
      <div className="relative w-28 h-28 mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full border-4 border-[#71F45D] shadow-md"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-2xl mt-3 inline-block hover:text-blue-800 transition-colors"
      >
        <FaLinkedin />
      </a>
    </motion.div>
  );
};

export default TeamMemberCard;
