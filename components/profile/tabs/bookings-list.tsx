"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Building2, Bed, Bath, Maximize } from "lucide-react";
import Link from "next/link";
import { useGetPlaceDetails } from "@/api/property";
import LoadingBooking from "@/components/skeletons/looading-booking";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

// Single Booking Card Component
const BookingCard = ({ propertyData, reservation }: any) => {
  if (!propertyData) return null;

  console.log(reservation);

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
                {propertyData.placeTypeEName} : {propertyData.title}
              </h3>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {propertyData.city} , {propertyData.country}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.5 </span> -
                  <span className="text-muted-foreground text-sm">
                    (382 reviews)
                  </span>
                </div>
              </div>
            </div>
            {reservation?.amount && (
              <div className="text-right">
                <div className="text-2xl font-bold">
                  {reservation?.amount}{" "}
                  <span className="text-muted-foreground text-sm">SAR</span>{" "}
                </div>
                <div className="text-sm text-muted-foreground">per night</div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <span>{propertyData.bedrooms} Rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed className="h-4 w-4 text-muted-foreground" />
              <span>{propertyData.beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span>{propertyData.bathrooms} Baths</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <Maximize className="h-4 w-4 text-muted-foreground" />
              <span>{propertyData.amenities.area} sqft</span>
            </div> */}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">
                In :{format(reservation.checkIn, "dd/MM/yyyy")} - Out :{" "}
                {format(reservation.checkOut, "dd/MM/yyyy")}
              </div>
              <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                {propertyData.status}
              </div>
            </div>
            <div className="flex gap-3">
              <Link href={`/property/${propertyData.id}`}>
                <Button variant="outline">View Details</Button>
              </Link>

              <Button>Contact Host</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Individual Property Container
const PropertyContainer = ({ reservation }: any) => {
  const { propertyDetails, propertyDetailsLoading, propertyDetailsError } =
    useGetPlaceDetails({
      placeId: reservation?.placeId,
    });

  if (propertyDetailsLoading) {
    return (
      <div className="p-6">
        <LoadingBooking />
      </div>
    );
  }

  if (propertyDetailsError) {
    return (
      <div className="p-6 text-red-500">
        Error loading property: {propertyDetailsError.message}
      </div>
    );
  }

  return (
    <BookingCard propertyData={propertyDetails} reservation={reservation} />
  );
};

// Main BookingsList Component
export function BookingsList({ reservationsList = [] }) {
  return (
    <div className="space-y-6">
      {reservationsList.map((reservation: any) => (
        <PropertyContainer key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
}
