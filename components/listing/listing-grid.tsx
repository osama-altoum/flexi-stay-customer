import { PropertyCard } from "@/components/top-rated/property-card";
import { TopRatedProperty } from "@/data/top-rated";
import LoadingCard from "../skeletons/loading-card";

interface ListingGridProps {
  properties: any[];
  isLoading: boolean;
}

export function ListingGrid({ properties, isLoading }: ListingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading &&
        Array.from({ length: 9 }).map((_, index) => (
          <LoadingCard key={index} index={index} />
        ))}
      {properties &&
        !isLoading &&
        properties?.map((property, index) => (
          <PropertyCard key={property.id} {...property} index={index} />
        ))}
    </div>
  );
}
