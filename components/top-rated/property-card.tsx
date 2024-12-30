"use client";

import { Building2, Bed, Bath, Maximize } from "lucide-react";
import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopRatedProperty } from "@/data/top-rated";
import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import { AmenityItem } from "../amenity/amenity-item";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function PropertyCard({
  property,
  index,
}: {
  property: any;
  index: number;
}) {
  const {
    id,
    placeTitle,
    location,
    bathrooms,
    bedrooms,
    beds,
    city,
    country,
    placePrice,

    placeImage,
  } = property;
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-background rounded-3xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={placeImage}
          alt={placeTitle}
          fill
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <button
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white hover:bg-white/50 transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <div className="absolute z-10 shadow-md bottom-4 left-4 bg-white dark:bg-black rounded-full px-3 py-1.5 text-sm flex items-center gap-1.5 ">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">4.8</span>
          <span className="text-gray-500">(324 reviews)</span>
        </div>
      </div>

      <div
        className="py-6 px-6 rounded-xl relative bg-white/90 dark:bg-black/90"
        style={{ marginTop: "-30px" }}
      >
        <h3
          className="text-xl font-bold mb-3 text-black dark:text-white line-clamp-1 group-hover:text-[#363aed] transition-colors cursor-pointer"
          onClick={() => {
            console.log("Navigating to:", `/property/${property.id}`);
            window.location.href = `/property/${property.id}`;
          }}
        >
          {placeTitle}
        </h3>
        <div className="flex items-center gap-2 mb-4 text-gray-500">
          <MapPin className="w-4 h-4" />
          <span>
            {city}, {country}
          </span>
        </div>
        {/* Amenities */}
        <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-gray-200 dark:border-gray-800">
          {[
            { icon: <Building2 />, value: bedrooms, label: "Bedroom" },
            { icon: <Bath />, value: bathrooms, label: "Bathroom" },
            { icon: <Bed />, value: beds, label: "Bed" },
          ].map((amenity, index) => (
            <AmenityItem
              key={index}
              icon={amenity.icon}
              value={amenity.value}
              label={amenity.label}
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">{placePrice}</span>
            <span className="text-gray-500"> / SAR</span>
          </div>
          <Link href={`/property/${id}`}>
            <Button
              className="rounded-full px-6 bg-gray-100 hover:bg-[#363aed] hover:text-white text-gray-900 dark:bg-gray-800 dark:text-white dark:hover:bg-[#363aed]"
              variant="ghost"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
