"use client";

import { useEffect, useState } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "This is the first page of the carousel.",
    "This is the second page of the carousel.",
    "This is the third page of the carousel.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-[400px] h-[450px] relative overflow-hidden border rounded-lg shadow-md">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((text, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] h-[450px] flex items-center justify-center bg-gray-100 text-gray-800 text-xl p-4"
          >
            {text}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
