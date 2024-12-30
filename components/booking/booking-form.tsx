"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Bed,
  Bath,
  Maximize,
  Star,
  MapPin,
  PenSquare,
} from "lucide-react";

export function BookingForm() {
  return (
    <div className="space-y-8">
      {/* Booking Info */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Your Booking Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Booking date
                </span>
                <PenSquare className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="font-medium">Feb 17 - Feb 25</p>
            </div>
          </div>
          <div className="relative">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Adults</span>
                <PenSquare className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="font-medium">5</p>
            </div>
          </div>
          <div className="relative">
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Children</span>
                <PenSquare className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="font-medium">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Property Card */}
      <Card className="p-6">
        <div className="flex gap-6">
          <div className="w-1/3">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Property"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              RCE Theaters - 907 S Beckford Dr
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>3890 Poplar Dr.</span>
              <div className="flex items-center gap-1 ml-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.5(66)</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span>3 Room</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span>5 Bed</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-muted-foreground" />
                <span>1 Bath</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="h-4 w-4 text-muted-foreground" />
                <span>732 sqft</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Billing Address */}
    </div>
  );
}
