import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import {
  format,
  differenceInDays,
  parseISO,
  isBefore,
  isAfter,
  isWithinInterval,
  startOfDay,
} from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import { getToken } from "@/api/storage";
import { AuthButton } from "../header/auth-button";
import { AuthDialog } from "../auth/auth-dialog";
import { useTranslation } from "react-i18next";
import { PopoverClose } from "@radix-ui/react-popover";

export function PropertyBooking({ property, reservations }: any) {
  const router = useRouter();
  const { t } = useTranslation();

  const [checkIn, setCheckIn] = useState<any>(null);
  const [checkOut, setCheckOut] = useState<any>(null);
  const [nights, setNights] = useState(0);

  // Convert reservation dates to Date objects and sort them
  const bookings = reservations
    .map((reservation: any) => ({
      checkIn: parseISO(reservation.checkIn),
      checkOut: parseISO(reservation.checkOut),
    }))
    .sort((a: any, b: any) => a.checkIn - b.checkIn);

  // Function to check if a date falls within any reservation
  const isDateReserved = useCallback(
    (date: any) => {
      return bookings.some((booking: any) =>
        isWithinInterval(date, {
          start: booking.checkIn,
          end: booking.checkOut,
        })
      );
    },
    [bookings]
  );

  // Function to check if a date is disabled for check-in
  const isDateDisabled = useCallback(
    (date: any) => {
      // Compare with start of today to ignore time component
      const today = startOfDay(new Date());

      // Only disable if the date is before today (not including today)
      if (isBefore(date, today)) return true;

      // Check if the date is reserved
      return isDateReserved(date);
    },
    [isDateReserved]
  );

  // Function to check if a checkout date is valid
  const isCheckoutDateDisabled = useCallback(
    (date: any) => {
      if (!checkIn) return true;

      // Prevent selecting checkout before checkin
      if (isBefore(date, checkIn)) return true;

      // Find the next reservation after the selected check-in date
      const nextReservation = bookings.find((booking: any) =>
        isAfter(booking.checkIn, checkIn)
      );

      if (nextReservation) {
        // Allow selecting dates up until the start of the next reservation
        return isAfter(date, nextReservation.checkIn) || isDateReserved(date);
      }

      // If no future reservations, only check if the date itself is reserved
      return isDateReserved(date);
    },
    [checkIn, bookings, isDateReserved]
  );

  const calculateNights = useCallback((inDate: any, outDate: any) => {
    if (inDate && outDate) {
      const nightsCount = differenceInDays(outDate, inDate) + 1;
      setNights(nightsCount > 0 ? nightsCount : 0);
    } else {
      setNights(0);
    }
  }, []);

  const handleCheckInSelect = (date: any) => {
    setCheckIn(date);
    setCheckOut(null); // Reset checkout when checkin changes
    calculateNights(date, null);
  };

  const handleCheckOutSelect = (date: any) => {
    setCheckOut(date);
    calculateNights(checkIn, date);
  };

  const totalPrice = nights * property?.priceBeforeTax;
  const calculateDiscount = (totalPrice: number, discountRate: number) =>
    discountRate > 0 ? (totalPrice * discountRate) / 100 : 0;

  const finalPrice =
    totalPrice -
    calculateDiscount(
      totalPrice,
      property?.newReservationDiscount > 0 ? 20 : 0
    ) -
    calculateDiscount(
      totalPrice,
      property?.weekReservationDiscount > 0 ? 10 : 0
    ) -
    calculateDiscount(
      totalPrice,
      property?.monthReservationDiscount > 0 ? 15 : 0
    );

  const token = getToken();
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  const handleBooking = (e: any) => {
    if (!token) {
      e.preventDefault();
      setShowAuthDialog(true);
    } else {
      e.preventDefault();
      router.push(
        `/property/${property?.id}/book?checkIn=${checkIn}&checkOut=${checkOut}&nights=${nights}&totalPrice=${totalPrice}&finalPrice=${finalPrice}`
      );
    }
  };

  return (
    <>
      <form className="bg-card rounded-lg border p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{t("Price")}</h2>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">
              {property?.priceBeforeTax}
            </span>
            <span className="text-sm">{t("SAR")}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700" disabled>
            {t("Booking Form")}
          </Button>
          <Button variant="outline" className="flex-1" disabled>
            {t("Enquiry Form")}
          </Button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              {t("Check In")} - {t("Check Out")}
            </label>
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PP") : t("Check in")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4" align="start">
                  <div className="relative">
                    {/* Close Button */}
                    <PopoverClose
                      asChild
                      className="absolute -top-3 -right-3 rounded-full  hover:bg-gray-100"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Close"
                        className="text-red-600"
                      >
                        ✕
                      </Button>
                    </PopoverClose>

                    {/* Calendar */}
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={handleCheckInSelect}
                      disabled={isDateDisabled}
                      initialFocus
                      className="p-4"
                    />
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                    disabled={!checkIn}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PP") : t("Check out")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4" align="start">
                  <div className="relative">
                    {/* Close Button */}
                    <PopoverClose
                      asChild
                      className="absolute -top-3 -right-3 rounded-full  hover:bg-gray-100"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Close"
                        className="text-red-600"
                      >
                        ✕
                      </Button>
                    </PopoverClose>

                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={handleCheckOutSelect}
                      disabled={isCheckoutDateDisabled}
                      initialFocus
                      className="p-4"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t("Guests")}</label>
            <Button
              variant="outline"
              className="w-full justify-start"
              type="reset"
            >
              <Users className="mr-2 h-4 w-4" />
              <span>
                {property?.guests} {t("Guests")}
              </span>
            </Button>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="flex justify-between">
              <span>
                {property?.priceBeforeTax} × {nights} {t("nights")}
              </span>
              <span>
                {totalPrice} {t("SAR")}
              </span>
            </div>
            <div className="flex justify-between">
              <span>{t("New Reservation Discount")}</span>
              <span>{property?.newReservationDiscount} %</span>
            </div>
            <div className="flex justify-between">
              <span>{t("Week Reservation Discount")}</span>
              <span>{property?.weekReservationDiscount} %</span>
            </div>
            <div className="flex justify-between">
              <span>{t("Month Reservation Discount")}</span>
              <span>{property?.monthReservationDiscount} %</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>{t("Total")}</span>
              <span>
                {finalPrice} {t("SAR")}
              </span>
            </div>
          </div>

          <Button
            className="w-full bg-indigo-600 hover:bg-indigo-700"
            disabled={!checkIn || !checkOut}
            onClick={handleBooking}
          >
            {t("Proceed Booking")}
          </Button>

          <div className="flex items-center justify-center gap-4 text-sm">
            <Button variant="link" className="h-auto p-0 text-indigo-600">
              {t("Save To Wish List")}
            </Button>
          </div>
        </div>
      </form>
      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
      />
    </>
  );
}

export default PropertyBooking;
