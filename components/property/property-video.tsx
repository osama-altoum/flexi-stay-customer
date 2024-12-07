"use client";

import { Play } from "lucide-react";

export function PropertyVideo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Property Video</h2>
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Property Video Thumbnail"
          className="w-full h-full object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
          <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="h-8 w-8 text-black" />
          </div>
        </button>
      </div>
    </div>
  );
}
