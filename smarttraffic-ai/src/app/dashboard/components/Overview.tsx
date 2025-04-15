"use client"

import { useState } from "react";

export default function Overview() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  // Handle item click and toggle selection
  const handleItemClick = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index); // Toggle selected state
  };

  // Helper function for class names
  const itemClassName = (index: number) => {
    const isSelected = selectedItem === index;
    return `transition-all duration-300 ease-in-out p-4 rounded-lg shadow-lg cursor-pointer ${
      isSelected
        ? "bg-purple-700 dark:bg-purple-800 text-white w-3/12 h-48"  // Reduce width to 1/4 of the screen (3/12 of the screen)
        : "bg-blue-100 dark:bg-blue-700 text-gray-800 dark:text-white w-full h-32"
    }`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {/* Accident Level Item */}
        <div
          className={itemClassName(0)}
          onClick={() => handleItemClick(0)}
        >
          <div className="text-3xl font-bold">High</div>
          <div className="text-sm font-semibold">Accident Level</div>
          <hr className="my-2 border-t-2 border-white" />
          <p className="text-xs mt-2">This represents the highest accident level in the region.</p>
        </div>

        {/* Accidents Item */}
        <div
          className={itemClassName(1)}
          onClick={() => handleItemClick(1)}
        >
          <div className="text-3xl font-bold">42</div>
          <div className="text-sm font-semibold">Accidents</div>
          <hr className="my-2 border-t-2 border-white" />
          <p className="text-xs mt-2">The total number of accidents that have been reported this month.</p>
        </div>

        {/* Road Closures Item */}
        <div
          className={itemClassName(2)}
          onClick={() => handleItemClick(2)}
        >
          <div className="text-3xl font-bold">5</div>
          <div className="text-sm font-semibold">Road Closures</div>
          <hr className="my-2 border-t-2 border-white" />
          <p className="text-xs mt-2">Number of roads that are currently closed due to accidents or maintenance.</p>
        </div>

        {/* Avg Transit Delay Item */}
        <div
          className={itemClassName(3)}
          onClick={() => handleItemClick(3)}
        >
          <div className="text-3xl font-bold">15 mins</div>
          <div className="text-sm font-semibold">Avg Transit Delay</div>
          <hr className="my-2 border-t-2 border-white" />
          <p className="text-xs mt-2">The average delay experienced by commuters on a daily basis.</p>
        </div>

        {/* CA Congestion Rank Item */}
        <div
          className={itemClassName(4)}
          onClick={() => handleItemClick(4)}
        >
          <div className="text-3xl font-bold">3rd</div>
          <div className="text-sm font-semibold">CA Congestion Rank</div>
          <hr className="my-2 border-t-2 border-white" />
          <p className="text-xs mt-2">The congestion rank of CA compared to other regions in the city.</p>
        </div>
      </div>
    </div>
  );
}
