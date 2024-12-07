"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Building2, Bed, Bath, Maximize } from "lucide-react";
import Link from "next/link";

const bookings = [
  {
    id: 1,
    title: "Luxury Apartment in Downtown",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    location: "Manhattan, NY",
    rating: 4.8,
    reviews: 24,
    price: 299,
    checkIn: "Mar 15, 2024",
    checkOut: "Mar 20, 2024",
    status: "upcoming",
    amenities: {
      rooms: 3,
      beds: 2,
      baths: 2,
      area: 1200,
    },
  },
  // Add more bookings...
];

export function BookingsList() {
  return (
    <div className="space-y-6">
      {bookings.map((booking) => (
        <Card key={booking.id} className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <img
                src={booking.image}
                alt={booking.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {booking.title}
                  </h3>
                  <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{booking.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>
                        {booking.rating} ({booking.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">${booking.price}</div>
                  <div className="text-sm text-muted-foreground">per night</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <span>{booking.amenities.rooms} Rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="h-4 w-4 text-muted-foreground" />
                  <span>{booking.amenities.beds} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-4 w-4 text-muted-foreground" />
                  <span>{booking.amenities.baths} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-4 w-4 text-muted-foreground" />
                  <span>{booking.amenities.area} sqft</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">
                    {booking.checkIn} - {booking.checkOut}
                  </div>
                  <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                    {booking.status}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">View Details</Button>
                  <Link href="/messages">
                    <Button>Contact Host</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
