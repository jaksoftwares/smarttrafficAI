'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the structure for an incident
export interface Incident {
  type: string;
  location: string;
  description: string;
  date: string;
  status: string;
  latitude: number;
  longitude: number;
}

// Fix Leaflet's default marker icon bug
const iconFix = L.Icon.Default.prototype as unknown as {
  _getIconUrl?: () => string;
};

delete iconFix._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapViewProps {
  incidents: Incident[];
  center: [number, number];
}

const MapView = ({ incidents, center }: MapViewProps) => (
  <MapContainer
    center={center}
    zoom={13}
    scrollWheelZoom
    style={{ height: '400px', width: '100%', borderRadius: '8px' }}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {incidents.map((incident, index) => (
      <Marker
        key={index}
        position={[incident.latitude, incident.longitude]}
      >
        <Popup>
          <div className="text-sm font-medium">
            <p><strong>{incident.type}</strong></p>
            <p>{incident.location}</p>
            <p>{incident.date}</p>
          </div>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default MapView;
