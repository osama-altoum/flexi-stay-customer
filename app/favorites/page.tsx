"use client";

import { FavoritesHeader } from "@/components/favorites/favorites-header";
import { FavoritesList } from "@/components/favorites/favorites-list";

export default function FavoritesPage() {
  return (
    <div className="min-h-screen pt-16">
      <FavoritesHeader />
      <div className="container mx-auto px-4 py-8">
        <FavoritesList />
      </div>
    </div>
  );
}
