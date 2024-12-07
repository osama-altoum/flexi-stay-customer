"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Grid, Image as ImageIcon } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
];

export function PropertyGallery() {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Main Image */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src={mainImage}
            alt="Property"
            className="w-full h-full object-cover"
          />
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-4 right-4 gap-2"
          >
            <ImageIcon className="h-4 w-4" />
            <span>View all photos</span>
          </Button>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setMainImage(image)}
            >
              <img
                src={image}
                alt={`Property ${index + 2}`}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
