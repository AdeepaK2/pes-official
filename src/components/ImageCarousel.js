"use client";

import { useState, useEffect, use } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <img src={images[current]} alt="Event Image" className="w-full h-auto rounded-lg" />
      <button className="absolute top-1/2 left-4 bg-gray-800 p-2 text-white rounded-full" onClick={() => setCurrent((current - 1 + images.length) % images.length)}>
        <ChevronLeft />
      </button>
      <button className="absolute top-1/2 right-4 bg-gray-800 p-2 text-white rounded-full" onClick={() => setCurrent((current + 1) % images.length)}>
        <ChevronRight />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span key={index} className={`w-2 h-2 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400'}`} onClick={() => setCurrent(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;