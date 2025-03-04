"use client";

import { JSX, useState } from "react";
import { PlayCircle, MonitorSmartphone, Settings, Eye } from "lucide-react";

export default function AIDemo() {
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-24 text-center">
        <h1 className="text-4xl font-bold">AI-Powered Traffic Management</h1>
        <p className="mt-4 text-lg">
          Experience the future of urban mobility through our SmartTraffic AI Demo.
        </p>
      </div>

      {/* AI Simulation Demo */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Live AI Traffic Simulation</h2>
        <p className="text-gray-600 text-center mt-2">
          See how AI optimizes traffic flow in real-time.
        </p>
        
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-3xl h-96 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg">
            {isDemoRunning ? (
              <p className="text-lg font-medium">🚦 AI Simulation Running...</p>
            ) : (
              <p className="text-lg font-medium">🛑 Click &quot;Start Demo&quot; to begin.</p>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsDemoRunning(!isDemoRunning)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            <PlayCircle className="mr-2" /> {isDemoRunning ? "Stop Demo" : "Start Demo"}
          </button>
        </div>
      </div>

      {/* Key Features */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Key Features of the AI Demo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <FeatureCard
            icon={<MonitorSmartphone size={32} className="text-blue-600" />}
            title="Real-Time Monitoring"
            description="AI continuously analyzes live traffic data to optimize road usage."
          />
          <FeatureCard
            icon={<Settings size={32} className="text-blue-600" />}
            title="Adaptive Traffic Control"
            description="AI dynamically adjusts traffic lights and congestion points."
          />
          <FeatureCard
            icon={<Eye size={32} className="text-blue-600" />}
            title="Predictive Analysis"
            description="Machine learning models predict and prevent future traffic issues."
          />
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto py-16 px-6 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-semibold text-center">How It Works</h2>
        <div className="mt-8 space-y-6">
          <Step number="1" title="Data Collection" description="Cameras and sensors gather real-time traffic data." />
          <Step number="2" title="AI Processing" description="The AI model analyzes patterns and predicts congestion." />
          <Step number="3" title="Traffic Optimization" description="AI dynamically adjusts signals and traffic flow." />
          <Step number="4" title="Real-Time Updates" description="Instant alerts and optimizations improve traffic efficiency." />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-semibold">Try the SmartTraffic AI Demo</h2>
        <p className="text-gray-600 mt-2">Experience how AI is transforming urban mobility.</p>
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
            Get Access
          </button>
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

// Step Component
function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-blue-600 text-white h-10 w-10 flex items-center justify-center rounded-full text-lg font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
