import { HeroSection } from "@/components/hero/hero-section";
import { OurCategory } from "@/components/category/our-category";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <OurCategory />
    </div>
  );
}
