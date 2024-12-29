import categories from "@/data/main-categories.json"
import CategoryCard from "./category-card";
import ContentCard from "./content-card";
import SearchBox from "./search-bar";

export default function Banner() {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-br from-blue-800 to-zinc-900 h-[600px] w-full flex justify-center items-center py-24 shadow-[0_10px_20px_0px_rgba(0,0,0,0.7)] rounded-b-[50px]">
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-8">{categories.map((category, index) => (
              <CategoryCard
                key={index}
                link={category.link}
                name={category.name}
                description={category.description}
                icon={category.icon}
              />
            ))}
            </div>
            <SearchBox />
            </div>
          <div className="flex items-center">
            <ContentCard />
          </div>
        </div>
      </div>
    </div>
  )
}
