"use client"

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
        isLoaded ? "w-[40vw] h-72 mt-12" : "w-[70vw] h-[70vh] mt-20"
      } flex items-center justify-center bg-cover bg-center rounded-xl overflow-hidden shadow-lg`}
      style={{ backgroundImage: `url(${bgImage})`,  transitionDuration: "2000ms" }}

    >
      {/* Glassy Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-sm" />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center text-white p-6 transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-100"
        }`}
      >
        <div className="flex items-center gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <img
              src={icon}
              alt={`${name} icon`}
              className="w-20 h-20 p-2 bg-white/20 rounded-full shadow-md"
            />
          </div>
          {/* Category Name */}
          <h2 className="text-4xl font-extrabold tracking-widest uppercase">
            {name}
          </h2>
        </div>
        {/* Description */}
        <p className="mt-6 text-base italic tracking-wide text-center text-white/90">
          {description1}
        </p>
        <p className="mt-6 text-base italic tracking-wide text-center text-white/90">
          {description2}
        </p>

      </div>

      {/* Subtle Decorative Border */}
      <div className="absolute inset-0 border-2 border-white/10 rounded-xl pointer-events-none" />
    </div>
  );
}
