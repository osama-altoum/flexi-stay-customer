"use client";

import { useGetPlaceDetails } from "@/api/property";
import { getToken } from "@/api/storage";
import { BookingForm } from "@/components/booking/booking-form";
import { OrderSummary } from "@/components/booking/order-summary";
import LoadingBookingPage from "@/components/skeletons/loading-booking-page";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function BookingPage() {
  const token = getToken();
  const { id } = useParams();
  const searchParams = useSearchParams();

  // Extract checkIn and checkOut from query params
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const nights = searchParams.get("nights");
  const totalPrice = searchParams.get("totalPrice");
  const finalPrice = searchParams.get("finalPrice");

  const {
    propertyDetails,
    propertyDetailsLoading,
    propertyDetailsError,
    propertyDetailsValidating,
  } = useGetPlaceDetails({ placeId: id });

  useEffect(() => {
    if (!checkIn || !checkOut || !totalPrice || !finalPrice || !token)
      window.location.href = `/property/${id}`;
  }, [checkIn, checkOut, nights, totalPrice, finalPrice, id, token]);

  return (
    <div className="container mx-auto px-4 py-16">
      {propertyDetailsLoading && (
        <div className="container">
          <LoadingBookingPage />
        </div>
      )}

      {propertyDetails && !propertyDetailsLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm
              property={propertyDetails}
              checkIn={checkIn}
              checkOut={checkOut}
            />
          </div>
          <div className="lg:col-span-1">
            <OrderSummary
              property={propertyDetails}
              nights={nights}
              totalPrice={totalPrice}
              finalPrice={finalPrice}
            />
          </div>
        </div>
      )}
    </div>
  );
}
