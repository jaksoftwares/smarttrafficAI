"use client";

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Street A', improvement: 3000 },
  { name: 'Street B', improvement: 2000 },
  { name: 'Street C', improvement: 2780 },
];

const CongestionManagement = () => {
  const [managementData] = useState(data);

  useEffect(() => {
    // Fetch data or use placeholder data array
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-white">Congestion Management</h1>
      <p className="text-lg text-gray-300">
        Manage and implement strategies to reduce traffic congestion. View ongoing initiatives and their effectiveness.
      </p>

      {/* Traffic Management Graph */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300">Impact of Traffic Management Strategies</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={managementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="improvement" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Traffic Management Recommendations */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl text-indigo-300">Recommendations</h2>
        <ul className="list-disc pl-5 text-white">
          <li>Increase green light duration on Street A during peak hours.</li>
          <li>Introduce traffic diverting programs during construction work on Street B.</li>
          <li>Implement adaptive traffic signals for better flow on Street C.</li>
        </ul>
      </div>
    </div>
  );
};

export default CongestionManagement;
