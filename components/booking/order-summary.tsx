"use client";

import { CreateReservation } from "@/api/reservation";
import { getUserData } from "@/api/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function OrderSummary({
  property,
  nights,
  totalPrice,
  finalPrice,
  checkIn,
  checkOut,
}: any) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const userData = getUserData();

  const handleSubmit = async () => {
    // Format checkIn and checkOut to ISO 8601
    const formattedCheckIn = new Date(checkIn).toISOString();
    const formattedCheckOut = new Date(checkOut).toISOString();

    const body = {
      placeId: property?.id,
      userId: userData?.id,
      checkIn: formattedCheckIn,
      checkOut: formattedCheckOut,
      totalAmount: finalPrice,
    };

    setIsLoading(true);

    try {
      const response = await CreateReservation(body);
      if (response) {
        setIsLoading(false);
        toast.success("Reservation created successfully!");
        router.push("/success");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Error creating reservation.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Promo Code */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Enter Promo Code</h2>
        <div className="flex gap-4">
          <Input placeholder="Promo Code" className="bg-muted" />
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
            Apply
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">20% Off Discount</p>
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">
              {totalPrice}{" "}
              <span className="text-xs text-muted-foreground">SAR</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              New Reservation Discount
            </span>
            <span className="font-medium">
              {property?.newReservationDiscount}{" "}
              <span className="text-xs text-muted-foreground">%</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Week Reservation Discount
            </span>
            <span className="font-medium">
              {property?.weekReservationDiscount}{" "}
              <span className="text-xs text-muted-foreground">%</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Month Reservation Discount
            </span>
            <span className="font-medium text-indigo-600">
              {property?.monthReservationDiscount}{" "}
              <span className="text-xs text-muted-foreground">%</span>
            </span>
          </div>
          <div className="pt-4 border-t">
            <div className="flex justify-between">
              <span className="font-medium">Payable Now</span>
              <span className="font-bold">
                {finalPrice}{" "}
                <span className="text-xs text-muted-foreground">SAR</span>
              </span>
            </div>
          </div>
          <Button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {/* Payment */}
            {isLoading ? "Loading..." : "BOOK"}
          </Button>
        </div>
      </div>
    </div>
  );
}
