/* eslint-disable @next/next/no-img-element */
// CameraFeed.tsx
import React from 'react';

const CameraFeed = () => {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden">
      <h3 className="text-xl font-semibold text-white p-4">Traffic Camera Feed</h3>
      <div className="relative w-full h-64">
        <img
          src="http://127.0.0.1:8000/vehicles/video_feed/"
          alt="Traffic Camera Feed"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CameraFeed;
