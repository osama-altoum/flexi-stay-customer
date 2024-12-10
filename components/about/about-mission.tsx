"use client";

import { motion } from "framer-motion";
import { Home, Users, Shield, Globe } from "lucide-react";

const values = [
  {
    icon: Home,
    title: "Quality First",
    description:
      "We ensure every property meets our high standards of quality and comfort.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Our customers are at the heart of everything we do, driving our innovations.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "We prioritize the safety and security of our users and their data.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Connecting people with properties across the world, breaking boundaries.",
  },
];

export function AboutMission() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
          <p className="text-muted-foreground">
            We&apos;re dedicated to revolutionizing the real estate industry
            through innovation, transparency, and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
