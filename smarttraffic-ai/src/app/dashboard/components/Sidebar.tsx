"use client"
import { useState } from 'react';
import { HiOutlineHome, HiOutlineChartBar, HiOutlineUser, HiOutlineCog, HiOutlineLogout, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="flex">
      {/* Sidebar Container */}
      <div
        className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-white h-screen p-4 transition-all duration-300 ease-in-out fixed top-0 left-0 z-50 ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-10">
          <div className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>SmartTraffic AI</div>
          <button onClick={toggleSidebar} className="text-2xl text-gray-700 dark:text-white">
            {isOpen ? '←' : '→'}
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center mb-10">
          <div className="w-12 h-12 rounded-full bg-gray-500 text-white flex items-center justify-center">
            {/* Placeholder for Profile Image */}
            <span className="text-xl">U</span>
          </div>
          <div className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <HiOutlineHome className="text-xl" />
            <p className={`${isOpen ? 'block' : 'hidden'}`}>Home</p>
          </div>
          <div className="flex items-center space-x-4">
            <HiOutlineChartBar className="text-xl" />
            <p className={`${isOpen ? 'block' : 'hidden'}`}>Analytics</p>
          </div>
          <div className="flex items-center space-x-4">
            <HiOutlineUser className="text-xl" />
            <p className={`${isOpen ? 'block' : 'hidden'}`}>User Management</p>
          </div>
          <div className="flex items-center space-x-4">
            <HiOutlineCog className="text-xl" />
            <p className={`${isOpen ? 'block' : 'hidden'}`}>Settings</p>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4 mt-6">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <HiOutlineSun className="text-xl" />
              ) : (
                <HiOutlineMoon className="text-xl" />
              )}
            </button>
            <p className={`${isOpen ? 'block' : 'hidden'}`}>Dark Mode</p>
          </div>

          {/* Logout Button */}
          <div className="flex items-center space-x-4 mt-6">
            <HiOutlineLogout className="text-xl" />
            <p className={`${isOpen ? 'block' : 'hidden'}`}>Logout</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
    </div>
  );
}
