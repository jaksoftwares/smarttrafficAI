export default function Home() {
    return (
      <main className="min-h-screen">
                {/* Hero Section */}
            <section
            className="h-[80vh] flex items-center justify-center text-center px-6 bg-cover bg-center relative"
            style={{ backgroundImage: "url('images/hero-bg.jpeg')" }}
            >
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="max-w-3xl relative z-10 text-white">
                <h1 className="text-4xl md:text-6xl font-bold">
                Revolutionizing Traffic Management with AI
                </h1>
                <p className="mt-4 text-lg">
                SmartTraffic AI optimizes traffic flow, enhances road safety, and improves urban mobility using real-time data and artificial intelligence.
                </p>
                <div className="mt-6">
                <a
                    href="/features"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
                >
                    Learn More
                </a>
                </div>
            </div>
            </section>
  
        {/* Features Section */}
        <section className="py-20 bg-gray-100 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-lg text-gray-700">
              Explore the cutting-edge technologies that power SmartTraffic AI.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">AI-Powered Traffic Lights</h3>
                <p className="text-gray-600 mt-2">
                  Dynamic, adaptive signals that adjust to real-time traffic conditions.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Real-time Traffic Monitoring</h3>
                <p className="text-gray-600 mt-2">
                  AI-integrated cameras and sensors for instant traffic analysis.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Predictive Analytics</h3>
                <p className="text-gray-600 mt-2">
                  AI algorithms forecast congestion and suggest optimized routes.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Impact Section */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Impact & Benefits</h2>
            <p className="mt-4 text-lg text-gray-700">
              Our AI-driven solutions improve urban mobility, reduce congestion, and save lives.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">30% Faster Commutes</h3>
                <p className="text-gray-600 mt-2">
                  AI optimizes routes and reduces unnecessary stops at traffic lights.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">20% Fewer Accidents</h3>
                <p className="text-gray-600 mt-2">
                  Enhanced enforcement and real-time alerts improve road safety.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Lower Carbon Emissions</h3>
                <p className="text-gray-600 mt-2">
                  Reduced congestion means less idling and fuel consumption.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="py-20 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Join the Future of Traffic Management</h2>
            <p className="mt-4 text-lg text-gray-200">
              Discover how SmartTraffic AI can transform urban transportation.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }
  