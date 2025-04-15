"use client"; // Required for Recharts in Next.js App Router

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", performance: 80 },
  { name: "Feb", performance: 82 },
  { name: "Mar", performance: 78 },
  { name: "Apr", performance: 85 },
  { name: "May", performance: 87 },
];

export default function PerformanceChart() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">System Performance</h3>
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" tick={{ fill: "#4A5568" }} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="performance" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
