"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Hotel,
  Building,
  Dumbbell,
  Car,
  Wifi,
  Wind,
  DollarSign,
  Star,
  Bed,
} from "lucide-react";

const propertyTypes = [
  { label: "House", icon: Home },
  { label: "Apartment", icon: Building2 },
  { label: "Villa", icon: Hotel },
  { label: "Condo", icon: Building },
];

const amenities = [
  { id: "pool", label: "Swimming Pool", icon: Bed },
  { id: "gym", label: "Gym", icon: Dumbbell },
  { id: "parking", label: "Parking", icon: Car },
  { id: "wifi", label: "WiFi", icon: Wifi },
  { id: "ac", label: "Air Conditioning", icon: Wind },
];

const ratings = [
  { value: 5, label: "5 Stars" },
  { value: 4, label: "4+ Stars" },
  { value: 3, label: "3+ Stars" },
  { value: 2, label: "2+ Stars" },
];

export function ListingFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleTypeToggle = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleAmenityToggle = (amenityId: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityId)
        ? prev.filter((a) => a !== amenityId)
        : [...prev, amenityId]
    );
  };

  const getTotalFilters = () => {
    return (
      selectedTypes.length +
      selectedAmenities.length +
      (selectedRating ? 1 : 0) +
      (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full md:w-80 bg-background rounded-xl border shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">Filters</h2>
          <Badge variant="secondary" className="font-normal">
            {getTotalFilters()} Selected
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Refine your search results
        </p>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["price", "type", "amenities", "rating"]}
        className="px-6 py-4"
      >
        {/* Price Range */}
        <AccordionItem value="price" className="border-none">
          <AccordionTrigger className="hover:no-underline py-3 rounded-lg hover:bg-muted/50">
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span>Price Range</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={1000}
                step={10}
                className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              />
              <div className="flex items-center gap-4">
                <div className="flex-1 space-y-1">
                  <Label>Min Price</Label>
                  <Input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([+e.target.value, priceRange[1]])
                    }
                    className="h-9"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <Label>Max Price</Label>
                  <Input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], +e.target.value])
                    }
                    className="h-9"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Rating */}
        <AccordionItem value="rating" className="border-none">
          <AccordionTrigger className="hover:no-underline py-3 rounded-lg hover:bg-muted/50">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span>Rating</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-3">
              {ratings.map(({ value, label }) => (
                <Button
                  key={value}
                  variant={selectedRating === value ? "default" : "outline"}
                  className="w-full justify-start gap-2"
                  onClick={() =>
                    setSelectedRating(selectedRating === value ? null : value)
                  }
                >
                  <div className="flex items-center gap-1">
                    <Star
                      className={`w-4 h-4 ${
                        selectedRating === value
                          ? "fill-white text-white"
                          : "fill-yellow-400 text-yellow-400"
                      }`}
                    />
                    <span>{label}</span>
                  </div>
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Property Type */}
        <AccordionItem value="type" className="border-none">
          <AccordionTrigger className="hover:no-underline py-3 rounded-lg hover:bg-muted/50">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <span>Property Type</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 gap-3">
              {propertyTypes.map(({ label, icon: Icon }) => (
                <Button
                  key={label}
                  variant={
                    selectedTypes.includes(label) ? "default" : "outline"
                  }
                  className="justify-start gap-2 h-auto py-3"
                  onClick={() => handleTypeToggle(label)}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{label}</span>
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Amenities */}
        <AccordionItem value="amenities" className="border-none">
          <AccordionTrigger className="hover:no-underline py-3 rounded-lg hover:bg-muted/50">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5 text-primary" />
              <span>Amenities</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-4">
              {amenities.map(({ id, label, icon: Icon }) => (
                <div key={id} className="flex items-start space-x-3">
                  <Checkbox
                    id={id}
                    checked={selectedAmenities.includes(id)}
                    onCheckedChange={() => handleAmenityToggle(id)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={id}
                      className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      {label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Footer */}
      <div className="p-6 border-t bg-muted/50">
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              setSelectedTypes([]);
              setSelectedAmenities([]);
              setPriceRange([0, 1000]);
              setSelectedRating(null);
            }}
          >
            Reset All
          </Button>
          <Button className="flex-1">Apply Filters</Button>
        </div>
      </div>
    </motion.div>
  );
}
