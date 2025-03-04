// import Image from "next/image";
import {  Car, Eye, TrendingUp, Database, Shield, Map } from "lucide-react";

export default function Features() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center text-center px-6 bg-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            SmartTraffic AI Features
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the powerful AI-driven solutions that optimize urban traffic flow and enhance road safety.
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our cutting-edge AI technology provides the following smart traffic solutions:
          </p>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <Car size={48} className="text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">AI-Powered Traffic Signals</h3>
              <p className="text-gray-600 mt-2">
                Smart traffic lights adjust dynamically based on real-time congestion levels, reducing unnecessary delays.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <Eye size={48} className="text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Real-Time Monitoring</h3>
              <p className="text-gray-600 mt-2">
                AI-integrated cameras and IoT sensors track vehicle and pedestrian movement to enhance road safety.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <TrendingUp size={48} className="text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Predictive Traffic Analytics</h3>
              <p className="text-gray-600 mt-2">
                Advanced machine learning models analyze patterns to predict and prevent traffic congestion.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <Database size={48} className="text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Big Data Integration</h3>
              <p className="text-gray-600 mt-2">
                Processes large volumes of traffic data for accurate decision-making and efficient city planning.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <Shield size={48} className="text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Enhanced Road Safety</h3>
              <p className="text-gray-600 mt-2">
                AI-driven accident detection and automatic emergency response notifications to improve safety.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <Map size={48} className="text-blue-500 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Smart Navigation Assistance</h3>
              <p className="text-gray-600 mt-2">
                AI-powered route suggestions help drivers take the most efficient paths, reducing travel time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Benefits of SmartTraffic AI</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our AI-driven traffic management system brings significant advantages to urban transportation:
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Reduced Traffic Congestion</h3>
              <p className="text-gray-600 mt-2">
                AI-optimized traffic flow leads to less time spent in traffic.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Lower Fuel Consumption</h3>
              <p className="text-gray-600 mt-2">
                Smarter navigation reduces fuel usage and carbon emissions.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Improved Public Transport Efficiency</h3>
              <p className="text-gray-600 mt-2">
                AI-driven systems enhance bus and train scheduling for better reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-blue-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Experience the Future of Traffic Management</h2>
          <p className="mt-4 text-lg text-gray-200">
            Discover how SmartTraffic AI can transform your city&apos;s transportation network.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="bg-gray-200 text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
