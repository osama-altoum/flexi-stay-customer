"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Home, Building2, DollarSign, Search, SortAsc } from "lucide-react";

const propertyTypes = [
  { label: "House", icon: Home },
  { label: "Apartment", icon: Building2 },
];

const sortOptions = [
  "Price (Low to High)",
  "Price (High to Low)",
  "Rating",
  "Newest Listings",
];

export function ListingFilters({ filters }: any) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<string | null>(null);

  const handleTypeToggle = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const getTotalFilters = () => {
    return (
      selectedTypes.length +
      (priceRange[0] > 0 || priceRange[1] < 1000 ? 1 : 0) +
      (searchQuery ? 1 : 0)
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

      {/* Search Input */}
      <div className="px-6 py-4">
        <Label htmlFor="search" className="text-sm font-medium">
          Search
        </Label>
        <div className="flex items-center gap-2 mt-2 border border-input rounded-lg px-3 py-2">
          <Input
            id="search"
            type="text"
            placeholder="Search by keyword"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 flex-1 border-none focus:border-none focus-visible:border-none focus-visible:ring-0"
          />
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Filter Categories */}
      <Accordion
        type="multiple"
        defaultValue={["price", "type"]}
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

        {/* Sort Options */}
        <div className="px-6 py-4">
          <Label htmlFor="sort" className="text-sm font-medium">
            Sort By
          </Label>
          <Select onValueChange={(value) => setSortOption(value)}>
            <SelectTrigger id="sort" className="w-full mt-2">
              <SortAsc className="w-5 h-5 text-muted-foreground mr-2" />
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Accordion>
    </motion.div>
  );
}
