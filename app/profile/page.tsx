"use client";

import { useGetReservations } from "@/api/reservation";
import { getToken } from "@/api/storage";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileTabs } from "@/components/profile/profile-tabs";
import LoadingPage from "@/components/skeletons/loading-page";
import ProfileLoadingPage from "@/components/skeletons/profile-loading";
import { useEffect } from "react";

export default function ProfilePage() {
  const token = getToken();
  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);
  const { reservationsList, reservationsLoading } = useGetReservations({});

  return (
    <div className="min-h-screen pt-16">
      {reservationsLoading && (
        <div className="w-screen  ">
          <ProfileLoadingPage />
        </div>
      )}
      {reservationsList && !reservationsLoading && (
        <>
          <ProfileHeader reservationsList={reservationsList} />
          <ProfileTabs reservationsList={reservationsList} />
        </>
      )}
    </div>
  );
}
