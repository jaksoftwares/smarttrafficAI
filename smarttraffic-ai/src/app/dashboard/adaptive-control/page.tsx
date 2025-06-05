'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function AdaptiveControl() {
  // Example states for adaptive signal control data
  const [trafficFlow, setTrafficFlow] = useState<number | null>(null);
  const [avgWaitTime, setAvgWaitTime] = useState<number | null>(null);
  const [signalStatus, setSignalStatus] = useState<'Adaptive' | 'Fixed' | 'Offline'>('Adaptive');
  const [loading, setLoading] = useState(false);

  // Simulate fetching control data
  useEffect(() => {
    setLoading(true);

    // Placeholder: Replace with real API call
    setTimeout(() => {
      setTrafficFlow(1200);       // vehicles per hour
      setAvgWaitTime(35);         // seconds
      setSignalStatus('Adaptive');
      setLoading(false);
    }, 1000);
  }, []);

  // Example handler to toggle signal mode (Adaptive / Fixed)
  const toggleSignalMode = () => {
    setSignalStatus((prev) => (prev === 'Adaptive' ? 'Fixed' : 'Adaptive'));
  };

  return (
    <div className="p-6 space-y-6 min-h-full bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-2">Adaptive Signal Control Dashboard</h1>

      <p className="text-gray-300 max-w-xl">
        Adaptive signal control optimizes traffic light timing in real-time based on traffic flow data,
        reducing congestion and improving traffic efficiency across intersections.
      </p>

      {/* Metrics cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <Card className="bg-gradient-to-r from-green-700 to-green-500 p-6 text-center">
          <p className="text-sm opacity-80">Current Traffic Flow</p>
          <p className="text-3xl font-semibold">{loading ? 'Loading...' : `${trafficFlow} vehicles/hr`}</p>
        </Card>

        <Card className="bg-gradient-to-r from-blue-700 to-blue-500 p-6 text-center">
          <p className="text-sm opacity-80">Average Wait Time</p>
          <p className="text-3xl font-semibold">{loading ? 'Loading...' : `${avgWaitTime} seconds`}</p>
        </Card>

        <Card className="bg-gradient-to-r from-purple-700 to-purple-500 p-6 text-center">
          <p className="text-sm opacity-80">Signal Mode</p>
          <p className="text-3xl font-semibold">{signalStatus}</p>
          <Button
            onClick={toggleSignalMode}
            variant="secondary"
            className="mt-4"
            disabled={loading}
            aria-label="Toggle Signal Mode"
          >
            Toggle to {signalStatus === 'Adaptive' ? 'Fixed' : 'Adaptive'}
          </Button>
        </Card>
      </div>

      {/* Traffic Signal Map Placeholder */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Traffic Signal Status Map</h2>
        <div className="w-full h-64 bg-gray-800 rounded-md flex items-center justify-center text-gray-500 italic">
          {/* Replace with actual map or visualization component */}
          Traffic signal map visualization coming soon...
        </div>
      </section>

      {/* Controls / Settings */}
      <section className="mt-8 max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Adaptive Control Settings</h2>
        <p className="mb-4 text-gray-300">
          Adjust the parameters of the adaptive signal control system to optimize traffic flow for your area.
        </p>
        <Button
          onClick={() => alert('Settings panel coming soon!')}
          disabled={loading}
          aria-label="Open Adaptive Control Settings"
        >
          Open Settings
        </Button>
      </section>
    </div>
  );
}
