import { Building2, Bed, Bath, Maximize } from "lucide-react";
import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import LoadingCardHorizontal from "../skeletons/loading-card-horizontal";
import Image from "next/image";
import React from "react";

interface ListingListProps {
  properties: any[];
  isLoading: boolean;
}

const AmenityItem = ({ icon, value, label }: any) => (
  <div className="flex  flex-col gap-1 items-center justify-center text-center">
    {React.cloneElement(icon, {
      className: "w-5 h-5 mb-1 text-gray-600 dark:text-gray-400",
    })}

    <div className="text-sm">
      <span className="font-semibold text-gray-900 dark:text-gray-100">
        {value}
      </span>{" "}
      <span className="text-gray-500">{label}</span>
    </div>
  </div>
);

export function ListingList({ properties, isLoading }: ListingListProps) {
  return (
    <div className="space-y-6">
      {isLoading &&
        Array.from({ length: 9 }).map((_, index) => (
          <LoadingCardHorizontal key={index} index={index} />
        ))}
      {properties &&
        !isLoading &&
        properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 bg-background rounded-lg border p-4"
          >
            {/* Image */}
            <div className="relative w-full md:w-72 h-48">
              <Image
                src={property.placeImage}
                alt={property.placeTitle}
                fill
                className="w-full h-full object-cover rounded-lg"
              />
              <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.8</span>
                <span className="text-muted-foreground">(324 reviews)</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {property.placeTitle}
              </h3>

              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>
                  {property.city} , {property.country}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                {[
                  {
                    icon: <Building2 />,
                    value: property.bedrooms,
                    label: "Bedroom",
                  },
                  {
                    icon: <Bath />,
                    value: property.bathrooms,
                    label: "Bathroom",
                  },
                  { icon: <Bed />, value: property.beds, label: "Bed" },
                ].map((amenity, index) => (
                  <AmenityItem
                    key={index}
                    icon={amenity.icon}
                    value={amenity.value}
                    label={amenity.label}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-2xl font-bold">
                    {property.placePrice}
                  </span>
                  <span className="text-muted-foreground"> / SAR</span>
                </div>
                <Button>Book Now</Button>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );
}
