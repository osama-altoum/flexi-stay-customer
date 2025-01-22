import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

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
      {Array.from({ length: 3 }).map((_, index) => (
        <Card className="mb-8" key={index}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Property Image */}
              <Skeleton className="h-64 w-full md:w-96 rounded-lg" />

              {/* Property Details */}
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <Skeleton className="h-8 w-64" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-4 w-32 mt-2" />
                  </div>
                </div>

                {/* Property Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  ))}
                </div>

                {/* Booking Dates */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-24" />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-end">
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
