// app/dashboard/layout.tsx
import React from "react";
import "@/styles/globals.css"; // Optional: global styles
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartTraffic AI Control Center",
  description: "Live traffic monitoring and analysis system",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>

    <body>
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Navbar */}
      {/* <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">SmartTraffic AI</h1>
        <div className="text-sm text-gray-400">Control Center</div>
      </header> */}

      {/* Main layout */}
      <main className="flex-1 overflow-auto p-0">
        {children}
      </main>

      {/* Footer (optional) */}
      {/* <footer className="p-4 text-center text-xs text-gray-500 border-t border-gray-700">
        &copy; {new Date().getFullYear()} SmartTraffic AI. All rights reserved.
      </footer> */}
    </div>
    </body>
    </html>
  );
}
