"use client";
import "@/styles/globals.css";
import { ReactNode, useState, useEffect, createContext } from "react";
import Sidebar from "./components/Sidebar"; 
import Topbar from "./components/Topbar";
import RightSidebar from "./components/RightSidebar";

// Create Context
export const RightSidebarContext = createContext<{
  setRightSidebarContent: (content: ReactNode) => void;
  openRightSidebar: () => void;
  closeRightSidebar: () => void;
  toggleCollapse: () => void;
  isCollapsed: boolean;
}>({
  setRightSidebarContent: () => {},
  openRightSidebar: () => {},
  closeRightSidebar: () => {},
  toggleCollapse: () => {},
  isCollapsed: false,
});


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [rightSidebarContent, setRightSidebarContent] = useState<ReactNode>(null);
  const handleToggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const openRightSidebar = () => setIsRightSidebarOpen(true);
  const closeRightSidebar = () => setIsRightSidebarOpen(false);

  const toggleDarkMode = () => {
    const theme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 transition-all duration-300 ease-in-out">
        <RightSidebarContext.Provider
          value={{
            setRightSidebarContent,
            openRightSidebar,
            closeRightSidebar,
            toggleCollapse,
            isCollapsed,
          }}
        >
          <div className="flex min-h-screen bg-white dark:bg-gray-900">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

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
              <Topbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} selectedRegion={""} />
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6">
                {children}
              </div>
            </div>

            <RightSidebar
              isOpen={isRightSidebarOpen}
              isCollapsed={isCollapsed}
              toggleCollapse={handleToggleCollapse} 
            >
              {rightSidebarContent}
            </RightSidebar>
          </div>
        </RightSidebarContext.Provider>
      </body>
    </html>
  );
}
