import { Dispatch, SetStateAction, useContext } from "react";
import { DashboardContext } from "../layout";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const { setSelectedComponent } = useContext(DashboardContext);

  return (
    <aside className={`fixed left-0 top-0 h-full w-72 bg-gray-900 text-white shadow-lg transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex flex-col p-6">
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setSidebarOpen(false)}
        >
          Close Sidebar
        </button>
        <nav className="mt-6 space-y-4">
          <button onClick={() => setSelectedComponent(<div>Dashboard Content</div>)}>
            Dashboard
          </button>
          <button onClick={() => setSelectedComponent(<div>Users Content</div>)}>
            Users
          </button>
          <button onClick={() => setSelectedComponent(<div>Settings Content</div>)}>
            Settings
          </button>
        </nav>
      </div>
    </aside>
  );
}
