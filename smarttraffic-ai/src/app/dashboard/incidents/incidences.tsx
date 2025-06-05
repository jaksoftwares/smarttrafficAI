// 'use client';

// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Input, DatePicker, message } from 'antd';
// import type { Dayjs } from 'dayjs';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'antd/dist/reset.css';

// // Custom UI components (NOT AntD)
// import { Select } from '@/components/ui/select';
// import Button from '@/components/ui/button';

// const { TextArea } = Input;

// interface Incident {
//   type: string;
//   location: string;
//   description: string;
//   date: string;
//   status: string;
//   latitude: number;
//   longitude: number;
// }

// // Fix Leaflet's default icon issue
// delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// const INCIDENT_TYPES = [
//   'Accident',
//   'Road Closure',
//   'Construction',
//   'Event',
// ];

// const IncidentReporting: React.FC = () => {
//   const [reportedIncidents, setReportedIncidents] = useState<Incident[]>([]);
//   const [mapCenter] = useState<[number, number]>([51.505, -0.09]);

//   // Controlled form states
//   const [incidentType, setIncidentType] = useState<string>('');
//   const [incidentLocation, setIncidentLocation] = useState<string>('');
//   const [incidentDescription, setIncidentDescription] = useState<string>('');
//   const [incidentDate, setIncidentDate] = useState<Dayjs | null>(null);

//   useEffect(() => {
//     const fetchReportedIncidents = async () => {
//       // Simulated fetch
//       const fetchedIncidents: Incident[] = [
//         {
//           type: 'Accident',
//           location: 'Location A',
//           description: 'Car crash on Highway 1',
//           date: '2025-04-01',
//           status: 'Unresolved',
//           latitude: 51.505,
//           longitude: -0.09,
//         },
//         {
//           type: 'Road Closure',
//           location: 'Location B',
//           description: 'Road closure due to construction',
//           date: '2025-04-02',
//           status: 'Resolved',
//           latitude: 51.515,
//           longitude: -0.1,
//         },
//       ];
//       setReportedIncidents(fetchedIncidents);
//     };

//     fetchReportedIncidents();
//   }, []);

//   const handleSubmit = () => {
//     if (!incidentType) {
//       message.error('Please select an incident type');
//       return;
//     }
//     if (!incidentLocation.trim()) {
//       message.error('Please enter the location');
//       return;
//     }
//     if (!incidentDescription.trim()) {
//       message.error('Please describe the incident');
//       return;
//     }
//     if (!incidentDate) {
//       message.error('Please select the date');
//       return;
//     }

//     const newIncident: Incident = {
//       type: incidentType,
//       location: incidentLocation,
//       description: incidentDescription,
//       date: incidentDate.format('YYYY-MM-DD'),
//       status: 'Unresolved',
//       latitude: mapCenter[0],
//       longitude: mapCenter[1],
//     };

//     setReportedIncidents((prev) => [...prev, newIncident]);
//     message.success('Incident reported successfully!');

//     // Clear form
//     setIncidentType('');
//     setIncidentLocation('');
//     setIncidentDescription('');
//     setIncidentDate(null);
//   };

//   return (
//     <div className="p-6 space-y-6 bg-gray-900 min-h-screen">
//       <h1 className="text-2xl font-semibold text-white">Traffic Incident Reporting</h1>
//       <p className="text-lg text-gray-300">
//         Report traffic incidents like accidents or road closures to help manage congestion.
//       </p>

//       {/* Form Section */}
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-md mx-auto">
//         <h2 className="text-xl text-indigo-300 mb-4">Report a New Incident</h2>

//         <label className="block mb-3 text-white">
//           Incident Type
//           <Select
//             value={incidentType || undefined}
//             onValueChange={(value: string) => setIncidentType(value)}
//             aria-label="Select Incident Type"
//           >
//             {INCIDENT_TYPES.map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </Select>
//         </label>

//         <label className="block mb-3 text-white">
//           Location
//           <Input
//             placeholder="Enter incident location"
//             value={incidentLocation}
//             onChange={(e) => setIncidentLocation(e.target.value)}
//           />
//         </label>

//         <label className="block mb-3 text-white">
//           Description
//           <TextArea
//             rows={4}
//             placeholder="Describe the incident"
//             value={incidentDescription}
//             onChange={(e) => setIncidentDescription(e.target.value)}
//           />
//         </label>

//         <label className="block mb-3 text-white">
//           Incident Date
//           <DatePicker
//             value={incidentDate}
//             onChange={(date) => setIncidentDate(date)}
//           />
//         </label>

//         <Button type="primary" onClick={handleSubmit} className="w-full">
//           Report Incident
//         </Button>
//       </div>

//       {/* Table Section */}
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
//         <h2 className="text-xl text-indigo-300 mb-2">Reported Incidents</h2>
//         <table className="min-w-full text-sm text-white border-collapse border border-gray-600">
//           <thead>
//             <tr className="bg-gray-700">
//               <th className="p-2 border border-gray-600">Type</th>
//               <th className="p-2 border border-gray-600">Location</th>
//               <th className="p-2 border border-gray-600">Date</th>
//               <th className="p-2 border border-gray-600">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reportedIncidents.map((incident, index) => (
//               <tr key={index} className="hover:bg-gray-700">
//                 <td className="p-2 border border-gray-600">{incident.type}</td>
//                 <td className="p-2 border border-gray-600">{incident.location}</td>
//                 <td className="p-2 border border-gray-600">{incident.date}</td>
//                 <td className="p-2 border border-gray-600">{incident.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Map Section */}
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
//         <h2 className="text-xl text-indigo-300 mb-2">Incident Locations on Map</h2>
//         <MapContainer
//           center={mapCenter}
//           zoom={13}
//           style={{ height: '400px', borderRadius: '8px' }}
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           {reportedIncidents.map((incident, index) => (
//             <Marker key={index} position={[incident.latitude, incident.longitude]}>
//               <Popup>
//                 <strong>{incident.type}</strong>
//                 <br />
//                 {incident.location}
//                 <br />
//                 {incident.date}
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>
//     </div>
//   );
// };

// export default IncidentReporting;
