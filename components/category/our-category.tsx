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

const categories = [
  {
    title: "Apartments",
    description: "An apartment is a self-contained housing unit that",
    icon: <Building2 className="h-8 w-8" />,
    className:
      "bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600",
  },
  {
    title: "House",
    description: "A house is a standalone building that is designed for",
    icon: <Home className="h-8 w-8" />,
  },
  {
    title: "Family",
    description: "A family house is a type of residential building that is",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "Residential",
    description: "Residential refers to buildings or areas that are designed",
    icon: <Building className="h-8 w-8" />,
  },
  {
    title: "Industrial",
    description: 'There is no such thing as an "industrial home". Industrial',
    icon: <Factory className="h-8 w-8" />,
  },
  {
    title: "Commercial",
    description: "Commercial refers to activities, buildings, or areas",
    icon: <Store className="h-8 w-8" />,
  },
  {
    title: "Villas",
    description:
      "A villa is a type of large, luxurious house that is typically",
    icon: <Landmark className="h-8 w-8" />,
  },
];

export function OurCategory() {
  return (
    <section className="py-24 bg-muted/30">
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
          <StatsCard />
        </div>
      </div>
    </section>
  );
}
