"use client";

import { Button } from "@/components/ui/button";
import {
  Wind,
  Wifi,
  Globe,
  Clock,
  Shirt,
  Car,
  Dog,
  Blinds,
  Dumbbell,
  Flame,
  Hotel,
} from "lucide-react";

const amenities = [
  { icon: Wind, label: "Air Condition" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Globe, label: "Internet" },
  { icon: Clock, label: "Alarm" },
  { icon: Shirt, label: "Laundry Room" },
  { icon: Flame, label: "Flame" },
  { icon: Car, label: "Car Parking" },
  { icon: Dog, label: "Pets Allow" },
  { icon: Blinds, label: "Window Cover" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Flame, label: "Heating" },
  { icon: Dumbbell, label: "Dumbbell Massage" },
];

export function PropertyAmenities() {
  return (
    <div className="bg-card rounded-lg border p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <Icon className="h-5 w-5 text-indigo-600" />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <Button variant="outline" className="mt-4 text-indigo-600">
        Read More
      </Button>
    </div>
  );
}
