import { PropertyCard } from "@/components/top-rated/property-card";
import { TopRatedProperty } from "@/data/top-rated";

interface ListingGridProps {
  properties: any[];
}

export function ListingGrid({ properties }: ListingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <PropertyCard key={property.id} {...property} index={index} />
      ))}
    </div>
  );
}
