"use client";
import { useContext, useState } from "react";
import { RightSidebarContext } from "@/app/dashboard/layout";
import IntersectionADetails from "./IntersectionDetails/IntersectionA";
import IntersectionBDetails from "./IntersectionDetails/IntersectionB";
import IntersectionCDetails from "./IntersectionDetails/IntersectionC";
export default function CongestedPoints() {
  const congestedPoints = [
    { point: 'Intersection A', level: 90, component: <IntersectionADetails /> },
    { point: 'Intersection B', level: 75, component: <IntersectionBDetails /> },
    { point: 'Intersection C', level: 85, component: <IntersectionCDetails /> },
  ];

  const { setRightSidebarContent, openRightSidebar, closeRightSidebar } = useContext(RightSidebarContext);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);

  const handleItemClick = (point: string) => {
    if (selectedPoint === point) {
      setSelectedPoint(null);
      closeRightSidebar();
    } else {
      setSelectedPoint(point);
      openRightSidebar();
      const selected = congestedPoints.find(item => item.point === point);
      if (selected) {
        setRightSidebarContent(selected.component);
      }
    }
  };

  const itemClassName = (point: string) => {
    const isSelected = selectedPoint === point;
    return `transition-all duration-300 ease-in-out p-4 rounded-lg shadow-lg cursor-pointer ${
      isSelected
        ? "bg-purple-700 dark:bg-purple-800 text-white"
        : "bg-blue-100 dark:bg-blue-700 text-gray-800 dark:text-white w-full h-16"
    }`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Most Congested Points</h2>
      <div className="space-y-4 mt-6">
        {congestedPoints.map((item) => (
          <div
            key={item.point}
            className={itemClassName(item.point)}
            onClick={() => handleItemClick(item.point)}
          >
            <div className="flex items-center justify-between">
              <div>{item.point}</div>
              <div>{item.level}%</div>
            </div>
            <div className="mt-2 bg-gray-300 dark:bg-gray-600 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${item.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
