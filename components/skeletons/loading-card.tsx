import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

export default function LoadingCard({
  index,
  forListing = true,
}: {
  index: number;
  forListing?: boolean;
}) {
  return (
    <Card
      key={index}
      className="overflow-hidden group h-[450px] w-[350px] rounded-lg shadow-md"
    >
      <CardContent className="p-0 relative">
        {/* Image Skeleton */}
        <AspectRatio ratio={16 / 9}>
          <Skeleton className="w-full h-full" />
        </AspectRatio>

        {/* Heart Icon */}
        {forListing && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-600 hover:bg-white/75 transition-colors rounded-full"
          >
            <Skeleton className="h-6 w-6 rounded-full" />
          </Button>
        )}
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-2 p-4">
        {/* Title and Reviews */}
        <div className="flex items-center justify-between w-full">
          <Skeleton className="h-6 w-3/4" /> {/* Title */}
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-4 rounded-full" /> {/* Star Icon */}
            <Skeleton className="h-4 w-8" /> {/* Review Count */}
          </div>
        </div>

        {/* Location */}
        <Skeleton className="h-4 w-2/3" />

        {/* Features: Rooms, Beds, Baths, Sqft */}
        <div className="flex items-center justify-between w-full mt-2">
          <Skeleton className="h-4 w-12" /> {/* Rooms */}
          <Skeleton className="h-4 w-12" /> {/* Beds */}
          <Skeleton className="h-4 w-12" /> {/* Baths */}
          <Skeleton className="h-4 w-16" /> {/* Sqft */}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between w-full mt-4">
          <Skeleton className="h-5 w-20" /> {/* Price */}
          <Skeleton className="h-8 w-24 rounded-md" /> {/* Book Now Button */}
        </div>
      </CardFooter>
    </Card>
  );
}
