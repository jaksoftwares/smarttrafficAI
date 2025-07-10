
import { SignalHigh, BrainCircuit, Camera, BarChart4, ArrowRight, Monitor, Eye, TrendingUp, Database, Shield, Navigation } from "lucide-react";

// Stylish underline component
const StylishUnderline = ({ color = "text-blue-400", position = "top" }: { color?: string; position?: "top" | "bottom" }) => (
  <div className={`w-full flex justify-center ${position === "top" ? "mb-8" : "mt-8"}`}>
    <svg width="200" height="20" viewBox="0 0 200 20" className={`${color} animate-pulse`}>
      <defs>
        <linearGradient id={`underline-gradient-${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 10 10 Q 100 5, 190 10"
        stroke={`url(#underline-gradient-${position})`}
        strokeWidth="2"
        fill="none"
        className="animate-pulse"
      />
      <circle r="2" fill="currentColor" cx="10" cy="10" className="animate-ping">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle r="2" fill="currentColor" cx="190" cy="10" className="animate-ping">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>
    </svg>
  </div>
);

// Custom animations styles
const animationStyles = `
  .fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .slideInLeft {
    animation: slideInLeft 0.8s ease-out forwards;
  }
  
  .slideInRight {
    animation: slideInRight 0.8s ease-out forwards;
  }
  
  .scaleIn {
    animation: scaleIn 0.6s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  `;

export default function Home() {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
        <main className="min-h-screen">
                {/* Hero Section */}
            <section
            className="h-[80vh] flex items-center justify-center text-center px-6 bg-cover bg-center relative"
            style={{ backgroundImage: "url('images/traffic.jpg')" }}
            >
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="max-w-3xl relative z-10 text-white">
                <StylishUnderline color="text-white" position="top" />
                <h1 className="text-4xl md:text-6xl font-bold">
                Revolutionizing Traffic Management with AI
                </h1>
                <p className="mt-4 text-lg">
                SmartTraffic AI optimizes traffic flow, enhances road safety, and improves urban mobility using real-time data and artificial intelligence.
                </p>
                <div className="mt-6">
                    <a
                       href="/about"
                       className="bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 inline-flex items-center gap-3"
                    >
                    Learn More <ArrowRight size={20} />
                    </a>

                </div>
                <StylishUnderline color="text-white" position="bottom" />
            </div>
            </section>       
            
            
            
             {/* How It Works Section */}  
    <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden -mt-16">
      {/* Overlay to blend with hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 via-gray-950/80 to-transparent z-5"></div>
      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.1),transparent)] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <StylishUnderline color="text-yellow-400" position="top" />
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-20 animate-pulse">
          How SmartTraffic AI Works
        </h2>

        {/* Arc Layout Container */}
        <div className="relative flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-6 items-center">
          
          {/* Step 1 - Top Left */}
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl text-left hover:bg-white/15 hover:border-yellow-300/30 transition-all duration-500 hover:scale-110 hover:shadow-yellow-400/20 lg:transform lg:-rotate-12 lg:translate-y-8 z-10 hover:z-50 hover:lg:rotate-0 hover:lg:translate-y-0">
            <div className="bg-gradient-to-br from-yellow-400 to-white p-3 rounded-xl w-fit mb-6">
              <Camera size={40} className="text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">1. Data Collection</h3>
            <p className="text-gray-200 leading-relaxed">
              Advanced IoT sensors and AI-powered cameras continuously monitor traffic patterns, vehicle counts, speed variations, and incident detection across all road networks in real-time.
            </p>
          </div>

          {/* Step 2 - Top Center Left */}
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl text-left hover:bg-white/15 hover:border-yellow-300/30 transition-all duration-500 hover:scale-110 hover:shadow-yellow-400/20 lg:transform lg:-rotate-6 lg:translate-y-4 z-10 hover:z-50 hover:lg:rotate-0 hover:lg:translate-y-0">
            <div className="bg-gradient-to-br from-yellow-400 to-white p-3 rounded-xl w-fit mb-6">
              <BrainCircuit size={40} className="text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">2. AI Processing</h3>
            <p className="text-gray-200 leading-relaxed">
              Sophisticated machine learning algorithms process millions of data points, analyzing traffic patterns, predicting congestion hotspots, and generating intelligent routing recommendations.
            </p>
          </div>

          {/* Step 3 - Center */}
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl text-left hover:bg-white/15 hover:border-yellow-300/30 transition-all duration-500 hover:scale-110 hover:shadow-yellow-400/20 lg:transform lg:rotate-0 z-10 hover:z-50">
            <div className="bg-gradient-to-br from-yellow-400 to-white p-3 rounded-xl w-fit mb-6">
              <SignalHigh size={40} className="text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">3. Smart Signals</h3>
            <p className="text-gray-200 leading-relaxed">
              Intelligent traffic light systems automatically adjust signal timing, phase duration, and coordination patterns based on real-time traffic conditions to maximize flow efficiency and minimize delays.
            </p>
          </div>

          {/* Step 4 - Top Center Right */}
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl text-left hover:bg-white/15 hover:border-yellow-300/30 transition-all duration-500 hover:scale-110 hover:shadow-yellow-400/20 lg:transform lg:rotate-6 lg:translate-y-4 z-10 hover:z-50 hover:lg:rotate-0 hover:lg:translate-y-0">
            <div className="bg-gradient-to-br from-yellow-400 to-white p-3 rounded-xl w-fit mb-6">
              <BarChart4 size={40} className="text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">4. Analytics & Insights</h3>
            <p className="text-gray-200 leading-relaxed">
              Comprehensive data analytics generate detailed reports on traffic performance, environmental impact, safety metrics, and optimization opportunities for strategic urban planning decisions.
            </p>
          </div>

          {/* Step 5 - Top Right */}
          <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl text-left hover:bg-white/15 hover:border-yellow-300/30 transition-all duration-500 hover:scale-110 hover:shadow-yellow-400/20 lg:transform lg:rotate-12 lg:translate-y-8 z-10 hover:z-50 hover:lg:rotate-0 hover:lg:translate-y-0">
            <div className="bg-gradient-to-br from-yellow-400 to-white p-3 rounded-xl w-fit mb-6">
              <Monitor size={40} className="text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">5. Control Center Dashboard</h3>
            <p className="text-gray-200 leading-relaxed">
              Centralized command center with real-time monitoring dashboards, emergency response coordination, traffic flow visualization, and comprehensive system oversight for city-wide traffic management operations.
            </p>
          </div>
        </div>
      </div>
        
    </section>


  
        {/* Key Features Section */}
        <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white relative overflow-hidden -mt-12">
          {/* Seamless transition overlay */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 via-gray-900/60 to-transparent z-5"></div>
          {/* Background elements for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent)] opacity-25"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,215,0,0.08),transparent)] opacity-35"></div>
          
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <StylishUnderline color="text-blue-400" position="top" />
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-8 animate-pulse">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 mb-20 max-w-4xl mx-auto leading-relaxed">
              Our cutting-edge AI technology provides the following smart traffic solutions
            </p>

            {/* Features Arrangement - Staggered Layout */}
            <div className="space-y-12">
              
              {/* Row 1 - Center Feature */}
              <div className="flex justify-center">
                <div className="w-full max-w-md bg-white/12 backdrop-blur-xl p-10 rounded-3xl border border-yellow-300/40 shadow-2xl text-center hover:bg-white/16 hover:border-yellow-300/60 hover:scale-105 hover:shadow-yellow-400/20 transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-yellow-400 to-white p-5 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <SignalHigh size={56} className="text-gray-900" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">AI-Powered Traffic Signals</h3>
                  <p className="text-gray-200 leading-relaxed text-lg">
                    Smart traffic lights adjust dynamically based on real-time congestion levels, reducing unnecessary delays and optimizing traffic flow throughout the city.
                  </p>
                </div>
              </div>

              {/* Row 2 - Two Features */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/30 shadow-2xl text-center hover:bg-white/14 hover:border-white/50 hover:scale-105 hover:shadow-blue-400/15 transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-yellow-400 to-white p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye size={48} className="text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">Real-Time Monitoring</h3>
                  <p className="text-gray-200 leading-relaxed">
                    AI-integrated cameras and IoT sensors track vehicle and pedestrian movement to enhance road safety and provide instant traffic analysis.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/30 shadow-2xl text-center hover:bg-white/14 hover:border-white/50 hover:scale-105 hover:shadow-green-400/15 transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-yellow-400 to-white p-4 rounded-xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp size={48} className="text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">Predictive Traffic Analytics</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Advanced machine learning models analyze patterns to predict and prevent traffic congestion before it occurs, enabling proactive management.
                  </p>
                </div>
              </div>

              {/* Row 3 - Three Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/8 backdrop-blur-xl p-6 rounded-xl border border-white/25 shadow-xl text-center hover:bg-white/12 hover:border-white/40 hover:scale-105 hover:shadow-purple-400/15 transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-yellow-400 to-white p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Database size={40} className="text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">Big Data Integration</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    Processes large volumes of traffic data for accurate decision-making and efficient city planning, leveraging comprehensive data analytics.
                  </p>
                </div>

                <div className="bg-white/8 backdrop-blur-xl p-6 rounded-xl border border-white/25 shadow-xl text-center hover:bg-white/12 hover:border-white/40 hover:scale-105 hover:shadow-red-400/15 transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-yellow-400 to-white p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield size={40} className="text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">Enhanced Road Safety</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    AI-driven accident detection and automatic emergency response notifications to improve safety and reduce response times during incidents.
                  </p>
                </div>

                <div className="bg-white/8 backdrop-blur-xl p-6 rounded-xl border border-white/25 shadow-xl text-center hover:bg-white/12 hover:border-white/40 hover:scale-105 hover:shadow-orange-400/15 transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-yellow-400 to-white p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Navigation size={40} className="text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">Smart Navigation Assistance</h3>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    AI-powered route suggestions help drivers take the most efficient paths, reducing travel time and optimizing overall traffic distribution.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Animated Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <svg viewBox="0 0 1200 800" className="w-full h-full text-yellow-400/50">
                {/* Animated hexagon pattern */}
                <defs>
                  <pattern id="hexagon-animated" width="80" height="80" patternUnits="userSpaceOnUse">
                    <polygon 
                      points="40,8 65,25 65,50 40,67 15,50 15,25" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="0.8"
                      className="animate-pulse"
                      style={{animationDuration: '3s'}}
                    />
                    <polygon 
                      points="40,15 58,27 58,45 40,57 22,45 22,27" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="0.4"
                      opacity="0.6"
                      className="animate-pulse"
                      style={{animationDuration: '4s', animationDelay: '1s'}}
                    />
                  </pattern>
                  
                  {/* Animated gradient for snake path */}
                  <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0">
                      <animate attributeName="stop-opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="currentColor" stopOpacity="1">
                      <animate attributeName="stop-opacity" values="1;0;1" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0">
                      <animate attributeName="stop-opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#hexagon-animated)" />
                
                {/* Dotted snake-like animated path */}
                <path 
                  d="M 50 400 Q 200 200, 400 350 Q 600 500, 800 300 Q 1000 100, 1150 250"
                  stroke="url(#snakeGradient)"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  fill="none"
                  opacity="0.8"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-50;0" dur="6s" repeatCount="indefinite" />
                </path>
                
                <path 
                  d="M 100 600 Q 300 400, 500 550 Q 700 700, 900 500 Q 1100 300, 1200 450"
                  stroke="url(#snakeGradient)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                  fill="none"
                  opacity="0.6"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-40;0" dur="8s" repeatCount="indefinite" />
                </path>
                
                {/* Enhanced connecting lines with animation */}
                <line x1="600" y1="150" x2="400" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="600" y1="150" x2="800" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
                </line>
                <line x1="300" y1="500" x2="500" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="1s" />
                </line>
                <line x1="700" y1="350" x2="900" y2="500" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
                </line>
                <line x1="400" y1="350" x2="600" y2="500" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="2s" />
                </line>
                <line x1="800" y1="350" x2="600" y2="500" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="3s" repeatCount="indefinite" begin="2.5s" />
                </line>
                
                {/* Enhanced pulsing nodes with scaling animation */}
                <circle cx="600" cy="150" r="5" fill="currentColor" opacity="0.8">
                  <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="350" r="4" fill="currentColor" opacity="0.7">
                  <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="800" cy="350" r="4" fill="currentColor" opacity="0.7">
                  <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="300" cy="500" r="4" fill="currentColor" opacity="0.7">
                  <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
                </circle>
                <circle cx="600" cy="500" r="4" fill="currentColor" opacity="0.7">
                  <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="2s" />
                </circle>
                <circle cx="900" cy="500" r="4" fill="currentColor" opacity="0.7">
                  <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" begin="2.5s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" begin="2.5s" />
                </circle>
                
                {/* Floating orbiting elements */}
                <circle cx="500" cy="250" r="3" fill="currentColor" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" values="0 500 250;360 500 250" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="700" cy="250" r="3" fill="currentColor" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" values="0 700 250;-360 700 250" dur="12s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="450" cy="425" r="2" fill="currentColor" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" values="0 450 425;360 450 425" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="750" cy="425" r="2" fill="currentColor" opacity="0.5">
                  <animateTransform attributeName="transform" type="rotate" values="0 750 425;-360 750 425" dur="9s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <StylishUnderline color="text-blue-400" position="bottom" />
          </div>
        </section>




  
        {/* Impact Section */}
        <section className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden -mt-12">
          {/* Seamless transition overlay */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-950/80 via-black/60 to-transparent z-5"></div>
          {/* Background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.05),transparent)] opacity-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(255,215,0,0.05),transparent)] opacity-40"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <StylishUnderline color="text-green-400" position="top" />
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-6 animate-pulse">
                Measurable Impact & Results
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our AI-driven solutions deliver quantifiable improvements in urban mobility, safety, and environmental sustainability
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Stat 1 - Faster Commutes */}
              <div className="bg-white/8 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl text-center group">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-white text-3xl font-bold">⚡</div>
                </div>
                <div className="mb-4">
                  <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-green-400 to-emerald-300 text-transparent bg-clip-text">
                    30%
                  </span>
                  <div className="text-sm text-green-400 font-semibold uppercase tracking-wider mt-2">
                    Reduced congestion in intersections .
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Faster Commutes</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-optimized traffic flow reduces unnecessary stops and intelligently manages signal timing across city networks
                </p>
              </div>

              {/* Stat 2 - Fewer Accidents */}
              <div className="bg-white/8 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl text-center group">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-white text-3xl font-bold">🛡️</div>
                </div>
                <div className="mb-4">
                  <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                    45%
                  </span>
                  <div className="text-sm text-blue-400 font-semibold uppercase tracking-wider mt-2">
                    Decrease in Accidents
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Enhanced Safety</h3>
                <p className="text-gray-300 leading-relaxed">
                  Real-time monitoring and predictive analytics prevent incidents before they occur, protecting lives and property
                </p>
              </div>

              {/* Stat 3 - Carbon Reduction */}
              <div className="bg-white/8 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl text-center group">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <div className="text-white text-3xl font-bold">🌱</div>
                </div>
                <div className="mb-4">
                  <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 to-orange-300 text-transparent bg-clip-text">
                    25%
                  </span>
                  <div className="text-sm text-yellow-400 font-semibold uppercase tracking-wider mt-2">
                    CO₂ Emissions Cut
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Greener Cities</h3>
                <p className="text-gray-300 leading-relaxed">
                  Optimized traffic patterns reduce idle time and fuel consumption, contributing to sustainable urban development
                </p>
              </div>
            </div>

            {/* Target Goals Section */}
            <div className="bg-gradient-to-r from-white/5 to-yellow-400/5 backdrop-blur-xl rounded-2xl border border-yellow-400/20 p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-yellow-300 to-white text-transparent bg-clip-text">
                  Our Ambitious Targets
                </h3>
                <p className="text-gray-400 text-sm">
                  What we&apos;re aiming to achieve with full system deployment
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                
                <div className="space-y-2">
                  <div className="text-3xl font-black text-yellow-400 flex items-center justify-center gap-2">
                    2.5M+
                    <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-full">TARGET</span>
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Daily Vehicles to Manage</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-black text-blue-400 flex items-center justify-center gap-2">
                    99.7%
                    <span className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full">GOAL</span>
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Target System Uptime</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-black text-green-400 flex items-center justify-center gap-2">
                    15sec
                    <span className="text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded-full">AIM</span>
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Target Response Time</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-black text-purple-400 flex items-center justify-center gap-2">
                    500+
                    <span className="text-xs bg-purple-400/20 text-purple-300 px-2 py-1 rounded-full">VISION</span>
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">Smart Intersections Planned</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 italic">
                  * These targets represent our roadmap for comprehensive smart traffic implementation
                </p>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg viewBox="0 0 1200 600" className="w-full h-full text-yellow-400/20">
                {/* Subtle grid pattern */}
                <defs>
                  <pattern id="impact-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#impact-grid)" />
                
                {/* Floating elements */}
                <circle cx="200" cy="150" r="2" fill="currentColor" className="animate-pulse" style={{animationDelay: '1s'}} />
                <circle cx="800" cy="200" r="2" fill="currentColor" className="animate-pulse" style={{animationDelay: '2s'}} />
                <circle cx="1000" cy="400" r="2" fill="currentColor" className="animate-pulse" style={{animationDelay: '3s'}} />
              </svg>
            </div>
            <StylishUnderline color="text-green-400" position="bottom" />
          </div>
        </section>
  



        {/* Call-to-Action Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 via-blue-950 to-black text-white relative overflow-hidden -mt-12">
          {/* Seamless transition overlay */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-900/80 via-blue-950/60 to-transparent z-5"></div>
          {/* Background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent)] opacity-60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,215,0,0.1),transparent)] opacity-40"></div>
          
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-yellow-300 text-transparent bg-clip-text mb-6 animate-pulse">
                Ready to Transform Your City?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Join the smart cities revolution and discover how SmartTraffic AI can optimize your urban transportation infrastructure
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-white/10 mb-12">
                <p className="text-gray-400 text-sm mb-4">
                  🚀 <strong className="text-white">Limited Beta Program</strong> - Be among the first cities to experience next-generation traffic management
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <span>✓</span> Free consultation
                  </div>
                  <div className="flex items-center justify-center gap-2 text-blue-400">
                    <span>✓</span> Custom implementation
                  </div>
                  <div className="flex items-center justify-center gap-2 text-yellow-400">
                    <span>✓</span> 24/7 support included
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="/contact"
                className="bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 inline-flex items-center gap-3"
              >
                Start Your Journey 
                <ArrowRight 
                  size={24} 
                  className="group-hover:translate-x-1 transition-transform duration-300" 
                />
              </a>
              
              <a
                href="/demo"
                className="bg-transparent text-white px-10 py-4 rounded-2xl text-xl font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-yellow-400/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group"
              >
                Watch Demo 
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">▶️</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500">
              <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">Trusted by Forward-Thinking Cities</p>
              <div className="grid grid-cbg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-2xl text-xl font-bold hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25 groupols-2 md:grid-cols-4 gap-8 items-center">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">50+</div>
                  <div className="text-xs text-gray-400">Cities Interested</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-400 mb-1 group-hover:text-cyan-400 transition-colors duration-300">15</div>
                  <div className="text-xs text-gray-400">Pilot Programs</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">98%</div>
                  <div className="text-xs text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-green-400 mb-1 group-hover:text-green-300 transition-colors duration-300">24/7</div>
                  <div className="text-xs text-gray-400">Expert Support</div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 text-sm mb-4">
                Have questions? Our smart city experts are here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a href="mailto:hello@smarttraffic.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                  
                </a>
                <a href="tel:+254113129442" className="text-green-400 hover:text-green-300 transition-colors">
                   +254113129442 TRAFFIC
                </a>
                <a href="/schedule" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                   Schedule a Call
                </a>
              </div>
            </div>

            {/* Enhanced Animated Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-15">
              <svg viewBox="0 0 1200 600" className="w-full h-full text-blue-400/40">
                {/* Enhanced network pattern */}
                <defs>
                  <pattern id="cta-network-enhanced" width="120" height="120" patternUnits="userSpaceOnUse">
                    <circle cx="60" cy="60" r="2" fill="currentColor" opacity="0.8">
                      <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="30" cy="30" r="1" fill="currentColor" opacity="0.5">
                      <animate attributeName="r" values="1;2;1" dur="4s" repeatCount="indefinite" begin="1s" />
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" begin="1s" />
                    </circle>
                    <circle cx="90" cy="90" r="1" fill="currentColor" opacity="0.5">
                      <animate attributeName="r" values="1;2;1" dur="4s" repeatCount="indefinite" begin="2s" />
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" begin="2s" />
                    </circle>
                    {/* Connecting lines within pattern */}
                    <line x1="30" y1="30" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2">
                      <animate attributeName="stroke-dashoffset" values="0;-8;0" dur="6s" repeatCount="indefinite" />
                    </line>
                    <line x1="60" y1="60" x2="90" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2">
                      <animate attributeName="stroke-dashoffset" values="0;-8;0" dur="6s" repeatCount="indefinite" begin="1s" />
                    </line>
                  </pattern>
                  
                  {/* Animated gradient for flowing connections */}
                  <linearGradient id="flowingGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0">
                      <animate attributeName="offset" values="0%;100%;0%" dur="5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="currentColor" stopOpacity="1">
                      <animate attributeName="offset" values="25%;125%;25%" dur="5s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0">
                      <animate attributeName="offset" values="50%;150%;50%" dur="5s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  
                  {/* Radial gradient for pulsing effect */}
                  <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="1">
                      <animate attributeName="stop-opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0">
                      <animate attributeName="stop-opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite" />
                    </stop>
                  </radialGradient>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#cta-network-enhanced)" />
                
                {/* Main flowing connection paths */}
                <path 
                  d="M 50 300 Q 250 150, 450 300 Q 650 450, 850 300 Q 1050 150, 1150 300" 
                  stroke="url(#flowingGradient)" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeDasharray="10,5"
                  opacity="0.9"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-50;0" dur="8s" repeatCount="indefinite" />
                </path>
                
                <path 
                  d="M 100 450 Q 300 300, 500 450 Q 700 600, 900 450 Q 1100 300, 1200 450" 
                  stroke="url(#flowingGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="8,4"
                  opacity="0.7"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-40;0" dur="10s" repeatCount="indefinite" begin="2s" />
                </path>
                
                <path 
                  d="M 0 150 Q 200 50, 400 150 Q 600 250, 800 150 Q 1000 50, 1200 150" 
                  stroke="url(#flowingGradient)" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeDasharray="6,6"
                  opacity="0.6"
                >
                  <animate attributeName="stroke-dashoffset" values="0;-36;0" dur="12s" repeatCount="indefinite" begin="4s" />
                </path>
                
                {/* Major pulsing network nodes */}
                <circle cx="300" cy="200" r="6" fill="url(#pulseGradient)" opacity="0.8">
                  <animate attributeName="r" values="6;12;6" dur="4s" repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="rotate" values="0 300 200;360 300 200" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="600" cy="300" r="8" fill="url(#pulseGradient)" opacity="0.9">
                  <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite" begin="1s" />
                  <animateTransform attributeName="transform" type="rotate" values="0 600 300;-360 600 300" dur="25s" repeatCount="indefinite" />
                </circle>
                <circle cx="900" cy="200" r="6" fill="url(#pulseGradient)" opacity="0.8">
                  <animate attributeName="r" values="6;12;6" dur="4s" repeatCount="indefinite" begin="2s" />
                  <animateTransform attributeName="transform" type="rotate" values="0 900 200;360 900 200" dur="18s" repeatCount="indefinite" />
                </circle>
                
                {/* Secondary nodes with orbital motion */}
                <g>
                  <animateTransform attributeName="transform" type="rotate" values="0 600 300;360 600 300" dur="15s" repeatCount="indefinite" />
                  <circle cx="650" cy="250" r="3" fill="currentColor" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="550" cy="350" r="3" fill="currentColor" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
                </g>
                
                <g>
                  <animateTransform attributeName="transform" type="rotate" values="0 300 200;-360 300 200" dur="18s" repeatCount="indefinite" />
                  <circle cx="330" cy="170" r="2" fill="currentColor" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="270" cy="230" r="2" fill="currentColor" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
                  </circle>
                </g>
                
                {/* Data flow particles */}
                <circle r="2" fill="currentColor" opacity="0.8">
                  <animateMotion dur="12s" repeatCount="indefinite">
                    <path d="M 50 300 Q 250 150, 450 300 Q 650 450, 850 300 Q 1050 150, 1150 300" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="12s" repeatCount="indefinite" />
                </circle>
                
                <circle r="1.5" fill="currentColor" opacity="0.6" >
                  <animateMotion dur="15s" repeatCount="indefinite" begin="3s">
                    <path d="M 100 450 Q 300 300, 500 450 Q 700 600, 900 450 Q 1100 300, 1200 450" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="15s" repeatCount="indefinite" begin="3s" />
                </circle>
                
                <circle r="1.5" fill="currentColor" opacity="0.6">
                  <animateMotion dur="18s" repeatCount="indefinite" begin="6s">
                    <path d="M 0 150 Q 200 50, 400 150 Q 600 250, 800 150 Q 1000 50, 1200 150" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="18s" repeatCount="indefinite" begin="6s" />
                </circle>
              </svg>
            </div>
          </div>
        </section>
      </main>
      </>
    );
  }