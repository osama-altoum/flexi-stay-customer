"use client";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Array<{
    src: string;
    width: number;
    height: number;
    alt: string;
  }>;
  currentIndex: number;
}

export function ImageLightbox({
  isOpen,
  onClose,
  slides,
  currentIndex,
}: ImageLightboxProps) {
  return (
    <Lightbox
      open={isOpen}
      close={onClose}
      slides={slides}
      plugins={[Fullscreen, Zoom, Thumbnails]}
      index={currentIndex}
      zoom={{
        maxZoomPixelRatio: 3,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 2,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
        scrollToZoom: true,
      }}
      thumbnails={{
        position: "bottom",
        width: 120,
        height: 80,
        border: 2,
        borderRadius: 4,
        padding: 4,
        gap: 16,
        showToggle: true,
      }}
      render={{
        buttonPrev: () => null, // No button when on the first image
        buttonNext: () => null, // No button when on the last image
      }}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, .9)" },
        thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, .8)" },
        thumbnail: { filter: "grayscale(0.5)" },
        thumbnailsTrack: { padding: "12px 0" },
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
    />
  );
}
