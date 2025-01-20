import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react"; // Import all icons as an object
import { format } from "date-fns";

import { Building2, Bed, Bath, Maximize } from "lucide-react";

const AmenityItem = ({ icon, value, label }: any) => (
  <div className="flex   gap-1 items-center justify-center text-center">
    {React.cloneElement(icon, {
      className: "h-5 w-5 text-indigo-600",
    })}

    <div className="">
      <span className="font-semibold">{value}</span>{" "}
      <span className="text-muted-foreground">{label}</span>
    </div>
  </div>
);

export function PropertyHeader({ property }: any) {
  return (
    <>
      <div className="bg-card rounded-lg border p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Badge className="bg-indigo-600 hover:bg-indigo-700">For Rent</Badge>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Icons.Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icons.Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icons.Instagram className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Icons.Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            {property.placeTypeId === 2 ? "House" : "Apartment"} :{" "}
            {property.title}
          </h1>
          <div className="flex items-center gap-2">
            <Icons.MapPin className="h-4 w-4" />
            <span className="text-muted-foreground">
              {property.city} , {property.country}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="text-indigo-600">
              Apartment No: {property.apartmentNo} |
            </span>
            <span className="text-indigo-600">Floor No: {property.floor}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icons.BookUserIcon className="h-4 w-4" />
            <span className="text-muted-foreground">
              {property.street} , {property.shortAddress}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-between text-sm text-muted-foreground pt-4 border-t">
          <div className="flex items-center gap-1">
            <Icons.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>4.8 (2341) reviews</span>
          </div>
          <div>
            Published:
            {property?.createdAt
              ? format(new Date(property.createdAt), "MMM d, yyyy")
              : "Unknown date"}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 pt-4 border-t">
          {[
            { icon: <Building2 />, value: property.bedrooms, label: "Bedroom" },
            { icon: <Bath />, value: property.bathrooms, label: "Bathroom" },
            { icon: <Bed />, value: property.beds, label: "Bed" },
          ].map((amenity, index) => (
            <AmenityItem
              key={index}
              icon={amenity.icon}
              value={amenity.value}
              label={amenity.label}
            />
          ))}
        </div>
      </div>
      <div className="bg-card rounded-lg border p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-muted-foreground">{property.description}</p>
        <Button variant="link" className="p-0 h-auto text-indigo-600">
          Read More <Icons.ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
