"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function StatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      viewport={{ once: true }}
      className="relative aspect-square rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 p-8 flex flex-col items-center justify-center text-center"
    >
      <h3 className="text-6xl font-bold mb-2">25+</h3>
      <p className="text-sm mb-4">
        Explore Properties and Invest with Confidence
      </p>
      <ArrowUpRight className="h-8 w-8" />
    </motion.div>
  );
}
