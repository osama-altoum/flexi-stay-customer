"use client";

import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopRatedProperty } from "@/data/top-rated";
import { motion } from "framer-motion";

interface PropertyCardProps extends TopRatedProperty {
  index: number;
}

export function PropertyCard({
  title,
  location,
  price,
  rating,
  reviews,
  image,
  index,
}: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-background rounded-3xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <button
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white hover:bg-white/90 transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <div className="absolute z-10 shadow-md bottom-4 left-4 bg-white dark:bg-black rounded-full px-3 py-1.5 text-sm flex items-center gap-1.5 ">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating}</span>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>
      </div>

      <div
        className="py-10 px-6 rounded-xl  relative bg-white/90 dark:bg-black/90"
        style={{ marginTop: "-30px" }}
      >
        <h3 className="text-xl font-bold mb-3 text-black dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-6 text-gray-500">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-gray-500"> / person</span>
          </div>
          <Button
            className="rounded-full px-6 bg-gray-100 hover:bg-gray-200 text-gray-900"
            variant="ghost"
          >
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
