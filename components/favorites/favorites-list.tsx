"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PropertyCard } from "@/components/top-rated/property-card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Dummy data for favorites
const initialFavorites = [
  {
    id: "1",
    title: "Luxury Apartment with Ocean View",
    location: "Miami Beach, FL",
    price: 2500,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    amenities: [
      { icon: "Building2", label: "Rooms", value: "3" },
      { icon: "Bed", label: "Beds", value: "2" },
      { icon: "Bath", label: "Baths", value: "2" },
      { icon: "Maximize", label: "sqft", value: "1200" },
    ],
  },
  {
    id: "2",
    title: "Modern Downtown Loft",
    location: "New York, NY",
    price: 3200,
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    amenities: [
      { icon: "Building2", label: "Rooms", value: "2" },
      { icon: "Bed", label: "Beds", value: "1" },
      { icon: "Bath", label: "Baths", value: "1" },
      { icon: "Maximize", label: "sqft", value: "850" },
    ],
  },
  // Add more properties as needed
];

export function FavoritesList() {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [showClearDialog, setShowClearDialog] = useState(false);

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    setShowClearDialog(false);
  };

  if (favorites.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
          <p className="text-muted-foreground mb-6">
            Start exploring and save properties you like to see them here.
          </p>
          <Button>Explore Properties</Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          {favorites.length} saved{" "}
          {favorites.length === 1 ? "property" : "properties"}
        </p>
        <Button
          variant="destructive"
          size="sm"
          className="gap-2"
          onClick={() => setShowClearDialog(true)}
        >
          <Trash2 className="h-4 w-4" />
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PropertyCard
              property={property}
              index={index}
              // onRemove={() => removeFromFavorites(property.id)}
            />
          </motion.div>
        ))}
      </div>

      <AlertDialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Clear all favorites?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove all
              properties from your favorites list.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={clearAllFavorites}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Clear All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
