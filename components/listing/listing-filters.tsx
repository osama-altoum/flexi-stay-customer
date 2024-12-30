"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  Home,
  Building2,
  DollarSign,
  Search,
  SortAsc,
  RefreshCcw,
} from "lucide-react";

type PropertyType = {
  value: number;
  label: string;
  icon: React.ElementType;
};

const propertyTypes: PropertyType[] = [
  { value: 1, label: "House", icon: Home },
  { value: 2, label: "Apartment", icon: Building2 },
];

const sortOptions = [
  "Price (Low to High)",
  "Price (High to Low)",
  "Rating",
  "Newest Listings",
];

export function ListingFilters({ filters, onChange }: any) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryFilters: any = {};

    const placeType = searchParams.get("placeType");
    if (placeType) queryFilters.placeTypes = [Number(placeType)];

    // const minPrice = searchParams.get("minPrice");
    // if (minPrice) queryFilters.minPrice = Number(minPrice);

    // const maxPrice = searchParams.get("maxPrice");
    // if (maxPrice) queryFilters.maxPrice = Number(maxPrice);

    // const searchTerm = searchParams.get("searchTerm");
    // if (searchTerm) queryFilters.searchTerm = searchTerm;

    // const sort = searchParams.get("sort");
    // if (sort) {
    //   const [sortColumn, sortOrder] = sort.split(",");
    //   queryFilters.sortColumn = sortColumn;
    //   queryFilters.sortOrder = sortOrder;
    // }

    onChange(queryFilters);
  }, [searchParams, onChange]);

  const handleTypeToggle = (type: number) => {
    const updatedTypes = filters.placeTypes.includes(type) ? [] : [type];
    onChange({ placeTypes: updatedTypes });
  };

  const handlePriceChange = (min: number, max: number) => {
    onChange({ minPrice: min, maxPrice: max });
  };

  const handleSearchChange = (query: string) => {
    onChange({ searchTerm: query });
  };

  const handleSortChange = (sortOption: string) => {
    const [column, order] =
      sortOption === "Price (Low to High)"
        ? ["price", "asc"]
        : sortOption === "Price (High to Low)"
        ? ["price", "desc"]
        : sortOption === "Rating"
        ? ["rating", "desc"]
        : ["createdAt", "desc"];

    onChange({ sortColumn: column, sortOrder: order });
  };

  const getTotalFilters = () => {
    return (
      filters.placeTypes.length +
      ((filters.minPrice > 0 && filters.minPrice !== "") ||
      (filters.maxPrice < 1000 && filters.maxPrice !== "")
        ? 1
        : 0) +
      (filters.searchTerm ? 1 : 0)
    );
  };

  const handleReset = () => {
    onChange({
      placeTypes: [],
      minPrice: "",
      maxPrice: "",
      searchTerm: "",
      sortColumn: "",
      sortOrder: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full md:w-1/5 bg-background rounded-xl border shadow-sm overflow-hidden mt-14"
    >
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold">Filters</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1">
                  <Badge
                    variant={
                      getTotalFilters() === 0 ? "secondary" : "destructive"
                    }
                    className="font-normal cursor-pointer"
                  >
                    {getTotalFilters()} Selected
                  </Badge>
                  <RefreshCcw
                    className="w-6 h-6 cursor-pointer hover:bg-gray-300 p-1 rounded-full"
                    onClick={handleReset}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>Reset filters</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-sm text-muted-foreground">
          Refine your search results
        </p>
      </div>

      <div className="px-6 py-4">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-primary" />
          <span>Search</span>
        </div>
        <div className="flex items-center gap-2 mt-2 border border-input rounded-lg px-3 py-2">
          <Input
            id="search"
            type="text"
            placeholder="Search by keyword"
            value={filters.searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="h-9 flex-1 border-none focus-visible:ring-0"
          />
          <Search className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["price", "type"]}
        className="px-6 py-4"
      >
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
                <Input
                  placeholder="Min Price"
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) =>
                    handlePriceChange(+e.target.value, filters.maxPrice)
                  }
                  className="h-9"
                />
                <Input
                  placeholder="Max Price"
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    handlePriceChange(filters.minPrice, +e.target.value)
                  }
                  className="h-9"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="type" className="border-none">
          <AccordionTrigger className="hover:no-underline py-3 rounded-lg hover:bg-muted/50">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <span>Property Type</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="grid grid-cols-2 gap-3">
              {propertyTypes.map(({ value, label, icon: Icon }) => (
                <Button
                  key={value}
                  variant={
                    filters.placeTypes.includes(value) ? "default" : "outline"
                  }
                  className="justify-start gap-2 h-auto py-3"
                  onClick={() => handleTypeToggle(value)}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{label}</span>
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="px-6 py-4">
        <Label htmlFor="sort" className="text-sm font-medium">
          Sort By
        </Label>
        <Select onValueChange={handleSortChange}>
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
    </motion.div>
  );
}
