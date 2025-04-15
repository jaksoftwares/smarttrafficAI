"use client";
import "@/styles/globals.css";
import { ReactNode, useState, useEffect } from "react";
import Sidebar from "./components/Sidebar"; 
import RightSidebar from "./components/RightSidebar"; // Right Sidebar component
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"; // Icons for dark/light mode toggle

interface LayoutProps {
  children: ReactNode; // Children components (the content of each page)
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open state
  const [darkMode, setDarkMode] = useState(false); // Dark mode state
  const [isRightSidebarOpen] = useState(true); // Right Sidebar open state
  const [isCollapsed, setIsCollapsed] = useState(false); // Right Sidebar collapsed state

  // Toggle dark mode on and off
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

  // Check saved dark mode preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle right sidebar visibility and collapse state
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 transition-all duration-300 ease-in-out">
        <div className="flex min-h-screen bg-white dark:bg-gray-900">
          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main Content Area */}
          <div
            className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
              isSidebarOpen ? "ml-64" : "ml-20"
            } ${
              isRightSidebarOpen
                ? isCollapsed
                  ? "mr-16"
                  : "mr-64"
                : "mr-0"
            }`}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
              {/* Left: Region Drop Down */}
              <div className="flex items-center space-x-4">
                <select className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white px-4 py-2 rounded-md">
                  <option value="region1">Region 1</option>
                  <option value="region2">Region 2</option>
                  <option value="region3">Region 3</option>
                </select>
              </div>

              {/* Right: Dark Mode Toggle */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="text-xl text-gray-700 dark:text-white"
                >
                  {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
                </button>
              </div>
            </div>

            {/* Main Content (Children Pages) */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6">
              {children} {/* Render the page content */}
            </div>
          </div>

          {/* Right Sidebar */}
          <RightSidebar
            isOpen={isRightSidebarOpen}
            toggleCollapse={toggleCollapse}
            isCollapsed={isCollapsed}
          />
        </div>
      </body>
    </html>
  );
}
