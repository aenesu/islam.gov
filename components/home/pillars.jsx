import pillars from "@/data/pillars.json"
import PillarCard from './pillar-card';

export default function Pillars() {
  return (
    <div className="p-6">
      <h1 className="text-zinc-900 text-center text-3xl font-bold mb-8">
        Fıkıh Kitaplığında İslam'ın Temel Şartlarını Öğrenin
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {pillars.map((pillar, index) => (
          <PillarCard
            key={index}
            icon={pillar.icon}
            name={pillar.name}
            description={pillar.description || "Bu ibadetin detaylarını öğrenin."}
          />
        ))}
      </div>
    </div>
  );
}
