"use client";

import { PropertyHeader } from "@/components/property/property-header";

import { PropertyAmenities } from "@/components/property/property-amenities";
import { PropertyVideo } from "@/components/property/property-video";
import { PropertyLocation } from "@/components/property/property-location";
import { PropertyReviews } from "@/components/property/property-reviews";
import { PropertyBooking } from "@/components/property/property-booking";
import { PropertyHost } from "@/components/property/property-host";
import { PropertyGallery } from "@/components/property/property-gallery";
import properteis from "@/data/detiles.json";
// import properteis from "@/data/properteis.json";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useGetPlaceDetails } from "@/api/property";
import LoadingPage from "@/components/skeletons/loading-page";

export default function PropertyDetailsPage() {
  const { id } = useParams();

  const {
    propertyDetails,
    propertyDetailsLoading,
    propertyDetailsError,
    propertyDetailsValidating,
  } = useGetPlaceDetails({ placeId: id });

  console.log("propertyDetails", propertyDetails);

  const property = properteis.find((property) => property.id === id);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div
      className={`min-h-screen pt-16  ${
        isDarkMode
          ? "bg-[#121212] bg-[url('/assets/images/bg-skyward.png')]"
          : "bg-[#fbf7f6] bg-[url('/assets/images/bg-skyward-1.png')]"
      }`}
    >
      {propertyDetailsLoading && (
        <div className="container mx-auto px-4 py-8">
          <LoadingPage />
        </div>
      )}
      {propertyDetails && (
        <>
          <PropertyGallery images={property?.images} />
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <PropertyHeader property={propertyDetails} />

                <PropertyAmenities amenities={property?.amenities} />
                <PropertyLocation map={property?.map} />
                <PropertyVideo video={property?.video} />
                <PropertyReviews property={property} />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <PropertyBooking property={property} />
                  <PropertyHost host={property?.host} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
