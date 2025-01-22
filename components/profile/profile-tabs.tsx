"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingsList } from "./tabs/bookings-list";
import { ReviewsList } from "./tabs/reviews-list";
import { Settings } from "./tabs/settings";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function ProfileTabs({ reservationsList }: any) {
  const router = useRouter();

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
            {reservationsList.length > 0 && (
              <BookingsList reservationsList={reservationsList} />
            )}
            {reservationsList.length === 0 && (
              <div className="mx-auto mt-10 text-center">
                <h2>No Bookings Found</h2>
                <Button
                  className="mt-4"
                  onClick={() => {
                    router.push("/properties");
                  }}
                >
                  Book Now
                </Button>
              </div>
            )}
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
