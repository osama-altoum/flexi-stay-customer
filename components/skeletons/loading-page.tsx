import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function LoadingPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-8 w-3/5" />
        <Skeleton className="h-10 w-28" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Photo Slider Skeleton */}
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-64 w-full" />
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

          {/* Location Skeleton */}
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-1/3 mb-4" />
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-4 w-3/4 mt-4" />
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
            <CardContent className="p-6">
              <Skeleton className="h-6 w-1/3 mb-4" />
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex justify-between items-center">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Status Skeleton */}
          <Card>
            <CardContent className="p-6">
              <Skeleton className="h-6 w-1/3 mb-4" />
              {Array.from({ length: 2 }).map((_, index) => (
                <Skeleton key={index} className="h-6 w-1/2 mb-2" />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
