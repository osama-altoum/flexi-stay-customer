"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function OrderSummary({
  property,
  nights,
  totalPrice,
  finalPrice,
}: any) {
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
              <span className="text-xs text-muted-foreground">SAR</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Week Reservation Discount
            </span>
            <span className="font-medium">
              {property?.weekReservationDiscount}{" "}
              <span className="text-xs text-muted-foreground">SAR</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Month Reservation Discount
            </span>
            <span className="font-medium text-indigo-600">
              {property?.monthReservationDiscount}{" "}
              <span className="text-xs text-muted-foreground">SAR</span>
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
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            {/* Payment */}
            BOOK
          </Button>
        </div>
      </div>
    </div>
  );
}
