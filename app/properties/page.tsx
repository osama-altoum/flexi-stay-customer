"use client";

import { useState } from "react";
import { ListingHero } from "@/components/listing/listing-hero";
import { ListingGrid } from "@/components/listing/listing-grid";
import { ListingList } from "@/components/listing/listing-list";
import { ListingViewToggle } from "@/components/listing/listing-view-toggle";
import { ListingPagination } from "@/components/listing/listing-pagination";
import { useTheme } from "next-themes";
import { useGetplaces } from "@/api/property";
import { ListingFilters } from "@/components/listing/listing-filters";

export default function PropertiesPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Correct page size

  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const {
    propertyList = [],
    propertyLoading,
    revalidatePropertyList,
    totalPages, // Ensure the API provides total items
  } = useGetplaces({ page: currentPage, pageSize: itemsPerPage });

  const totalItems = Math.ceil(totalPages / itemsPerPage);

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
                Showing {itemsPerPage} of {totalPages} properties
              </p>
              <ListingViewToggle view={view} onViewChange={setView} />
            </div>

            {view === "grid" ? (
              <ListingGrid
                properties={propertyList}
                isLoading={propertyLoading}
              />
            ) : (
              <ListingList
                properties={propertyList}
                isLoading={propertyLoading}
              />
            )}

            <ListingPagination
              currentPage={currentPage}
              total={totalItems}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
