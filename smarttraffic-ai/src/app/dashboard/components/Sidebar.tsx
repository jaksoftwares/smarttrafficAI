"use client";

import { JSX, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineBell,
  HiOutlineExclamation,
  HiOutlineAdjustments,
  HiOutlineCloud,
  HiOutlineMap,
  HiOutlineCamera,
} from "react-icons/hi";



interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };
  const pathname = usePathname();

  return (
    
    <div className="flex">
      <div
        className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-white h-screen p-4 transition-all duration-300 ease-in-out fixed top-0 left-0 z-50 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-10">
          <div className={`text-xl font-bold ${isOpen ? "block" : "hidden"}`}>
            SmartTraffic AI
          </div>
          <button
            onClick={toggleSidebar}
            className="text-2xl text-gray-700 dark:text-white"
          >
            {isOpen ? "←" : "→"}
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center mb-10">
          <div className="w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center">
            <span className="text-xl">U</span>
          </div>
          <div className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
            <p className="font-semibold">Joseph Kirika</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <NavItem icon={<HiOutlineHome />} label="Home" path="/dashboard" />
          <NavItem icon={<HiOutlineChartBar />} label="Congestion Trends" path="/dashboard/congestion/trends" />
          <NavItem icon={<HiOutlineCamera />} label="Live Traffic" path="/management/live-traffic" newTab />
          <NavItem icon={<HiOutlineMap />} label="Real-time Traffic" path="/dashboard/realtime-traffic" />
          <NavItem icon={<HiOutlineAdjustments />} label="Adaptive Control" path="/dashboard/adaptive-control" />
          <NavItem icon={<HiOutlineExclamation />} label="Incidents" path="/dashboard/incidents" />
          <NavItem icon={<HiOutlineChartBar />} label="Congestion Mgmt" path="/dashboard/congestion/management" />
          <NavItem icon={<HiOutlineCloud />} label="Weather" path="/dashboard/weather" />
          <NavItem icon={<HiOutlineUser />} label="User Management" path="/dashboard/users" />
          <NavItem icon={<HiOutlineCog />} label="Settings" path="/dashboard/settings" />
          <NavItem icon={<HiOutlineBell />} label="Notifications" path="/dashboard/notifications" />

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4 mt-6">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <HiOutlineSun className="text-xl" />
              ) : (
                <HiOutlineMoon className="text-xl" />
              )}
            </button>
            <p className={`${isOpen ? "block" : "hidden"}`}>Dark Mode</p>
          </div>

          {/* Logout */}
          <div
            className="flex items-center space-x-4 mt-6 cursor-pointer"
            onClick={() => navigateTo("/dashboard/logout")}
          >
            <HiOutlineLogout className="text-xl" />
            <p className={`${isOpen ? "block" : "hidden"}`}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Reusable NavItem Component
  function NavItem({
  icon,
  label,
  path,
  newTab = false,
}: {
  icon: JSX.Element;
  label: string;
  path: string;
  newTab?: boolean;
}) {
  const isActive = pathname === path;

  const content = (
    <div
      className={`flex items-center space-x-4 p-2 rounded-lg ${
        isActive
          ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
          : "hover:bg-gray-100 dark:hover:bg-gray-700"
      }`}
    >
      <div className="text-xl">{icon}</div>
      <p className={`${isOpen ? "block" : "hidden"}`}>{label}</p>
    </div>
  );

  return newTab ? (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      {content}
    </a>
  ) : (
    <div className="cursor-pointer" onClick={() => navigateTo(path)}>
      {content}
    </div>
  );
}

}
