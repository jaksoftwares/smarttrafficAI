// app/dashboard/live-traffic/page.tsx
"use client";

import React from "react";
import CameraFeed from "../components/LiveCamera";

const mockFeeds = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Camera ${i + 1}`,
  src: "http://127.0.0.1:8000/vehicles/video_feed/",
}));

const LiveTrafficPage = () => {
  const feedCount = mockFeeds.length;
  const columns = Math.ceil(Math.sqrt(feedCount));
  const rows = Math.ceil(feedCount / columns);

  return (
    <div className="h-screen bg-black text-white overflow-hidden p-2 flex flex-col">
      {/* <header className="text-xl font-semibold mb-2 px-2">Live Traffic Monitoring</header> */}

      <div
        className="grid gap-2 flex-1"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {mockFeeds.map((feed) => (
          <CameraFeed key={feed.id} title={feed.title} src={feed.src} />
        ))}
      </div>
    </div>
  );
};

export default LiveTrafficPage;
