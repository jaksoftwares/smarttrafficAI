import { Target, Brain, Globe, CheckCircle, Camera, BarChart4, Lightbulb, Heart, Rocket, MapPin, ArrowRight } from "lucide-react";
import TeamSection from "./team";

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

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-[90vh] flex items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/about.jpeg')" }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="max-w-4xl relative z-10 text-white">
          <StylishUnderline color="text-white" position="top" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            About SmartTraffic AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Pioneering the future of urban mobility through intelligent AI-driven traffic management solutions that transform cities worldwide.
          </p>
          <StylishUnderline color="text-white" position="bottom" />
        </div>
      </section>

      {/* Our Dream & Drive */}
      <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden -mt-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="animate-pulse">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,5 50,20 50,40 30,55 10,40 10,20" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <StylishUnderline color="text-blue-400" position="top" />
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-20 animate-pulse">
              Our Dream & Drive
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passion that fuels our journey and the vision that guides our path toward revolutionizing urban mobility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Vision */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-blue-400/30 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-full mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To create a world where traffic flows seamlessly, cities breathe cleaner air, and every journey is optimized through the power of artificial intelligence. We envision smart cities where transportation is efficient, sustainable, and accessible to all.
              </p>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-400/30">
                <p className="text-blue-200 font-medium italic">
                  &ldquo;Transforming urban landscapes one intersection at a time&rdquo;
                </p>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative group">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 group-hover:border-yellow-400/30 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl h-80 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <Globe className="w-16 h-16 mx-auto mb-4 animate-spin" style={{ animationDuration: '20s' }} />
                      <p className="text-lg font-medium">Vision Image Placeholder</p>
                      <p className="text-sm">Smart city visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
            {/* Image Container */}
            <div className="relative group order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/10 group-hover:border-green-400/30 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl h-80 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <Brain className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                      <p className="text-lg font-medium">AI Technology Image</p>
                      <p className="text-sm">Neural network visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-green-400/30 transition-all duration-500 group order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-500/20 rounded-full mr-4 group-hover:bg-green-500/30 transition-colors">
                  <Brain className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We leverage cutting-edge artificial intelligence and machine learning to revolutionize traffic management systems. Our mission is to reduce congestion, minimize emissions, enhance road safety, and create smarter, more livable cities for future generations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-green-300">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Reduce traffic congestion by up to 40%</span>
                </div>
                <div className="flex items-center text-green-300">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Lower carbon emissions by 25%</span>
                </div>
                <div className="flex items-center text-green-300">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Improve emergency response times</span>
                </div>
              </div>
            </div>
          </div>

          <StylishUnderline color="text-blue-400" position="bottom" />
        </div>
      </section>

  

      {/* Why Choose Us */}
      <section id="features" className="py-24 bg-gradient-to-b from-gray-950 via-blue-980 to-gray-950 text-white relative overflow-hidden -mt-16">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="animate-pulse">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="40" cy="40" r="2" fill="currentColor" className="animate-ping" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <StylishUnderline color="text-blue-400" position="top" />
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-20 animate-pulse">
              Why Choose SmartTraffic AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stand apart through our innovative approach, proven expertise, and unwavering commitment to transforming urban transportation systems worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Proven AI Technology */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-blue-400/30 transition-all duration-500 group">
              <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cutting-Edge AI Technology</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our advanced neural networks and machine learning algorithms are trained on massive datasets, ensuring unparalleled accuracy in traffic prediction and optimization.
              </p>
              <div className="flex items-center text-blue-300 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>99.7% prediction accuracy</span>
              </div>
            </div>

            {/* Ability to Learn */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-green-400/30 transition-all duration-500 group">
              <div className="p-4 bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <Brain className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Ability to Learn</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our AI continuously learns and adapts from every traffic scenario, becoming smarter with each interaction. The system evolves its understanding of traffic patterns, weather impacts, and urban dynamics automatically.
              </p>
              <div className="flex items-center text-green-300 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Self-improving algorithms</span>
              </div>
            </div>

            {/* Scalable Architecture */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-purple-400/30 transition-all duration-500 group">
              <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Rocket className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Infinitely Scalable</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                From small intersections to megacity networks, our cloud-native architecture aims to scale seamlessly, handling millions of vehicles and data points in real-time.
              </p>
              <div className="flex items-center text-purple-300 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Aims to handles 10M+ vehicles daily</span>
              </div>
            </div>

            {/* Sustainable Impact */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-yellow-400/30 transition-all duration-500 group">
              <div className="p-4 bg-yellow-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                <Heart className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Environmental Leadership</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our solutions contribute directly to UN Sustainable Development Goals, reducing urban carbon footprints and creating healthier cities for future generations.
              </p>
              <div className="flex items-center text-yellow-300 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>40% emission reduction achieved</span>
              </div>
            </div>

            {/* Dedicated Support */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-red-400/30 transition-all duration-500 group">
              <div className="p-4 bg-red-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors">
                <Target className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Dedicated Support</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our committed team provides comprehensive support during business hours, with emergency response protocols and detailed documentation for seamless system operation.
              </p>
              <div className="flex items-center text-red-300 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Business hours support & emergency protocols</span>
              </div>
            </div>

            {/* Agile Student Team */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-cyan-400/30 transition-all duration-500 group">
              <div className="p-4 bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <Lightbulb className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Agile & Adaptive Team</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                As a passionate team, we bring fresh perspectives, rapid adaptability, and cutting-edge knowledge to solve real-world traffic challenges with innovative approaches.
              </p>
              <div className="flex items-center text-cyan-300 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Quick adaptation to emerging tech</span>
              </div>
            </div>
          </div>
          <StylishUnderline color="text-blue-400" position="bottom" />
        </div>
      </section>




      {/* How We Do It Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white relative overflow-hidden -mt-16">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" className="animate-pulse" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <StylishUnderline color="text-yellow-400" position="top" />
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-20 animate-pulse">
              How We Do It
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive approach combines advanced AI technology, smart sensor networks, predictive algorithms, and real-time data processing to create the future of intelligent traffic management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* AI-Powered Analysis */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-yellow-400/30 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="p-4 bg-yellow-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                <Brain className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Advanced machine learning algorithms process millions of data points in real-time, learning traffic patterns and predicting congestion before it happens.
              </p>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-3 border border-yellow-400/30">
                <div className="text-center text-white/60">
                  <Brain className="w-10 h-10 mx-auto mb-2 animate-pulse" />
                  <p className="text-xs font-medium">Neural Network</p>
                </div>
              </div>
            </div>

            {/* Smart Sensor Networks */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-blue-400/30 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <Camera className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Sensor Networks</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                IoT sensors, smart cameras, and environmental monitors create a comprehensive network that captures real-time traffic, weather, and road conditions.
              </p>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-3 border border-blue-400/30">
                <div className="text-center text-white/60">
                  <Camera className="w-10 h-10 mx-auto mb-2 animate-bounce" />
                  <p className="text-xs font-medium">IoT Sensors</p>
                </div>
              </div>
            </div>

            {/* Predictive Algorithms */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-green-400/30 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="p-4 bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <BarChart4 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Predictive Algorithms</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Sophisticated forecasting models analyze historical trends, current conditions, and external factors to predict traffic patterns hours in advance.
              </p>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-3 border border-green-400/30">
                <div className="text-center text-white/60">
                  <BarChart4 className="w-10 h-10 mx-auto mb-2 animate-pulse" />
                  <p className="text-xs font-medium">Trend Analysis</p>
                </div>
              </div>
            </div>

            {/* Smart Infrastructure */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-purple-400/30 transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Lightbulb className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Infrastructure</h3>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Dynamic traffic signals, adaptive road signs, and intelligent routing systems work together to optimize traffic flow and reduce waiting times.
              </p>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-3 border border-purple-400/30">
                <div className="text-center text-white/60">
                  <Lightbulb className="w-10 h-10 mx-auto mb-2 animate-pulse" />
                  <p className="text-xs font-medium">Smart Signals</p>
                </div>
              </div>
            </div>
          </div>

          <StylishUnderline color="text-yellow-400" position="bottom" />
        </div>
      </section>

      {/* What We Aim to Achieve Section */}
      <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden -mt-16">
        {/* Snake-like animated background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="animate-pulse">
            <path
              d="M0,100 Q200,50 400,100 T800,100 T1200,100 T1600,100"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="opacity-30"
            />
            <path
              d="M0,200 Q300,150 600,200 T1200,200 T1800,200"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="opacity-20"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <StylishUnderline color="text-green-400" position="top" />
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-20 animate-pulse">
              What We Aim to Achieve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our vision extends beyond current capabilities. We&apos;re working towards revolutionary improvements that will transform urban transportation and create smarter, more sustainable cities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Goals & Targets */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-green-400/30 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Target Improvements</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">50%</div>
                    <p className="text-gray-300">Congestion Reduction Goal</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
                    <p className="text-gray-300">Emission Reduction Target</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-200 mb-2">70%</div>
                    <p className="text-gray-300">Emergency Response Enhancement</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">45%</div>
                    <p className="text-gray-300">Travel Time Optimization</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-yellow-400">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" /> 
                  Future Impact Vision
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Carbon-neutral urban transportation systems</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Autonomous vehicle integration and optimization</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Predictive maintenance for traffic infrastructure</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Complete elimination of traffic-related fatalities</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Dynamic city-wide traffic optimization networks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative group">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 group-hover:border-green-400/30 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl h-96 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <MapPin className="w-20 h-20 mx-auto mb-4 animate-bounce" />
                      <p className="text-xl font-medium">Future City Visualization</p>
                      <p className="text-sm">Smart city transformation goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <StylishUnderline color="text-green-400" position="bottom" />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 -mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <StylishUnderline color="text-purple-400" position="top" />
          <TeamSection/>
          <StylishUnderline color="text-purple-400" position="bottom" />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden -mt-16">
        {/* Animated hexagon background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="animate-pulse">
            <defs>
              <pattern id="hexagons-cta" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,5 50,20 50,40 30,55 10,40 10,20" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons-cta)" />
          </svg>
        </div>

        {/* Pulsing nodes */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%">
            <circle cx="15%" cy="25%" r="3" fill="currentColor" className="animate-ping">
              <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="85%" cy="35%" r="2" fill="currentColor" className="animate-ping">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="65%" cy="75%" r="4" fill="currentColor" className="animate-ping">
              <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="2s" />
            </circle>
            <circle cx="25%" cy="85%" r="2" fill="currentColor" className="animate-ping">
              <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
            </circle>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <StylishUnderline color="text-white" position="top" />
          
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-12 h-12 text-yellow-400 mr-4 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your City?</h2>
          </div>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join the revolution in smart transportation. Discover how SmartTraffic AI can transform your urban infrastructure and create a better future for your citizens.
          </p>
          
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

          <StylishUnderline color="text-white" position="bottom" />
        </div>
      </section>
    </main>
  );
}
