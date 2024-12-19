"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const libraries: (
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization"
)[] = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

interface Location {
  latitude: number;
  longitude: number;
}

export function PropertyLocation({ latitude, longitude }: Location) {
  const { t } = useTranslation();

  // Define the type explicitly for markerPosition
  const [markerPosition, setMarkerPosition] = useState<
    { lat: number; lng: number } | undefined
  >();

  useEffect(() => {
    setMarkerPosition({
      lat: latitude,
      lng: longitude,
    });
  }, [latitude, longitude]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCvt7zFgTjtO6OInmj8gJ4FH8Z0hbzKHTo",
    libraries: [],
  });

  if (loadError) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500">Error loading map</p>
        <p className="text-sm text-muted-foreground">
          Please check your internet connection and try again
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">{t("Property location")}</h2>
        <p className="text-muted-foreground">
          Location for this property that the guest will see
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="relative bg-muted rounded-lg overflow-hidden">
            {!isLoaded ? (
              <div className="h-[400px] flex items-center justify-center">
                <Loader2 className="h-6 w-6 animate-spin" />
              </div>
            ) : (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={markerPosition ?? { lat: 0, lng: 0 }}
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                }}
              >
                <MarkerF
                  position={markerPosition ?? { lat: 0, lng: 0 }}
                  draggable={true}
                  //   onDragEnd={handleMarkerDrag}
                />
              </GoogleMap>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
