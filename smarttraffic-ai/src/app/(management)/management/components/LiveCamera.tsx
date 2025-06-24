/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { MoreVertical, X } from "lucide-react";

type CameraFeedProps = {
  title: string;
  src: string;
};

const CameraFeed = ({ title, src }: CameraFeedProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const uniqueSrc = `${src}`;

  return (
    <>
      <div className="relative bg-black rounded-md overflow-hidden border border-gray-700 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-2 py-1 bg-gray-800 text-white text-sm">
          <span>{title}</span>
          <div className="relative">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="p-1 hover:bg-gray-700 rounded"
            >
              <MoreVertical size={16} />
            </button>
            {showMenu && (
              <div className="absolute right-0 z-50 mt-2 w-40 bg-white rounded-md shadow-lg text-xs text-gray-800">
                <button
                  className="w-full px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setShowModal(true);
                    setShowMenu(false);
                  }}
                >
                  View Fullscreen
                </button>
                <button
                  className="w-full px-4 py-2 hover:bg-gray-100"
                  
                >
                  Refresh Feed
                </button>
                <button className="w-full px-4 py-2 hover:bg-gray-100">Adjust Quality</button>
                <button className="w-full px-4 py-2 text-red-600 hover:bg-red-50">Hide</button>
              </div>
            )}
          </div>
        </div>

        {/* Feed */}
        <div
          className="flex-1 relative cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            src={uniqueSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => console.warn(`Failed to load ${title}`)}
          />
          {/* Dummy AI Overlay */}
          <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-green-300 text-xs px-2 py-1 rounded">
            Vehicles: 12 | Speed Avg: 42km/h
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center">
          <div className="relative w-[90vw] h-[90vh] bg-black rounded-lg overflow-hidden border border-gray-700">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 bg-white text-black p-1 rounded-full hover:bg-red-500 hover:text-white"
            >
              <X size={20} />
            </button>
            <img
              src={uniqueSrc}
              alt={`${title} Fullscreen`}
              className="w-full h-full object-contain"
              onError={() => console.warn(`Modal failed to load ${title}`)}
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded">
              {title} – Location: Nairobi CBD (AI Mode: Active)
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CameraFeed;
