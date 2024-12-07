"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PropertyLocation() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Location</h2>
        <Button variant="outline" className="gap-2">
          Get Directions <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=California&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        />
      </div>
    </div>
  );
}
