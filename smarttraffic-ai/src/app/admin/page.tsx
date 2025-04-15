"use client";
import OverviewStats from "./components/OverviewStats";
import RecentActivity from "./components/RecentActivity";
import PerformanceChart from "./components/PerformanceChart";
import EngagementChart from "./components/EngagementChart";
import QuickActions from "./components/QuickActions";

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <h1 className="text-3xl font-semibold text-gray-900">Admin Overview</h1>

      {/* Overview Stats (Responsive Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewStats />
      </div>

      {/* Charts & Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PerformanceChart />
        <EngagementChart />
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
};

export default AdminDashboard;
