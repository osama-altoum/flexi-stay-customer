import { OurCategory } from "@/components/category/our-category";
import { HeroSection } from "@/components/hero/hero-section";
import { TopRated } from "@/components/top-rated/top-rated";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <OurCategory />
      <TopRated />
    </div>
  );
}
