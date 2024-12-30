import categories from "@/data/main-categories.json";
import CategoryCard from "./category-card";
import ContentCard from "./content-card";
import SearchBox from "./search-bar";

export default function Banner() {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-br from-blue-800 to-zinc-900 h-auto w-full flex justify-center items-center py-12 shadow-[0_10px_20px_0px_rgba(0,0,0,0.7)] rounded-b-[50px]">
        <div className="flex flex-col gap-12 w-full px-4 md:px-12 lg:px-32 py-6">
          {/* Search Box */}
          <div className="flex justify-center mb-6">
            <SearchBox />
          </div>

          {/* Categories and Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center">
            {/* Cards */}
            {categories.map((category, index) => (
              <div
                key={index}
                className="transform scale-100 sm:scale-90 md:scale-90 lg:scale-100 transition duration-300"
              >
                <CategoryCard
                  link={category.link}
                  name={category.name}
                  description={category.description}
                  icon={category.icon}
                />
              </div>
            ))}

            {/* Content Card */}
            <div className="transform scale-100 sm:scale-90 md:scale-90 lg:scale-100 transition duration-300">
              <ContentCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
