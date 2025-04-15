// /app/admin/components/Header.tsx
"use client";

import { useState } from "react";
import { Bell, Search, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white shadow p-4 ml-12">
      {/* Left Section: Page Title */}
      <h2 className="text-xl font-semibold">Control Center</h2>

      {/* Center Section: Search Bar */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-72 px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-2 text-gray-500" size={18} />
      </div>

      {/* Right Section: Notifications & Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Section */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
          >
            <Image
              src="/images/profile.jpeg" // Replace with actual profile image path
              alt="Admin"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="hidden md:block font-medium">Joseph</span>
            <ChevronDown size={18} />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
              <a href="/admin/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
              <a href="/admin/settings" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </a>
              <hr />
              <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
