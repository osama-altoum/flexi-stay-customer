import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import LoadingBooking from "./looading-booking";

export default function BookingDetailsLoadingSkeleton() {
  return (
    <div className="w-screen px-3 md:px-10 xl:px-20 mt-5 md:mt-10 xl:mt-15">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-8">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-6 w-32" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <div className="text-right">
          <Skeleton className="h-6 w-16 ml-auto" />
          <Skeleton className="h-4 w-24 ml-auto mt-2" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-8">
        {["My Bookings", "Reviews", "Settings"].map((tab) => (
          <Skeleton key={tab} className="h-8 w-24" />
        ))}
      </div>

      {/* Booking Card */}
      <LoadingBooking />
    </div>
  );
}
