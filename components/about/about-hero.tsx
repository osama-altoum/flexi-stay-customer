"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Real Estate Experience
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            We&apos;re on a mission to make property rental and management
            simpler, more transparent, and accessible to everyone.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
