import categories from "@/data/main-categories.json"
import CategoryCard from "./category-card";
import ContentCard from "./content-card";

export default function Banner() {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-800 to-zinc-900 h-[600px] w-full flex justify-center items-center py-24">
        <div className="flex gap-8 justify-center">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              link={category.link}
              name={category.name}
              description={category.description}
              icon={category.icon}
            />
          ))}
          <div className="flex items-center">
            <ContentCard />
          </div>
        </div>
      </div>
    </div>
  )
}
