"use client";

import { useEffect, useState } from "react";
import carouselData from "@/data/header-carousel-content.json";
import Image from "next/image";

export default function ContentCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[400px] h-[450px] overflow-hidden rounded-lg shadow-md">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] h-[450px] relative flex items-center justify-center text-gray-800 text-xl"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-10"
              style={{
                backgroundImage: `url(${slide.content.image})`,
              }}
            ></div>

            {/* Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

            {/* Text Content */}
            <div className="relative z-10 text-center px-6">
              {slide.type === "ayet-hadis" && (
                <div className="flex flex-col justify-evenly">
                  {/* Ayet Section */}
                  <div>
                    <h3 className="text-lg sm:text-base text-zinc-100 font-bold mb-2">
                      {slide.content.ayet.title}
                    </h3>
                    <p className="mb-1 text-zinc-100 text-base sm:text-sm">
                      {slide.content.ayet.text}
                    </p>
                    <small className="block text-sm sm:text-xs mt-1 text-zinc-400">
                      {slide.content.ayet.source}
                    </small>
                  </div>

                  {/* Hadis Section */}
                  <div className="mt-6">
                    <h3 className="text-lg sm:text-base text-zinc-100 font-bold mb-2">
                      {slide.content.hadis.title}
                    </h3>
                    <p className="mb-1 text-zinc-100 text-base sm:text-sm">
                      {slide.content.hadis.text}
                    </p>
                    <small className="block text-sm sm:text-xs mt-1 text-zinc-400">
                      {slide.content.hadis.source}
                    </small>
                  </div>
                </div>
              )}
              {slide.type === "menkibe" && (
                <div>
                  <h3 className="text-lg sm:text-base text-zinc-100 font-bold mb-2">
                    {slide.content.title}
                  </h3>
                  <p className="text-base sm:text-sm text-zinc-100">
                    {slide.content.text}
                  </p>
                </div>
              )}
              {slide.type === "kitap" && (
                <div>
                  <h3 className="text-lg sm:text-base text-zinc-100 font-bold mb-2">
                    {slide.content.title}
                  </h3>
                  <Image
                    height={100}
                    width={100}
                    src={slide.content.photo}
                    alt="Book Cover"
                    className="h-[200px] w-auto mt-4 mx-auto"
                  />
                  <p className="mt-4 text-zinc-100 text-base sm:text-sm">
                    {slide.content.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {carouselData.map((_, index) => (
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
