"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapComponent() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "400px", borderRadius: "8px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <span>Congestion Area</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
