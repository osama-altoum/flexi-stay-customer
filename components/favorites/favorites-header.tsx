"use client";

import { motion } from "framer-motion";

export function FavoritesHeader() {
  return (
    <div className="bg-card border-b">
      <div className="container mx-auto px-4">
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl font-bold mb-2">Your Favorites</h1>
            <p className="text-muted-foreground">
              View and manage your saved properties. Get notified when there are
              price changes or updates to your favorite listings.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
