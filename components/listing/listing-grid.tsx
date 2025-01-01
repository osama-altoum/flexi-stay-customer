"use client";
import { PropertyCard } from "@/components/top-rated/property-card";
import { TopRatedProperty } from "@/data/top-rated";
import LoadingCard from "../skeletons/loading-card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ListingGridProps {
  properties: any[];
  isLoading: boolean;
}

export function ListingGrid({ properties, isLoading }: ListingGridProps) {
  const router = useRouter();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {isLoading &&
          Array.from({ length: 9 }).map((_, index) => (
            <LoadingCard key={index} index={index} />
          ))}
        {properties &&
          !isLoading &&
          properties?.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
      </div>
      {!isLoading && !properties?.length && (
        <div className=" relative mx-auto  flex flex-col items-center justify-center ">
          <div className="flex  items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src="/assets/images/no-data.svg"
              alt="No properties"
              fill
              className="object-contain "
            />
          </div>
          <div className="">
            <h2 className="text-2xl md:text-4xl font-semibold italic text-[#3639ed92] animate-fade-in ">
              NO DATA
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
