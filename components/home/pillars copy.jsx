import pillars from "@/data/pillars.json";
import PillarCard2 from "./pillar-card-copy";

export default function Pillar2() {
  return (
    <div className="p-6 relative">
      <div className="absolute inset-0  via-blue-500/50 to-transparent pointer-events-none"></div>
      <h1 className="text-zinc-900 text-center text-3xl font-bold mb-8 relative z-10">
        Fıkıh Kitaplığında İslam'ın Temel Şartlarını Öğrenin
      </h1>
      <div className="flex flex-wrap justify-center gap-6 relative z-10">
        {pillars.slice(0, 3).map((pillar, index) => (
          <PillarCard2
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
