"use client"
interface RightSidebarContentProps {
  selectedItem: string | null; // The selected item to display when clicked
}

const RightSidebarContent = ({ selectedItem }: RightSidebarContentProps) => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
      {selectedItem ? (
        <div className="text-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold mb-4">Selected Content</h3>
          <p>{selectedItem}</p>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">Please select an item to view its content.</p>
      )}
    </div>
  );
};

export default RightSidebarContent;
