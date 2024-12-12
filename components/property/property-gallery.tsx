"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Grid, Image as ImageIcon } from "lucide-react";

import { ImageLightbox } from "./image-lightbox";
import Image from "next/image";

export function PropertyGallery({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((image) => ({
    src: image,
    width: 3840,
    height: 2560,
    alt: "Property Image",
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Main Image */}
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src={mainImage}
            alt="Property"
            fill
            className=" w-full h-full  object-cover"
          />
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-4 right-4 gap-2"
            onClick={() => {
              setIsOpen(true);
              setCurrentIndex(images.indexOf(mainImage));
            }}
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
              <Image
                src={image}
                alt={`Property ${index + 2}`}
                fill
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        slides={slides}
        currentIndex={currentIndex}
      />
    </div>
  );
}
