"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Building2, Bed, Bath, Maximize } from "lucide-react";
import Link from "next/link";
import { useGetPlaceDetails } from "@/api/property";

// Single Booking Card Component
const BookingCard = ({ propertyData }: any) => {
  if (!propertyData) return null;

  console.log(propertyData);

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={propertyData.images[0].path}
            alt={propertyData.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {propertyData.title}
              </h3>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{propertyData.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>
                    {propertyData.rating} ({propertyData.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">${propertyData.price}</div>
              <div className="text-sm text-muted-foreground">per night</div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span>{propertyData.amenities.rooms} Rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4 text-muted-foreground" />
              <span>{propertyData.amenities.beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span>{propertyData.amenities.baths} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="h-4 w-4 text-muted-foreground" />
              <span>{propertyData.amenities.area} sqft</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">
                {propertyData.checkIn} - {propertyData.checkOut}
              </div>
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                {propertyData.status}
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">View Details</Button>
              <Link href="/messages">
                <Button>Contact Host</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Individual Property Container
const PropertyContainer = ({ propertyId }: any) => {
  const { propertyDetails, propertyDetailsLoading, propertyDetailsError } =
    useGetPlaceDetails({
      placeId: propertyId,
    });

  if (propertyDetailsLoading) {
    return <div className="p-6">Loading property details...</div>;
  }

  if (propertyDetailsError) {
    return (
      <div className="p-6 text-red-500">
        Error loading property: {propertyDetailsError.message}
      </div>
    );
  }

  return <BookingCard propertyData={propertyDetails} />;
};

// Main BookingsList Component
export function BookingsList({ propertyIds = [] }) {
  return (
    <div className="space-y-6">
      {propertyIds.map((propertyId) => (
        <PropertyContainer key={propertyId} propertyId={propertyId} />
      ))}
    </div>
  );
}
