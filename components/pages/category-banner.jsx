"use client";

import React, { useState, useEffect } from "react";

export default function CategoryBanner({ bgImage, icon, name, description1, description2 }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Start animation after a second
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative transition-all mx-auto ease-in-out ${
        isLoaded
          ? "w-[90vw] h-60 sm:w-[70vw] sm:h-64 lg:w-[40vw] lg:h-72 mt-8 lg:mt-12"
          : "w-[90vw] h-[50vh] sm:w-[80vw] sm:h-[60vh] lg:w-[70vw] lg:h-[70vh] mt-10 lg:mt-20"
      } flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden shadow-lg`}
      style={{
        backgroundImage: `url(${bgImage})`,
        transitionDuration: "2000ms",
      }}
    >
      {/* Glassy Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-sm" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center text-white p-4 sm:p-6 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-16 h-16 sm:w-20 sm:h-20 p-2 bg-white/20 rounded-full shadow-md"
            />
          </div>
          {/* Category Name */}
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-widest uppercase text-center sm:text-left">
            {name}
          </h2>
        </div>
        {/* Description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-sm lg:text-base italic tracking-wide text-center text-white/90">
          {description1}
        </p>
        <p className="mt-4 sm:mt-6 text-sm sm:text-sm lg:text-base italic tracking-wide text-center text-white/90">
          {description2}
        </p>
      </div>

      {/* Subtle Decorative Border */}
      <div className="absolute inset-0 border-2 border-white/10 rounded-xl pointer-events-none" />
    </div>
  );
}
