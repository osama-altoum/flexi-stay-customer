"use client";

import { Card } from "@/components/ui/card";

import {
  Building2,
  Bed,
  Bath,
  Maximize,
  Star,
  MapPin,
  PenSquare,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

interface BookingFormProps {
  property: any;
  checkIn: any;
  checkOut: any;
}

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

export function BookingForm({ property, checkIn, checkOut }: BookingFormProps) {
  const { t } = useTranslation();
  // Format dates
  const checkInDate = checkIn
    ? new Date(checkIn).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : null;

  const checkOutDate = checkOut
    ? new Date(checkOut).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : null;
  return (
    <div className="space-y-8">
      {/* Booking Info */}
      <div>
        <h2 className="text-2xl font-bold mb-6">{t("Your Booking Info")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  {t("Booking date")}
                </span>
                <PenSquare className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="font-medium">
                {checkInDate} - {checkOutDate}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  {t("Guests")}
                </span>
                <PenSquare className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="font-medium">{property?.guests}</p>
            </div>
          </div>
          {/* <div className="relative">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Children</span>
                <PenSquare className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="font-medium">0</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Property Card */}
      <Card className="p-6">
        <div className="flex gap-6">
          <div className="w-1/3">
            <Image
              src={property?.images[0].path}
              alt="Property"
              width={220}
              height={192}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              {property.placeTypeId === 1 ? "House" : "Apartment"} :{" "}
              {property.title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span className="text-muted-foreground">
                {property.city} , {property.country}
              </span>
              <div className="flex items-center gap-1 ml-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.5(66)</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  icon: <Building2 />,
                  value: property.bedrooms,
                  label: t("Bedroom"),
                },
                {
                  icon: <Bath />,
                  value: property.bathrooms,
                  label: t("Bathroom"),
                },
                { icon: <Bed />, value: property.beds, label: t("Bed") },
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
        </div>
      </Card>

      {/* Billing Address */}
    </div>
  );
}
