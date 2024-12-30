"use client";

import BookPageCard from "@/components/book/book-page";
import { useState, useEffect } from "react";
import bookContent from "@/data/books/kur'an.json"; // Adjust the path based on your file structure

export default function Read() {
    const [loadedPages, setLoadedPages] = useState([]);
    const [pageCount, setPageCount] = useState(3);

    useEffect(() => {
        // Initialize the pages to display
        setLoadedPages(bookContent.slice(0, pageCount));
    }, [pageCount]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 200
        ) {
            // Load additional pages as user scrolls
            setPageCount((prev) => Math.min(prev + 3, bookContent.length));
        }
    };

    useEffect(() => {
        // Add and clean up scroll event listener
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="relative bg-cover bg-center min-h-screen px-4 py-8"
            style={{ backgroundImage: "url('/path-to-your-paper-texture.jpg')" }}
        >
            <div className="max-w-3xl mx-auto space-y-6">
                {loadedPages.map((page, index) => (
                    <BookPageCard
                        key={index}
                        pageIndex={index + 1}
                        content={page.paragraphs} // Passing paragraphs as an array
                        bookTitle={page.title} // Using the title from the JSON
                        author="İlahiyat Ekibi" // Adjust the author dynamically if needed
                    />
                ))}
            </div>
        </div>
    );
}
