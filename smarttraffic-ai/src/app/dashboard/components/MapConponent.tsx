'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const MapComponent = () => {
  // Define the center of the map and initial zoom level
  const position: LatLngTuple = [51.505, -0.09]; // Example coordinates (London)

  // Marker data (example)
  const markers = [
    { id: 1, position: [51.505, -0.09] as LatLngTuple, title: 'Traffic Point 1' },
    { id: 2, position: [51.515, -0.1] as LatLngTuple, title: 'Traffic Point 2' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Traffic Map</h3>
      <MapContainer center={position} zoom={13} className="w-full h-96">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>{marker.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
