'use client';

import { useContext } from "react";
import { DashboardContext } from "@/context/dashboard-context";

export default function RightSidebar() {
  const { selectedComponent } = useContext(DashboardContext);

  return (
    <aside className="fixed right-0 top-0 h-full w-96 bg-white border-l shadow-lg overflow-auto z-40">
      <div className="p-4">
        {selectedComponent || (
          <p className="text-gray-500 italic">No item selected</p>
        )}
      </div>
    </aside>
  );
}
