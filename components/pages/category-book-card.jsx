import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing

export default function BookCard({ book }) {
  const { title, author, page_count, description, category, cover } = book;

  return (
    <Link href={`/kütüphane/${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="flex flex-col sm:flex-row w-full md:w-[600px] lg:w-[550px] mx-auto bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        {/* Cover Image */}
        <div className="w-full sm:w-1/3">
          <img
            src={cover}
            alt={`${title} Cover`}
            className="h-48 sm:h-full w-full object-cover object-top"
          />
        </div>

        {/* Book Details */}
        <div className="w-full sm:w-2/3 p-4 sm:p-6">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
            {title}
          </h2>
          <p className="text-gray-600 mt-2 font-medium text-sm sm:text-base">
            by {author}
          </p>
          <p className="text-sm text-gray-500 mt-4 line-clamp-3 sm:line-clamp-4">
            {description}
          </p>
          <div className="mt-4">
            <span className="inline-block bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded">
              {category}
            </span>
            <span className="ml-2 text-xs sm:text-sm text-gray-500">
              {page_count} pages
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
