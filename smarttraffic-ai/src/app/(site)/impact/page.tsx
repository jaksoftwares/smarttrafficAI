export default function Impact() {
    return (
      <section className="min-h-screen bg-gray-100 py-16 px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Transforming Urban Mobility with AI
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            SmartTraffic AI is revolutionizing traffic management by reducing congestion, enhancing safety, and improving efficiency through real-time AI-powered insights.
          </p>
        </div>
  
        {/* Key Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-4xl font-bold text-blue-600">30%</h2>
            <p className="mt-2 text-gray-700">Reduction in Traffic Congestion</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-4xl font-bold text-blue-600">40%</h2>
            <p className="mt-2 text-gray-700">Decrease in Road Accidents</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-4xl font-bold text-blue-600">25%</h2>
            <p className="mt-2 text-gray-700">Increase in Traffic Flow Efficiency</p>
          </div>
        </div>
  
        {/* Case Studies Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Real-World Impact
          </h2>
          <p className="mt-2 text-gray-600 text-center">
            See how SmartTraffic AI is making a difference in cities worldwide.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">New York City</h3>
              <p className="mt-2 text-gray-600">
                Implementing SmartTraffic AI reduced average commute times by 20% and improved emergency response rates.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">London</h3>
              <p className="mt-2 text-gray-600">
                AI-driven traffic management decreased air pollution levels by optimizing vehicle flow and reducing idle time.
              </p>
            </div>
          </div>
        </div>
  
        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            What Experts Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-700">
              &quot;SmartTraffic AI has significantly improved traffic flow and safety in our city, making roads safer for everyone.&quot;
              </p>
              <p className="mt-4 text-blue-600 font-semibold">— John Doe, Traffic Engineer</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-700">
              &quot;A game-changer for smart city infrastructure, optimizing transportation efficiency like never before.&quot;
              </p>
              <p className="mt-4 text-blue-600 font-semibold">— Sarah Smith, Urban Planner</p>
            </div>
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Be Part of the Change
          </h2>
          <p className="mt-2 text-gray-600">
            Join us in making traffic smarter and cities more livable.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    );
  }
  