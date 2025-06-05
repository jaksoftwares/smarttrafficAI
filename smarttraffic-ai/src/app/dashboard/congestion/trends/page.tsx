"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';

const data = [
  { name: 'Jan', congestion: 4000 },
  { name: 'Feb', congestion: 3000 },
  { name: 'Mar', congestion: 2000 },
  { name: 'Apr', congestion: 2780 },
  { name: 'May', congestion: 1890 },
  { name: 'Jun', congestion: 2390 },
  { name: 'Jul', congestion: 3490 },
];

const CongestionTrends = () => {
  const [trafficData] = useState(data);

  useEffect(() => {
    // Fetch data or use a placeholder data array
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-white">Congestion Trends</h1>
      <p className="text-lg text-gray-300">
        Analyze historical traffic congestion trends across different times of the day, days of the week, and locations.
      </p>

      {/* Traffic Trends Graph */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300">Traffic Volume Over Time</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="congestion" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Map Integration */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300">Congestion Hotspots</h2>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", borderRadius: "8px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              <span>Congestion Area</span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Traffic Data Table */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300">Detailed Traffic Data</h2>
        <table className="min-w-full table-auto text-sm text-white">
          <thead>
            <tr>
              <th className="p-2">Date</th>
              <th className="p-2">Location</th>
              <th className="p-2">Congestion Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">2025-04-01</td>
              <td className="p-2">Main Street</td>
              <td className="p-2">High</td>
            </tr>
            {/* More rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CongestionTrends;
