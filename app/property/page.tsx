"use client";

import { PropertyHeader } from "@/components/property/property-header";
import { PropertyInfo } from "@/components/property/property-info";
import { PropertyAmenities } from "@/components/property/property-amenities";
import { PropertyVideo } from "@/components/property/property-video";
import { PropertyLocation } from "@/components/property/property-location";
import { PropertyReviews } from "@/components/property/property-reviews";
import { PropertyBooking } from "@/components/property/property-booking";
import { PropertyHost } from "@/components/property/property-host";
import { PropertyGallery } from "@/components/property/property-gallery";

export default function PropertyDetailsPage() {
  return (
    <div className="min-h-screen pt-16 bg-muted/50 dark:bg-muted/10 ">
      <PropertyGallery />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <PropertyHeader />
            <PropertyInfo />
            <PropertyAmenities />
            <PropertyVideo />
            <PropertyLocation />
            <PropertyReviews />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <PropertyBooking />
              <PropertyHost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
