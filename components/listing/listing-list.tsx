import { Heart, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import LoadingCardHorizontal from "../skeletons/loading-card-horizontal";

interface ListingListProps {
  properties: any[];
  isLoading: boolean;
}

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
              <img
                src={property.image}
                alt={property.title}
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
                <span className="font-medium">{property.rating}</span>
                <span className="text-muted-foreground">
                  ({property.reviews} reviews)
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>

              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                {property.amenities.map((amenity: any) => (
                  <div key={amenity.label} className="text-sm">
                    <span className="font-medium">{amenity.value}</span>{" "}
                    <span className="text-muted-foreground">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-2xl font-bold">${property.price}</span>
                  <span className="text-muted-foreground"> / night</span>
                </div>
                <Button>Book Now</Button>
              </div>
            </div>
          </motion.div>
        ))}
    </div>
  );
}
