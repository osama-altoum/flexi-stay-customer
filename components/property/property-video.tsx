"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export function PropertyVideo({ video }: { video: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const getEmbeddedUrl = (url: string) => {
    if (!url) return "";
    try {
      return url.replace("watch?v=", "embed/");
    } catch {
      console.error("Invalid video URL:", url);
      return "";
    }
  };

  const embeddedUrl = getEmbeddedUrl(video);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Property Video</h2>
      <div className="relative aspect-video rounded-lg overflow-hidden">
        {!isPlaying ? (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            >
              <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="h-8 w-8 text-black" />
              </div>
            </button>
          </div>
        ) : (
          embeddedUrl && (
            <iframe
              src={`${embeddedUrl}?autoplay=1`}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )
        )}
      </div>
    </div>
  );
}
