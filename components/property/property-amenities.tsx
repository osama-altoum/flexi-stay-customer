"use client";

import { Button } from "@/components/ui/button";

import * as Icons from "lucide-react";

export function PropertyAmenities({ amenities }: any) {
  return (
    <div className="bg-card rounded-lg border p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map(
          ({ icon, label }: { icon: keyof typeof Icons; label: string }) => {
            const Icon = Icons[icon] as React.ElementType;

            return (
              <div
                key={label}
                className="flex items-center gap-2 text-muted-foreground"
              >
                {Icon && <Icon className="h-5 w-5 text-indigo-600" />}
                <span>{label}</span>
              </div>
            );
          }
        )}
      </div>
      <Button variant="outline" className="mt-4 text-indigo-600">
        Read More
      </Button>
    </div>
  );
}
