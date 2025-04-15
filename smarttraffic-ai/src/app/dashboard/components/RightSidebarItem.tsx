"use client"
interface RightSidebarItemProps {
  label: string; // The label of the item (e.g., "Item 1")
  onClick: () => void; // Function to call when the item is clicked
}

const RightSidebarItem = ({ label, onClick }: RightSidebarItemProps) => {
  return (
    <div 
      onClick={onClick} 
      className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all duration-200"
    >
      <span className="text-gray-800 dark:text-white">{label}</span>
    </div>
  );
};

export default RightSidebarItem;
