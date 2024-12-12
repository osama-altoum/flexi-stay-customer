"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Check, Loader2 } from "lucide-react";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

interface Address {
  floor: number;
  street: string;
  apt?: string;
  city: string;
  district: string;

  country: string;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface StepPinConfirmProps {
  location: Location;
  address: Address;
}

export function PropertyLocation({ map }: any) {
  const { t } = useTranslation();
  const [markerPosition, setMarkerPosition] = useState({
    lat: map.latitude,

    lng: map.longitude,
  });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCvt7zFgTjtO6OInmj8gJ4FH8Z0hbzKHTo",
    libraries: libraries as any,
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
          location for this property that the guest will see
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
                zoom={13}
                center={markerPosition}
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                }}
              >
                <MarkerF
                  position={markerPosition}
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
