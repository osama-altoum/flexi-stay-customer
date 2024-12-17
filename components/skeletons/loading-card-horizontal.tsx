import { Card, CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

export default function LoadingCardHorizontal({ index }: { index: number }) {
  return (
    <Card
      key={index}
      className="flex flex-row items-center gap-4 p-4 rounded-lg shadow-md"
    >
      {/* Image Section */}
      <div className="relative w-1/3 min-w-[150px]">
        <Skeleton className="w-full h-[120px] rounded-md" />
        {/* Heart Icon */}
        <div className="absolute top-2 right-2">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="flex-1 space-y-2">
        {/* Title and Reviews */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-1/2" /> {/* Title */}
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-4 rounded-full" /> {/* Star Icon */}
            <Skeleton className="h-4 w-8" /> {/* Review Count */}
          </div>
        </div>

        {/* Location */}
        <Skeleton className="h-4 w-1/4" />

        {/* Features Section */}
        <div className="flex items-center justify-between w-3/4">
          <Skeleton className="h-4 w-16" /> {/* Rooms */}
          <Skeleton className="h-4 w-16" /> {/* Beds */}
          <Skeleton className="h-4 w-16" /> {/* Baths */}
          <Skeleton className="h-4 w-16" /> {/* Sqft */}
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-20" /> {/* Price */}
        </div>
      </CardContent>

      {/* Book Now Button */}
      <CardFooter>
        <Skeleton className="h-10 w-24 rounded-md" />
      </CardFooter>
    </Card>
  );
}
