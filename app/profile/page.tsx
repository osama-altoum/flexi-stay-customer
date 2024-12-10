"use client";

import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileTabs } from "@/components/profile/profile-tabs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-16">
      <ProfileHeader />
      <ProfileTabs />
    </div>
  );
}
