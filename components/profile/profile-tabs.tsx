"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingsList } from "./tabs/bookings-list";
import { ReviewsList } from "./tabs/reviews-list";
import { Settings } from "./tabs/settings";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

export function ProfileTabs({ reservationsList }: any) {
  const propertyIds = reservationsList?.map(
    (reservation: any) => reservation.placeId
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="bookings" className="space-y-6">
        <TabsList>
          <TabsTrigger value="bookings">My Bookings</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="settings" disabled>
            Settings
          </TabsTrigger>
        </TabsList>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TabsContent value="bookings" className="space-y-6">
            <BookingsList propertyIds={propertyIds} />
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <ReviewsList />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Settings />
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
}
