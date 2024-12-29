"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjust the import path as needed
import { SearchIcon } from "lucide-react"; // Example icon, replace if you use a different library

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[500px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Input
          className={`pl-10 transition-all ${
            query ? "shadow-lg focus:ring-0 focus:outline-none" : "border"
          }`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Placeholder as a separate element */}
        {!query && (
          <span
            className={`absolute left-10 top-1/2 transform -translate-y-1/2 text-zinc-400 transition-all duration-300 ease-in-out ${
              isHovered ? "opacity-0 translate-y-1" : "opacity-100 -translate-y-3"
            }`}
          >
            Bir kitap arayın
          </span>
        )}
      </div>
      <div
        className={`absolute inset-y-0 left-0 flex items-center px-3 transition-transform duration-300 ease-in-out ${
          query
            ? "translate-x-[460px] text-blue-800"
            : isHovered
            ? "translate-x-[460px]"
            : "translate-x-0"
        }`}
      >
        <SearchIcon
          className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
            query ? "scale-[2] cursor-pointer -translate-x-2 drop-shadow-xl" : "scale-100"
          }`}
        />
      </div>
    </div>
  );
}
