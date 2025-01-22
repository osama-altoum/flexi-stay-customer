"use client";

import { useGetReservations } from "@/api/reservation";
import { getToken } from "@/api/storage";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileTabs } from "@/components/profile/profile-tabs";
import { useEffect } from "react";

export default function ProfilePage() {
  const token = getToken();
  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);
  const { reservationsList } = useGetReservations({});

  console.log(reservationsList);

  return (
    <div className="min-h-screen pt-16">
      <ProfileHeader reservationsList={reservationsList} />
      <ProfileTabs />
    </div>
  );
}
