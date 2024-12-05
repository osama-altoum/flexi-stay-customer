import { OurCategory } from "@/components/category/our-category";
import { HeroSection } from "@/components/hero/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <OurCategory />
    </div>
  );
}
