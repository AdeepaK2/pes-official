"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#71F45D]/20 to-white text-black py-6 mt-10">
      <div className="container mx-auto text-center">
        {/* Organization Name */}
        <h2 className="text-lg font-semibold text-black">
          IEEE PES Student Branch Chapter
        </h2>
        <p className="text-sm">University of Moratuwa</p>
  
        {/* Divider */}
        <div className="border-t border-gray-400 my-4 w-2/3 mx-auto"></div>
  
        {/* Copyright Section */}
        <p className="text-xs text-gray-600">
          © Copyright 2025 IEEE - All rights reserved.
        </p>
      </div>
    </footer>
  );
}
