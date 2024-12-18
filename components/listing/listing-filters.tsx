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
import { Home, Building2, DollarSign } from "lucide-react";

const propertyTypes = [
  { label: "House", icon: Home },
  { label: "Apartment", icon: Building2 },
];

export function ListingFilters({ filters }: any) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleTypeToggle = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
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
      </Accordion>
    </motion.div>
  );
}
