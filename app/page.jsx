import Banner from "@/components/home/banner";
import BannerCarousel from "@/components/home/banner-carousel";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="h-[400px] w-[400px] bg-zinc-500 items-center justify-center">
        <BannerCarousel />
      </div>
    </div>
  );
}
