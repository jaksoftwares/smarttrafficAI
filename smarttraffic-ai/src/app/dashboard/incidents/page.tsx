'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import type { Dayjs } from 'dayjs';
import 'antd/dist/reset.css';
import dayjs from 'dayjs';

const MapView = dynamic(() => import('../components/MapView'), { ssr: false });

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
        <form
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const incidentType = formData.get("incidentType") as string;
    const incidentLocation = formData.get("incidentLocation") as string;
    const incidentDescription = formData.get("incidentDescription") as string;
    const incidentDate = formData.get("incidentDate") as string;

    if (!incidentType || !incidentLocation || !incidentDescription || !incidentDate) {
      alert("Please fill in all fields.");
      return;
    }

    handleReportIncident({
      incidentType,
      incidentLocation,
      incidentDescription,
      incidentDate: dayjs(incidentDate),
    });
    form.reset();
  }}
  className="space-y-4"
>
  <div>
    <label htmlFor="incidentType" className="block text-sm font-medium text-white mb-1">
      Incident Type
    </label>
    <select
      name="incidentType"
      required
      className="w-full p-2 rounded border border-gray-300 text-black"
    >
      <option value="">-- Select Incident Type --</option>
      <option value="Accident">Accident</option>
      <option value="Road Closure">Road Closure</option>
      <option value="Construction">Construction</option>
      <option value="Event">Event</option>
    </select>
  </div>

  <div>
    <label htmlFor="incidentLocation" className="block text-sm font-medium text-white mb-1">
      Location
    </label>
    <input
      type="text"
      name="incidentLocation"
      required
      className="w-full p-2 rounded border border-gray-300 text-black"
      placeholder="Enter incident location"
    />
  </div>

  <div>
    <label htmlFor="incidentDescription" className="block text-sm font-medium text-white mb-1">
      Description
    </label>
    <textarea
      name="incidentDescription"
      required
      rows={4}
      className="w-full p-2 rounded border border-gray-300 text-black"
      placeholder="Describe the incident"
    />
  </div>

  <div>
    <label htmlFor="incidentDate" className="block text-sm font-medium text-white mb-1">
      Incident Date
    </label>
    <input
      type="date"
      name="incidentDate"
      required
      className="w-full p-2 rounded border border-gray-300 text-black"
    />
  </div>

  <div>
    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
    >
      Report Incident
    </button>
  </div>
</form>
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
        <MapView incidents={reportedIncidents} center={mapCenter} />
      </div>
    </div>
  );
};

export default IncidentReporting;
