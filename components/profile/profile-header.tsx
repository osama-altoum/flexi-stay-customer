"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, MapPin, Calendar, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { getUserData } from "@/api/storage";
import { useEffect, useState } from "react";

export function ProfileHeader({ reservationsList }: any) {
  const [userProfile, setUserProfile] = useState<any>(null);

  useEffect(() => {
    const storedUserData = getUserData();
    if (storedUserData) {
      setUserProfile(storedUserData);
    }
  }, []);
  return (
    <div className="bg-card border-b">
      <div className="container mx-auto px-4">
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-background">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback>
                  {" "}
                  {userProfile?.firstName?.charAt(0).toUpperCase()}
                  {userProfile?.lastName?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute -bottom-2 -right-2 rounded-full"
                variant="secondary"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">
                {" "}
                {`${
                  userProfile?.firstName.charAt(0).toUpperCase() +
                  userProfile?.firstName.slice(1)
                } ${" "} ${
                  userProfile?.lastName.charAt(0).toUpperCase() +
                  userProfile?.lastName.slice(1)
                }`}
              </h1>
              <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{userProfile?.phoneNumber}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{userProfile?.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined March 2024</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {reservationsList?.length}
                </div>
                <div className="text-sm text-muted-foreground">Bookings</div>
              </div>
              {/* <div className="text-center">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Reviews</div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
