"use client";

import { useState, createContext, ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import "@/styles/globals.css";

// Context to manage selected component
type DashboardContextType = {
  selectedComponent: ReactNode | null;
  setSelectedComponent: (comp: ReactNode | null) => void;
};

export const DashboardContext = createContext<DashboardContextType>({
  selectedComponent: null,
  setSelectedComponent: () => {},
});

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);  // Sidebar open state
  const [selectedComponent, setSelectedComponent] = useState<ReactNode | null>(null);  // Content in right sidebar
  const [rightSidebarVisible] = useState(true);  

  return (
    <html lang="en">
      <body className="h-screen bg-gray-100">
        <DashboardContext.Provider value={{ selectedComponent, setSelectedComponent }}>
          <div className="flex h-screen">
            {/* Left Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content Area */}
            <div className={`flex flex-1 ${rightSidebarVisible ? 'lg:mr-96' : ''}`}>
              <div className="flex flex-col flex-1 lg:ml-64">
                <Header />
                <main className="flex-1 p-6 overflow-auto">{children}</main>
              </div>
            </div>

            {/* Right Sidebar (Collapsible) */}
            {rightSidebarVisible && (
              <RightSidebar>
                {selectedComponent}
              </RightSidebar>
            )}
          </div>
        </DashboardContext.Provider>
      </body>
    </html>
  );
}
