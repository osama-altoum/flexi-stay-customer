"use client";

import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";

type Amenity = {
  eName: string;
  aName: string;
  type: string;
};

const iconMapping: any = {
  Wifi: "Wifi",
  TV: "Monitor",
  Kitchen: "Utensils",
  Washer: "WashingMachine",
  "Free parking on premises": "ParkingCircleFree",
  "Paid parking on premises": "ParkingCircle",
  "Air conditioning": "AirVent",
  "Dedicated workspace": "Laptop",
  Pool: "Pool",
  "Hot tub": "HotTub",
  Patio: "Patio",
  "BBQ grill": "Grill",
  "Outdoor dining area": "UtensilsCrossed",
  "Fire pit": "Fire",
  "Pool table": "Table",
  "Indoor fireplace": "Fireplace",
  Piano: "Piano",
  "Exercise equipment": "Dumbbell",
  "Lake access": "Water",
  "Beach access": "Beach",
  "Ski-in/Ski-out": "Snowflake",
  "Outdoor shower": "Shower",
  "Smoke alarm": "Alarm",
  "First aid kit": "Aid",
  "Fire extinguisher": "Sprinkler",
  "Carbon monoxide alarm": "AlarmPlus",
};

export function PropertyAmenities({ amenities }: { amenities: Amenity[] }) {
  return (
    <div className="bg-card rounded-lg border p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities?.map(({ eName }) => {
          const IconName = iconMapping[eName] as keyof typeof Icons;
          const Icon: any = Icons[IconName];

          return (
            <div
              key={eName}
              className="flex items-center gap-2 text-muted-foreground"
            >
              {Icon && <Icon className="h-5 w-5 text-indigo-600" />}
              <span>{eName}</span>
            </div>
          );
        })}
      </div>
      {/* <Button variant="outline" className="mt-4 text-indigo-600">
        Read More
      </Button> */}
    </div>
  );
}
