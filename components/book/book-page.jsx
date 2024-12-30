export default function BookPageCard({ pageIndex, content, bookTitle, author }) {
    return (
        <div
            className="h-[960px] p-6 rounded-lg shadow-md relative bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/images/clear-pale-gray-colored-wall.jpg')",
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-white opacity-70 rounded-lg z-0"></div>

            {/* Page number */}
            <div className="absolute bottom-4 right-10 text-sm opacity-40 text-zinc-600 z-10">
                {pageIndex}
            </div>

            {/* Book title */}
            <div className="text-center text-sm text-zinc-900 mb-2 z-10 opacity-70 relative">
                <i>Sözlerin En Güzeli Kur'an</i>
                <span className="block border-t-2 border-zinc-300 mt-1 mb-8 w-1/3 mx-auto"></span>
            </div>

            {/* Section title */}
            <div className="text-center text-xl font-bold mb-2 text-zinc-900 z-10 opacity-70 relative">
                {bookTitle}
            </div>

            {/* Page content */}
            <div className="text-zinc-900 text-sm text-justify mb-6 z-10 relative space-y-4">
                {content.map((paragraph, index) => (
                    <p style={{ textIndent: '2rem' }} key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}
