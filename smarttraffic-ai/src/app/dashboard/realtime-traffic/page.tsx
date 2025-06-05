'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Line } from 'react-chartjs-2';
import { DatePicker, } from 'antd';
import type { LatLngTuple } from 'leaflet';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { Button } from '@/components/ui/button';

// ✅ Register ChartJS modules
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

// ✅ Dynamically import MapContainer and other Leaflet components (client-only)
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });

const TrafficAnalytics = () => {
  const [, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [filterType, setFilterType] = useState('all');
  type CongestionPoint = { latitude: number; longitude: number };
  const [congestionData] = useState<CongestionPoint[]>([
    { latitude: 51.505, longitude: -0.09 },
    { latitude: 51.51, longitude: -0.1 },
  ]);
  const [mapCenter] = useState<LatLngTuple>([51.505, -0.09]);

  const handleFilterChange = (value: string) => setFilterType(value);
  const handleDateChange = (dates: unknown) => setDateRange(dates as [Date | null, Date | null]);

  const trafficChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Incidents Reported',
        data: [12, 15, 9, 10, 13, 17],
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-white">Traffic Analytics</h1>
      <p className="text-lg text-gray-300">
        Analyze traffic patterns, congestion, and incident statistics to make informed decisions.
      </p>

      {/* Traffic Overview Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300">Traffic Overview</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg text-white">Total Incidents</h3>
            <p className="text-2xl text-indigo-400">256</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg text-white">Active Congestion Zones</h3>
            <p className="text-2xl text-indigo-400">8</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg text-white">Average Congestion Level</h3>
            <p className="text-2xl text-indigo-400">75%</p>
          </div>
        </div>
      </div>

      {/* Analytics Chart */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300">Traffic Trends</h2>
        <Line data={trafficChartData} options={{ responsive: true }} />
      </div>

      {/* Congestion Heatmap */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300">Congestion Heatmap</h2>
        <MapContainer center={mapCenter} zoom={13} style={{ height: "400px", borderRadius: "8px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {congestionData.map((point, index) => (
            <CircleMarker
              key={index}
              center={[point.latitude, point.longitude]}
              radius={10}
              color="red"
              fillOpacity={0.4}
              fillColor="red"
            />
          ))}
        </MapContainer>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300">Filters</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white">Date Range</label>
            <DatePicker.RangePicker onChange={handleDateChange} style={{ width: '100%' }} />
          </div>
          <div>
            <label className="text-white">Incident Type</label>
            <div style={{ width: '100%' }}>
              <Select value={filterType} onValueChange={handleFilterChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="accident">Accidents</SelectItem>
                  <SelectItem value="road_closure">Road Closures</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
   <Button variant="default" className="mt-4" type="submit">
  Apply Filters
</Button>
      </div>
    </div>
  );
};

export default TrafficAnalytics;
