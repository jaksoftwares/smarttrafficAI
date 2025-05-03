// DashboardPage.tsx

import Overview from './components/Overview';
import CongestedPoints from './components/CongestedPoints';
import CongestionGraph from './components/CongestionGraph';
import HourlyCongestion from './components/HourlyCOngestion';
import CameraFeed from './components/CameraFeed'; // Import the CameraFeed component
import TrafficSimulation from './components/TrafficSimulation';

export default function DashboardPage() {
  return (
    <div className="p-6 pl-0 space-y-12 ml-0">
      {/* Overview Section */}
      <Overview />

      {/* Congested Points Section with Camera Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <CongestedPoints />
        <CameraFeed />
      </div>

      {/* Congestion Trends Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <CongestionGraph />
        <HourlyCongestion />
      </div>

      {/* Traffic Simulation at the bottom */}
      <TrafficSimulation />
    </div>
  );
}
