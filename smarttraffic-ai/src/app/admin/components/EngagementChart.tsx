"use client"; // Required for Recharts in Next.js App Router

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const engagementData = [
  { day: "Mon", users: 120 },
  { day: "Tue", users: 180 },
  { day: "Wed", users: 150 },
  { day: "Thu", users: 200 },
  { day: "Fri", users: 250 },
];

export default function EngagementChart() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={engagementData}>
            <XAxis dataKey="day" tick={{ fill: "#4A5568" }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#82ca9d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
