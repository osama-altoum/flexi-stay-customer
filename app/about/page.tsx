"use client";

import { AboutHero } from "@/components/about/about-hero";
import { AboutMission } from "@/components/about/about-mission";
import { AboutTeam } from "@/components/about/about-team";
import { AboutStats } from "@/components/about/about-stats";
import { AboutTestimonials } from "@/components/about/about-testimonials";

export default function AboutPage() {
  // gg
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutStats />
      <AboutTeam />
      <AboutTestimonials />
    </div>
  );
}
