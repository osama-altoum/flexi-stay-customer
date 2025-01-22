import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingBooking() {
  return Array.from({ length: 3 }).map((_, index) => (
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
  ));
}
