import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function LoadingPage() {
  return (
    <div className="px-3 md:px-10 xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Main Image Skeleton */}
        <Card className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
          <CardContent className="p-3">
            {/* Skeleton loader for the main image */}
            <Skeleton className="h-96 w-full" />
            {/* Skeleton loader for "View all photos" button */}
            <div className="absolute bottom-4 right-4">
              <Skeleton className="w-32 h-8" />
            </div>
          </CardContent>
        </Card>

        {/* Thumbnail Grid Skeletons */}
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-sm"
            >
              <CardContent className="p-3">
                {/* Skeleton loader for each thumbnail */}
                <Skeleton className="w-full h-72" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Photo Slider Skeleton */}
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-64 w-full" />
            </CardContent>
          </Card>

          {/* Location Skeleton */}
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-1/3 mb-4" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-4 w-3/4 mt-4" />
            </CardContent>
          </Card>

          {/* Overview Skeleton */}
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-1/3 mb-4" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Skeleton className="h-6 w-6" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-2" />
            </CardContent>
          </Card>

          {/* Amenities Skeleton */}
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-1/3 mb-4" />
              <div className="space-y-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} className="h-4 w-1/2" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Pricing Skeleton */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-8 w-1/4" />
                <Skeleton className="h-8 w-1/6" />
              </div>
              <div className="flex space-x-2">
                <Skeleton className="h-10 w-1/2" />
                <Skeleton className="h-10 w-1/3" />
              </div>
              <div className="flex space-x-2">
                <Skeleton className="h-10 w-1/3" />
                <Skeleton className="h-10 w-1/3" />
              </div>
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex justify-between items-center">
                  <Skeleton className="h-4 w-2/5" />
                  <Skeleton className="h-4 w-1/5" />
                </div>
              ))}
              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-2/5" />
                <Skeleton className="h-6 w-1/5" />
              </div>
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-4 w-1/4 mx-auto" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
