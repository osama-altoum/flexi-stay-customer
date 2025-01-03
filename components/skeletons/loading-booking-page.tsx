import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function LoadingBookingPage() {
  return (
    <div className="w-full mt-16 p-10 space-y-8">
      {/* Top Section - Booking Details */}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Skeleton className="h-6 w-2/3 mb-2" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="col-span-1">
          <Skeleton className="h-6 w-2/3 mb-2" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="col-span-1">
          <Skeleton className="h-6 w-2/3 mb-2" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="col-span-1">
          <Skeleton className="h-6 w-2/3 mb-2" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-4/5" />
            <Skeleton className="h-8 w-1/5" />
          </div>
        </div>
      </div>

      {/* Middle Section - Hotel Details */}
      <div className="flex space-x-6">
        {/* Image Section */}
        <Skeleton className="h-40 w-1/3 rounded-md" />
        {/* Hotel Information */}
        <div className="flex-1 space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
          <div className="grid grid-cols-4 gap-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>

      {/* Bottom Section - Order Summary */}
      <div className="flex space-x-6">
        {/* Promo Code and Details */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-8 w-1/4" />
          </div>
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex justify-between">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            ))}
          </div>
        </div>

        {/* Payable Now and Button */}
        <div className="w-1/3 space-y-4">
          <Skeleton className="h-6 w-1/2 mx-auto" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
    </div>
  );
}
