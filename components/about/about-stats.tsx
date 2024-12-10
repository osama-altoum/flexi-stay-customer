"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Properties Listed" },
  { value: "50K+", label: "Happy Customers" },
  { value: "99%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Customer Support" },
];

export function AboutStats() {
  return (
    <section className="py-24 bg-[#363aed]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
