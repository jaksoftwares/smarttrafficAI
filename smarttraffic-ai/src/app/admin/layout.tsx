'use client';

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import { DashboardProvider } from "@/context/dashboard-context";
import "@/styles/globals.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightSidebarVisible] = useState(true);

  return (
    <html lang="en">
      <body className="h-screen bg-gray-100">
        <DashboardProvider>
          <div className="flex h-screen">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className={`flex flex-1 ${rightSidebarVisible ? 'lg:mr-96' : ''}`}>
              <div className="flex flex-col flex-1 lg:ml-64">
                <Header />
                <main className="flex-1 p-6 overflow-auto">{children}</main>
              </div>
            </div>

            {rightSidebarVisible && (
              <RightSidebar />
            )}
          </div>
        </DashboardProvider>
      </body>
    </html>
  );
}
