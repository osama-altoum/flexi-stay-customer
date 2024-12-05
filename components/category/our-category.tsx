"use client";

import {
  Building2,
  Home,
  Users,
  Building,
  Factory,
  Store,
  Landmark,
} from "lucide-react";
import { CategoryCard } from "./category-card";
import { StatsCard } from "./stats-card";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const categories = [
  {
    title: "Apartments",
    description: "An apartment is a self-contained housing unit that",
    icon: (
      <Building2 className="h-10 w-8 text-[#363aed] group-hover:!text-white" />
    ),
  },
  {
    title: "House",
    description: "A house is a standalone building that is designed for",
    icon: <Home className="h-12 w-12 text-[#23814b] group-hover:!text-white" />,
  },
  {
    title: "Family",
    description: "A family house is a type of residential building that is",
    icon: (
      <Users className="h-12 w-12 text-[#9c742c] group-hover:!text-white " />
    ),
  },
  {
    title: "Residential",
    description: "Residential refers to buildings or areas that are designed",
    icon: (
      <Building className="h-12 w-12 text-[#171717] group-hover:!text-white" />
    ),
  },
  {
    title: "Industrial",
    description: 'There is no such thing as an "industrial home". Industrial',
    icon: (
      <Factory className="h-12 w-12 text-[#363aed] group-hover:!text-white" />
    ),
  },
  {
    title: "Commercial",
    description: "Commercial refers to activities, buildings, or areas",
    icon: (
      <Store className="h-12 w-12 text-[#23814b] group-hover:!text-white" />
    ),
  },
  {
    title: "Villas",
    description:
      "A villa is a type of large, luxurious house that is typically",
    icon: (
      <Landmark className="h-12 w-12  text-[#9c742c]  group-hover:!text-white" />
    ),
  },
];

export function OurCategory() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <section
      className={`py-24 ${
        isDarkMode
          ? "bg-[#121212] bg-[url('/assets/images/bg-top-rate-2.png')]"
          : "bg-[#fbf7f6] bg-[url('/assets/images/bg-top-rated.png')]"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground">
            Find your perfect property from our wide range of categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} index={index} {...category} />
          ))}
          {/* <StatsCard /> */}
        </div>
      </div>
    </section>
  );
}
