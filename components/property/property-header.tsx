import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react"; // Import all icons as an object
import { format } from "date-fns";

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
          <h1 className="text-2xl font-bold">{property.title}</h1>
          <div className="flex items-center gap-2">
            <Icons.MapPin className="h-4 w-4" />
            <span className="text-muted-foreground">{property.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="text-indigo-600">ID: {property.id}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icons.Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>
              {property.rating} ({property.reviewsTotal} reviews)
            </span>
          </div>
          <div>
            Published: {format(new Date(property.publishedAt), "MMM d, yyyy")}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 pt-4 border-t">
          {property.features.map(
            (feature: {
              icon: keyof typeof Icons;
              label: string;
              value: string;
            }) => {
              const Icon = Icons[feature.icon] as React.ElementType;
              return (
                <div key={feature.label} className="flex items-center gap-2">
                  {Icon && <Icon className="h-5 w-5 text-indigo-600" />}
                  <span className="font-semibold">{feature.value}</span>
                  <span className="text-muted-foreground">{feature.label}</span>
                </div>
              );
            }
          )}
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
