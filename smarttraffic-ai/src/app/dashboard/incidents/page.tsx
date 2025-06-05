'use client';

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'antd/dist/reset.css';

const { Option } = Select;

interface Incident {
  type: string;
  location: string;
  description: string;
  date: string;
  status: string;
  latitude: number;
  longitude: number;
}

interface FormValues {
  incidentType: string;
  incidentLocation: string;
  incidentDescription: string;
  incidentDate: Dayjs;
}

// Fix Leaflet's default icon issue
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const IncidentReporting = () => {
  const [reportedIncidents, setReportedIncidents] = useState<Incident[]>([]);
  const [mapCenter] = useState<[number, number]>([51.505, -0.09]);

  useEffect(() => {
    const fetchReportedIncidents = async () => {
      const fetchedIncidents: Incident[] = [
        {
          type: 'Accident',
          location: 'Location A',
          description: 'Car crash on Highway 1',
          date: '2025-04-01',
          status: 'Unresolved',
          latitude: 51.505,
          longitude: -0.09,
        },
        {
          type: 'Road Closure',
          location: 'Location B',
          description: 'Road closure due to construction',
          date: '2025-04-02',
          status: 'Resolved',
          latitude: 51.515,
          longitude: -0.1,
        },
      ];
      setReportedIncidents(fetchedIncidents);
    };

    fetchReportedIncidents();
  }, []);

  const handleReportIncident = (values: FormValues) => {
    const newIncident: Incident = {
      type: values.incidentType,
      location: values.incidentLocation,
      description: values.incidentDescription,
      date: values.incidentDate.format('YYYY-MM-DD'),
      status: 'Unresolved',
      latitude: mapCenter[0],
      longitude: mapCenter[1],
    };

    setReportedIncidents((prev) => [...prev, newIncident]);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-semibold text-white">Traffic Incident Reporting</h1>
      <p className="text-lg text-gray-300">
        Report traffic incidents like accidents or road closures to help manage congestion.
      </p>

      {/* Form Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300 mb-4">Report a New Incident</h2>
        <Form layout="vertical" onFinish={handleReportIncident}>
          <Form.Item
            label="Incident Type"
            name="incidentType"
            rules={[{ required: true, message: 'Please select an incident type' }]}
          >
            <Select placeholder="Select type of incident">
              <Option value="Accident">Accident</Option>
              <Option value="Road Closure">Road Closure</Option>
              <Option value="Construction">Construction</Option>
              <Option value="Event">Event</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Location"
            name="incidentLocation"
            rules={[{ required: true, message: 'Please enter the location' }]}
          >
            <Input placeholder="Enter incident location" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="incidentDescription"
            rules={[{ required: true, message: 'Please describe the incident' }]}
          >
            <Input.TextArea rows={4} placeholder="Describe the incident" />
          </Form.Item>

          <Form.Item
            label="Incident Date"
            name="incidentDate"
            rules={[{ required: true, message: 'Please select the date' }]}
          >
            <DatePicker className="w-full" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Report Incident
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Table Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300 mb-2">Reported Incidents</h2>
        <table className="min-w-full text-sm text-white border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 border border-gray-600">Type</th>
              <th className="p-2 border border-gray-600">Location</th>
              <th className="p-2 border border-gray-600">Date</th>
              <th className="p-2 border border-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {reportedIncidents.map((incident, index) => (
              <tr key={index} className="hover:bg-gray-700">
                <td className="p-2 border border-gray-600">{incident.type}</td>
                <td className="p-2 border border-gray-600">{incident.location}</td>
                <td className="p-2 border border-gray-600">{incident.date}</td>
                <td className="p-2 border border-gray-600">{incident.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Map Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300 mb-2">Incident Locations on Map</h2>
        <MapContainer center={mapCenter} zoom={13} style={{ height: '400px', borderRadius: '8px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {reportedIncidents.map((incident, index) => (
            <Marker key={index} position={[incident.latitude, incident.longitude]}>
              <Popup>
                <strong>{incident.type}</strong><br />
                {incident.location}<br />
                {incident.date}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default IncidentReporting;
