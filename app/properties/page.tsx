"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { useGetplaces } from "@/api/property";
import { ListingHero } from "@/components/listing/listing-hero";
import { ListingGrid } from "@/components/listing/listing-grid";
import { ListingList } from "@/components/listing/listing-list";
import { ListingFilters } from "@/components/listing/listing-filters";
import { ListingViewToggle } from "@/components/listing/listing-view-toggle";
import { ListingPagination } from "@/components/listing/listing-pagination";
import { Loader2 } from "lucide-react";

export default function PropertiesPage() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [filters, setFilters] = useState({
    searchTerm: "",
    minPrice: "",
    maxPrice: "",
    placeTypes: [] as string[],
    sortColumn: "",
    sortOrder: "",
  });

  const {
    propertyList = [],
    propertyLoading,
    revalidatePropertyList,
    totalPages,
  } = useGetplaces({
    page: currentPage,
    pageSize: itemsPerPage,
    ...filters,
  });

  const totalItems = Math.ceil(totalPages / itemsPerPage);

  // Reset pagination to page 1 when filters are updated
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Update filters and trigger side effects
  const handleFiltersChange = useCallback((updatedFilters: any) => {
    setFilters((prev) => ({ ...prev, ...updatedFilters }));
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-[#121212] bg-[url('/assets/images/bg-top-rate-2.png')]"
          : "bg-[#fbf7f6] bg-[url('/assets/images/bg-top-rated.png')]"
      }`}
    >
      <ListingHero />

      <div className="mx-10 md:mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <ListingFilters filters={filters} onChange={handleFiltersChange} />
          <div className="flex-1 w-full">
            <div className="flex justify-between items-center mb-6">
              {propertyLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <p className="text-muted-foreground">
                  {propertyList.length
                    ? `Showing page ${currentPage} of ${totalPages} properties`
                    : "No properties found"}
                </p>
              )}
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

            {propertyList.length >= itemsPerPage && (
              <ListingPagination
                currentPage={currentPage}
                total={totalItems}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
