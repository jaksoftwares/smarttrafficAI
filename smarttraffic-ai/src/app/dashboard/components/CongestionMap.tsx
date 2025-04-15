"use client"; // This ensures that the component runs only on the client

import { useEffect, useState } from "react"; // Import necessary hooks
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

export default function CongestionMap() {
  const [isClient, setIsClient] = useState(false); // State to check if it's the client-side

  // Set isClient to true when the component mounts (client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If it's not the client-side, render nothing
  if (!isClient) {
    return null;
  }

  const hotspots = [
    { lat: 1.2921, lng: 36.8219, name: "Hotspot A" },
    { lat: 1.2956, lng: 36.8224, name: "Hotspot B" },
  ];

  const center: LatLngExpression = [1.2921, 36.8219];
  const zoom = 14;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Congestion Hotspots
      </h2>
      <div className="mt-6 w-full h-96">
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ width: "100%", height: "100%" }}
          scrollWheelZoom={false} // Disable scroll zoom for better control
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {hotspots.map((spot) => (
            <Marker position={[spot.lat, spot.lng]} key={spot.name}>
              <Popup>{spot.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
