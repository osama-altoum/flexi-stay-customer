"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Calendar as CalendarIcon, Users, Search } from "lucide-react";
import { format } from "date-fns";

export function SearchForm() {
  const [location, setLocation] = useState("Dubai, UAE");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2 adults, 2 children");

  return (
    <div className="flex flex-col md:flex-row gap-4 px-4 py-6 bg-white rounded-lg shadow-lg">
      {/* Location */}
      <div className="flex-1">
        <label className="block text-xs text-gray-700 mb-1">Location</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <MapPin className="mr-2 h-4 w-4" />
              <span>{location}</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setLocation("Dubai, UAE")}
              >
                Dubai, UAE
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setLocation("Abu Dhabi, UAE")}
              >
                Abu Dhabi, UAE
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setLocation("Makkah, Saudi Arabia")}
              >
                Makkah, Saudi Arabia
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="hidden md:block w-px bg-gray-300 mx-4" />

      {/* Check In */}
      <div className="flex-1">
        <label className="block text-xs text-gray-700 mb-1">Check In</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkIn ? format(checkIn, "MM/dd/yyyy") : "Check In"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="hidden md:block w-px bg-gray-300 mx-4" />

      {/* Check Out */}
      <div className="flex-1">
        <label className="block text-xs text-gray-700 mb-1">Check Out</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkOut ? format(checkOut, "MM/dd/yyyy") : "Check Out"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="hidden md:block w-px bg-gray-300 mx-4" />

      {/* Guests */}
      <div className="flex-1">
        <label className="block text-xs text-gray-700 mb-1">Guests</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start font-normal"
            >
              <Users className="mr-2 h-4 w-4" />
              {guests}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <div className="space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setGuests("2 adults, 2 children")}
              >
                2 adults, 2 children
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setGuests("2 adults")}
              >
                2 adults
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setGuests("1 adult")}
              >
                1 adult
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="hidden md:block w-px bg-gray-300 mx-4" />

      {/* Search Button */}
      <div className="flex-1 md:flex-none">
        <label className="block text-xs text-gray-700 mb-1">&nbsp;</label>
        <Button className="w-full bg-black text-white hover:bg-black/90">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}
