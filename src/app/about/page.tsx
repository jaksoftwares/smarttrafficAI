import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen">
            {/* Hero Section */}
        <section 
            className="h-[80vh] flex items-center justify-center text-center px-6 bg-white bg-cover bg-center"
            style={{ backgroundImage: "url('/images/home-bg.jpeg')" }}
        >
            <div className="max-w-3xl bg-white bg-opacity-75 p-6 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                About SmartTraffic AI
            </h1>
            <p className="mt-4 text-lg text-gray-600">
                Revolutionizing urban mobility with AI-driven traffic management solutions.
            </p>
            </div>
        </section>
      {/* Our Mission */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our goal is to leverage cutting-edge artificial intelligence to optimize traffic flow, reduce congestion, and enhance road safety for smart cities worldwide.
          </p>
          <div className="mt-10 flex justify-center">
            <Image
              src="/images/traffic.jpeg"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How SmartTraffic AI Works</h2>
          <p className="mt-4 text-lg text-gray-700">
            SmartTraffic AI integrates AI-driven traffic light optimization, real-time monitoring, and predictive analytics to enhance urban traffic flow.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <Image src="/images/lights.jpeg" alt="AI Traffic Lights" width={400} height={250} className="rounded-md" />
              <h3 className="text-xl font-semibold mt-4">AI-Powered Traffic Lights</h3>
              <p className="text-gray-600 mt-2">
                Dynamic traffic signals that adapt based on real-time congestion.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <Image src="/images/lights.jpeg" alt="Real-time Monitoring" width={400} height={250} className="rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Real-Time Traffic Monitoring</h3>
              <p className="text-gray-600 mt-2">
                AI-integrated cameras and IoT sensors for live traffic insights.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <Image src="/images/lights.jpeg" alt="Predictive Analytics" width={400} height={250} className="rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Predictive Analytics</h3>
              <p className="text-gray-600 mt-2">
                AI algorithms analyze patterns to predict and prevent congestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose SmartTraffic AI?</h2>
          <p className="mt-4 text-lg text-gray-700">
            We are dedicated to revolutionizing traffic management with real-world AI solutions.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Proven AI Technology</h3>
              <p className="text-gray-600 mt-2">
                Advanced machine learning models for accurate traffic predictions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Scalable & Smart</h3>
              <p className="text-gray-600 mt-2">
                Solutions adaptable to different cities and road networks.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Sustainable Impact</h3>
              <p className="text-gray-600 mt-2">
                Helps reduce emissions and fuel consumption for greener cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-blue-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Join the Future of Traffic Management</h2>
          <p className="mt-4 text-lg text-gray-200">
            Discover how SmartTraffic AI can transform urban transportation.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="bg-gray-200 text-blue-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
