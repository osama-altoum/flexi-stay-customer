"use client";

import { useState } from "react";
import { ListingHero } from "@/components/listing/listing-hero";
import { ListingFilters } from "@/components/listing/listing-filters";
import { ListingGrid } from "@/components/listing/listing-grid";
import { ListingList } from "@/components/listing/listing-list";
import { ListingViewToggle } from "@/components/listing/listing-view-toggle";
import { ListingPagination } from "@/components/listing/listing-pagination";
import properties from "@/data/properteis.json";
import { useTheme } from "next-themes";

export default function PropertiesPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties.slice(startIndex, endIndex);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-[#121212] bg-[url('/assets/images/bg-top-rate-2.png')]"
          : "bg-[#fbf7f6] bg-[url('/assets/images/bg-top-rated.png')]"
      }`}
    >
      <ListingHero />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <ListingFilters />

          <div className="flex-1 w-full">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {startIndex + 1}-{Math.min(endIndex, properties.length)}{" "}
                of {properties.length} properties
              </p>
              <ListingViewToggle view={view} onViewChange={setView} />
            </div>

            {view === "grid" ? (
              <ListingGrid properties={currentProperties} />
            ) : (
              <ListingList properties={currentProperties} />
            )}

            <ListingPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
