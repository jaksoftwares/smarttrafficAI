interface RightSidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  children: React.ReactNode;
  toggleCollapse: () => void;
}

const RightSidebar = ({ isOpen, isCollapsed, children, toggleCollapse }: RightSidebarProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full shadow-lg transition-all duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } ${isCollapsed ? "w-16" : "w-64"} bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700`}
    >
      {/* Top Bar with title and toggle button */}
      <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 rounded-t-lg shadow-md">
        <h2
          className={`text-xl font-semibold text-gray-700 dark:text-white ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          Details
        </h2>

        {/* Toggle Collapse Button */}
        <button
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300"
          onClick={toggleCollapse}
        >
          {isCollapsed ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 9l6 6 6-6"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar Content */}
      {!isCollapsed && (
        <div className="p-4 text-gray-800 dark:text-gray-200 overflow-y-auto h-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
