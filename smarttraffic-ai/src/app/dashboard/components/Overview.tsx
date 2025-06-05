"use client";
import { useContext, useState } from "react";
import { RightSidebarContext } from "@/app/dashboard/layout";
import AccidentLevelDetails from "./OverviewDetails/AccidentLevels";
import AccidentsDetails from "./OverviewDetails/AccidentDetails";
import RoadClosuresDetails from "./OverviewDetails/RoadClosures";
import TransitDelayDetails from "./OverviewDetails/TransitDelay";
import CACongestionRankDetails from "./OverviewDetails/CongestionRank";

export default function Overview() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const {
    setRightSidebarContent,
    openRightSidebar,
    closeRightSidebar,
  } = useContext(RightSidebarContext);

  const handleItemClick = (index: number) => {
    if (selectedItem === index) {
      setSelectedItem(null);
      closeRightSidebar();
    } else {
      setSelectedItem(index);
      openRightSidebar();
      setRightSidebarContent(renderDetails(index));
    }
  };

  const renderDetails = (index: number) => {
    switch (index) {
      case 0:
        return <AccidentLevelDetails />;
      case 1:
        return <AccidentsDetails />;
      case 2:
        return <RoadClosuresDetails />;
      case 3:
        return <TransitDelayDetails />;
      case 4:
        return <CACongestionRankDetails />;
      default:
        return null;
    }
  };

  const itemClassName = (index: number) => {
    const isSelected = selectedItem === index;
    return `transition-all duration-300 ease-in-out p-4 rounded-lg shadow-lg cursor-pointer ${
      isSelected
        ? "bg-purple-700 dark:bg-purple-800 text-white"
        : "bg-blue-100 dark:bg-blue-700 text-gray-800 dark:text-white w-full h-32"
    }`;
  };

  return (
    <div className="relative">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {["Accident Level", "Accidents", "Road Closures", "Avg Transit Delay", "CA Congestion Rank"].map(
            (label, index) => (
              <div
                key={index}
                className={itemClassName(index)}
                onClick={() => handleItemClick(index)}
              >
                <div className="text-3xl font-bold">
                  {["High", "42", "5", "15 mins", "3rd"][index]}
                </div>
                <div className="text-sm font-semibold">{label}</div>
                <hr className="my-2 border-t-2 border-white" />
                <p className="text-xs mt-2">
                  {
                    [
                      "This represents the highest accident level in the region.",
                      "The total number of accidents that have been reported this month.",
                      "Number of roads that are currently closed due to accidents.",
                      "The average delay experienced by commuters on a daily basis.",
                      "The congestion rank of CA compared to other regions.",
                    ][index]
                  }
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
