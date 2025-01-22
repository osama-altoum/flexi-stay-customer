"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MapPin, Calendar as CalendarIcon, Users, Search } from "lucide-react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

export function ListingHero() {
  const { t } = useTranslation();
  const [location, setLocation] = useState("Dubai, UAE");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(t("2 adults, 2 children"));

  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=3270&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t("Journey with Stay Way - Begin Your Story!")}
          </h1>
          <p className="text-xl text-white/90">
            {t(
              "Easily search for top accommodations offered by our professional network"
            )}
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Location */}
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                {t("Location")}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    <span className="truncate">{location}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0">
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setLocation("Dubai, UAE")}
                    >
                      {t("Dubai, UAE")}
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setLocation("Abu Dhabi, UAE")}
                    >
                      {t("Abu Dhabi, UAE")}
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Check In */}
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                {t("Check In")}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "MM/dd/yyyy") : "Select date"}
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
            </div>

            {/* Check Out */}
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                {t("Check Out")}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "MM/dd/yyyy") : "Select date"}
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

            {/* Guests */}
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                {t("Guest")}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start font-normal"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    <span className="truncate">{guests}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72" align="start">
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setGuests("2 adults, 2 children")}
                    >
                      {t("2 adults, 2 children")}
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setGuests("2 adults")}
                    >
                      {t("2 adults")}
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1">
              <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1 invisible">
                {t("Search")}
              </label>
              <Button className="w-full bg-black hover:bg-black/90">
                <Search className="mr-2 h-4 w-4" />
                {t("Search")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
