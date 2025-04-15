"use client";
import { useState } from "react";
import RightSidebarItem from "./RightSidebarItem"; // Import the clickable item component
import RightSidebarContent from "./RightSidebarContent";

interface RightSidebarProps {
  isOpen: boolean; // Determines if the sidebar is open or closed
  toggleCollapse: () => void; // Toggle collapse functionality
  isCollapsed: boolean; // Collapse state
}

const RightSidebar = ({ isOpen, toggleCollapse, isCollapsed }: RightSidebarProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null); // Track the selected item

  // Handle item click
  const handleItemClick = (item: string) => {
    setSelectedItem(item); // Set the selected item
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } ${isCollapsed ? "w-16" : "w-64"} bg-white dark:bg-gray-800`}
    >
      {/* Sidebar Header for Collapsing */}
      <div className="flex justify-between items-center p-4">
        <h2 className={`text-lg font-semibold text-gray-700 dark:text-white ${isCollapsed ? "hidden" : ""}`}>
          Details
        </h2>
        <button
          onClick={toggleCollapse}
          className="text-xl text-gray-700 dark:text-white"
        >
          {isCollapsed ? "→" : "←"} {/* Collapsing arrow */}
        </button>
      </div>

      {/* Collapsible Sidebar Content */}
      <div className={`space-y-4 mt-4 ${isCollapsed ? "hidden" : ""}`}>
        <RightSidebarItem
          onClick={() => handleItemClick("Item 1")}
          label="Item 1"
        />
        <RightSidebarItem
          onClick={() => handleItemClick("Item 2")}
          label="Item 2"
        />
        <RightSidebarItem
          onClick={() => handleItemClick("Item 3")}
          label="Item 3"
        />
      </div>

      {/* Display Content based on Selected Item */}
      <RightSidebarContent selectedItem={selectedItem} />
    </div>
  );
};

export default RightSidebar;
