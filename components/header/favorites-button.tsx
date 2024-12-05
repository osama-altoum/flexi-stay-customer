"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function FavoritesButton() {
  return (
    <Button variant="ghost" size="icon" className="relative">
      <Heart className="h-6 w-6" />
      <span className="sr-only">Favorites</span>
      <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-[#363aed] text-[10px] font-medium text-white">
        2
      </span>
    </Button>
  );
}
