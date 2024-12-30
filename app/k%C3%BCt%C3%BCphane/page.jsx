"use client";

import React, { useState, useEffect } from "react";
import CategoryBanner from "@/components/pages/category-banner";
import BookCard from "@/components/pages/category-book-card";
import bookdata from "@/data/book-data.json";

export default function Kütüphane() {
  const [showContent, setShowContent] = useState(false);

  const categoryData = {
    bgImage: "/assets/images/alhambra.webp",
    icon: "/assets/icons/quran.svg",
    name: "Kur'an-ı Kerim",
    description1:
      "Biz, sana vahyettiğimiz bu Kur’an ile kıssaların en güzelini anlatıyoruz.",
    description2: "Oysa sen daha önce bunları hiç bilmezdin.",
  };

  useEffect(() => {
    // Trigger content visibility after the banner animation ends
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Matches the banner animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Banner Section */}
      <CategoryBanner
        bgImage={categoryData.bgImage}
        icon={categoryData.icon}
        name={categoryData.name}
        description1={categoryData.description1}
        description2={categoryData.description2}
      />

      {/* Books List with Transition */}
      <div
        className={`mt-10 max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {bookdata.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
