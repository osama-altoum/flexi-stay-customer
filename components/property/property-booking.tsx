"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";

type Property = {
  price: number;
  guests: number;
  children?: number;
  nights: number;
  totalPrice: number;
  serviceCharge: number;
  checkIn?: string;
  checkOut?: string;
};

export function PropertyBooking({ property }: { property: Property }) {
  const { price, guests, children, nights, totalPrice, serviceCharge } =
    property;

  return (
    <form className="bg-card rounded-lg border p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Price</h2>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm">SAR</span>
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
          <label className="text-sm font-medium" htmlFor="checkIn">
            Check In - Check Out
          </label>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {property.checkIn
                    ? format(new Date(property.checkIn), "PP")
                    : "Check in"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  defaultValue={property.checkIn}
                  className="w-full border rounded-md p-2"
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
                  {property.checkOut
                    ? format(new Date(property.checkOut), "PP")
                    : "Check out"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  defaultValue={property.checkOut}
                  className="w-full border rounded-md p-2"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Guests</label>
          <Button variant="outline" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            <span>{guests || 1} Guests</span>
          </Button>
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div className="flex justify-between">
            <span>
              ${price} × {nights} nights
            </span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span>Service charge</span>
            <span>${serviceCharge}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${totalPrice + serviceCharge}</span>
          </div>
        </div>

        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
          Proceed Booking
        </Button>

        <div className="flex items-center justify-center gap-4 text-sm">
          <Button variant="link" className="h-auto p-0 text-indigo-600">
            Save To Wish List
          </Button>
        </div>
      </div>
    </form>
  );
}
