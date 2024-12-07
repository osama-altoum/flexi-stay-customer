"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import { useState } from "react";

export function PropertyBooking() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <div className="bg-card rounded-lg border p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Price</h2>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">$399</span>
          <span className="text-muted-foreground">From</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
          Booking Form
        </Button>
        <Button variant="outline" className="flex-1">
          Enquiry Form
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Check In - Check Out</label>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PP") : "Check in"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PP") : "Check out"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Guests</label>
          <Button variant="outline" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            <span>1 Guests</span>
          </Button>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div className="flex justify-between">
            <span>$119 × 4 night</span>
            <span>$1015</span>
          </div>
          <div className="flex justify-between">
            <span>Service charge</span>
            <span>$10</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>$1025</span>
          </div>
        </div>

        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
          Proceed Booking
        </Button>

        <div className="flex items-center justify-center gap-4 text-sm">
          <Button variant="link" className="h-auto p-0 text-indigo-600">
            Save To Wish List
          </Button>
          <span>•</span>
          <Button variant="link" className="h-auto p-0 text-indigo-600">
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
}
