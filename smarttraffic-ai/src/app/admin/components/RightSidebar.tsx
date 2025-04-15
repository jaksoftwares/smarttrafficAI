interface RightSidebarProps {
    children: React.ReactNode;
  }
  
  export default function RightSidebar({ children }: RightSidebarProps) {
    return (
      <aside className="fixed right-0 top-0 h-full w-96 bg-white border-l shadow-lg overflow-auto z-40">
        <div className="p-4">
          {children}
        </div>
      </aside>
    );
  }
  