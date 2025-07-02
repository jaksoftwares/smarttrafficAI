"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  PlayCircle, 
  PauseCircle, 
  RefreshCw, 
  Zap, 
  Activity, 
  TrendingUp, 
  Clock,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from "lucide-react";

interface TrafficData {
  time: number;
  density: number;
  aiOptimization: number;
}

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

// Traffic Density Chart Component
const TrafficDensityChart = ({ data, isRunning }: { data: TrafficData[], isRunning: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background grid
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 10; i++) {
      const y = (height / 10) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    
    // Vertical grid lines
    for (let i = 0; i <= 20; i++) {
      const x = (width / 20) * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    if (data.length < 2) return;

    const maxPoints = 50;
    const displayData = data.slice(-maxPoints);
    const pointWidth = width / (maxPoints - 1);

    // Draw traffic density line (red - showing congestion)
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    displayData.forEach((point, index) => {
      const x = index * pointWidth;
      const y = height - (point.density / 100) * height;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Fill area under density curve
    ctx.fillStyle = 'rgba(239, 68, 68, 0.1)';
    ctx.lineTo(displayData.length * pointWidth, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();

    // Draw AI optimization line (blue - showing stabilization)
    if (displayData.some(d => d.aiOptimization > 0)) {
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      
      displayData.forEach((point, index) => {
        const x = index * pointWidth;
        const y = height - (point.aiOptimization / 100) * height;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();

      // Fill area under AI optimization curve
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.lineTo(displayData.length * pointWidth, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
    }

    // Draw current value indicators
    if (displayData.length > 0) {
      const lastPoint = displayData[displayData.length - 1];
      const lastX = (displayData.length - 1) * pointWidth;
      
      // Traffic density indicator
      const densityY = height - (lastPoint.density / 100) * height;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(lastX, densityY, 6, 0, 2 * Math.PI);
      ctx.fill();
      
      // AI optimization indicator
      if (lastPoint.aiOptimization > 0) {
        const aiY = height - (lastPoint.aiOptimization / 100) * height;
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(lastX, aiY, 6, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    // Draw labels
    ctx.fillStyle = '#9ca3af';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Traffic Density', 10, 20);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('AI Optimization', 10, 40);

    // Draw percentage markers
    ctx.fillStyle = '#6b7280';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
      const percentage = (4 - i) * 25;
      const y = (height / 4) * i + 5;
      ctx.fillText(`${percentage}%`, width - 5, y);
    }

  }, [data, isRunning]);

  return (
    <div className="relative w-full h-64 bg-gray-900/30 rounded-xl overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      {!isRunning && data.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400 text-sm"
            >Traffic density graph will appear here</p>
          </div>
        </div>
      )}
      
      {/* Legend */}
      <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm rounded-lg p-2 text-xs">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-0.5 bg-red-500"></div>
          <span className="text-gray-300">Traffic Density</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-blue-500"></div>
          <span className="text-gray-300">AI Optimization</span>
        </div>
      </div>
    </div>
  );
};

export default function AIDemo() {
  const [demoState, setDemoState] = useState<'idle' | 'running' | 'paused'>('idle');
  const [trafficFlow, setTrafficFlow] = useState(45);
  const [congestionLevel, setCongestionLevel] = useState(78);
  const [optimizationScore, setOptimizationScore] = useState(0);
  const [simulationTime, setSimulationTime] = useState(0);
  const [trafficData, setTrafficData] = useState<TrafficData[]>([]);
  const [aiActivated, setAiActivated] = useState(false);
  const router = useRouter();

  // Simulate real-time traffic data updates with AI intervention
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (demoState === 'running') {
      interval = setInterval(() => {
        setSimulationTime(prev => {
          const newTime = prev + 1;
          
          // Activate AI after 10 seconds
          if (newTime === 10) {
            setAiActivated(true);
          }
          
          // Simulate traffic behavior
          let newDensity;
          let newAiOptimization = 0;
          
          if (!aiActivated) {
            // Before AI: erratic, high congestion
            newDensity = Math.max(60, Math.min(95, 85 + Math.sin(newTime * 0.3) * 15 + (Math.random() - 0.5) * 20));
          } else {
            // After AI: gradually stabilizing
            const stabilizationFactor = Math.min(1, (newTime - 10) / 20);
            const targetDensity = 35; // AI targets 35% density
            const currentHigh = 85 - (stabilizationFactor * 50);
            newDensity = Math.max(25, Math.min(90, 
              targetDensity + (currentHigh - targetDensity) * (1 - stabilizationFactor) + 
              Math.sin(newTime * 0.2) * (10 * (1 - stabilizationFactor))
            ));
            newAiOptimization = Math.min(100, stabilizationFactor * 85 + Math.random() * 15);
          }
          
          // Update states
          setTrafficFlow(100 - newDensity);
          setCongestionLevel(newDensity);
          setOptimizationScore(newAiOptimization);
          
          // Add to chart data
          setTrafficData(prev => {
            const newData = [...prev, {
              time: newTime,
              density: newDensity,
              aiOptimization: newAiOptimization
            }];
            // Keep only last 50 points for performance
            return newData.slice(-50);
          });
          
          return newTime;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [demoState, aiActivated]);

  const handleStartDemo = () => {
    setDemoState('running');
    setOptimizationScore(0);
    setSimulationTime(0);
    setTrafficData([]);
    setAiActivated(false);
  };

  const handlePauseDemo = () => {
    setDemoState('paused');
  };

  const handleResetDemo = () => {
    setDemoState('idle');
    setTrafficFlow(45);
    setCongestionLevel(78);
    setOptimizationScore(0);
    setSimulationTime(0);
    setTrafficData([]);
    setAiActivated(false);
  };

  const handleFullDemo = () => {
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/35 via-transparent to-purple-900/35" />
        
        {/* Floating Dots */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="demoGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(59 130 246 / 0.25)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#demoGrid)" />
          
          {/* Animated lines */}
          <g className="animate-pulse">
            <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="rgb(59 130 246 / 0.45)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="rgb(168 85 247 / 0.45)" strokeWidth="2" strokeDasharray="8,4" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="mt-9 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-6 animate-pulse">
            Live AI Traffic Demo
          </h1>
          <StylishUnderline color="text-yellow-400" position="top" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience real-time traffic optimization powered by artificial intelligence. 
            Watch as our AI adapts to traffic patterns and reduces congestion instantly.
          </p>
        </div>

        {/* Demo Controls & Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Simulation Display */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">Real-time Traffic Density Analysis</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      demoState === 'running' ? 'bg-green-400 animate-pulse' : 
                      demoState === 'paused' ? 'bg-yellow-400' : 'bg-gray-400'
                    }`} />
                    <span className="text-gray-300 capitalize">{demoState}</span>
                  </div>
                  {aiActivated && (
                    <div className="flex items-center gap-2 bg-blue-500/20 rounded-full px-3 py-1">
                      <Zap className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 text-sm font-medium">AI Active</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Traffic Density Chart */}
              <div className="mb-6">
                <TrafficDensityChart data={trafficData} isRunning={demoState === 'running'} />
              </div>
              
              {/* Simulation Status */}
              <div className="bg-gray-900/30 rounded-xl p-4 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {Math.floor(simulationTime / 60)}:{(simulationTime % 60).toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm">Runtime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400">
                      {Math.round(congestionLevel)}%
                    </div>
                    <div className="text-gray-400 text-sm">Congestion</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">
                      {Math.round(optimizationScore)}%
                    </div>
                    <div className="text-gray-400 text-sm">AI Impact</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${aiActivated ? 'text-green-400' : 'text-gray-400'}`}>
                      {aiActivated ? 'ON' : 'OFF'}
                    </div>
                    <div className="text-gray-400 text-sm">AI Status</div>
                  </div>
                </div>
              </div>
              
              {/* Demo Controls */}
              <div className="flex items-center justify-center gap-4">
                {demoState === 'idle' ? (
                  <button
                    onClick={handleStartDemo}
                    className="bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-blue-400 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Start Demo
                  </button>
                ) : demoState === 'running' ? (
                  <button
                    onClick={handlePauseDemo}
                    className="bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-yellow-400 hover:bg-yellow-600 hover:border-yellow-600 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
                  >
                    <PauseCircle className="w-5 h-5" />
                    Pause
                  </button>
                ) : (
                  <button
                    onClick={handleStartDemo}
                    className="bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-green-400 hover:bg-green-600 hover:border-green-600 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Resume
                  </button>
                )}
                
                <button
                  onClick={handleResetDemo}
                  className="bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center gap-3 hover:scale-105"
                >
                  <RefreshCw className="w-5 h-5" />
                  Reset
                </button>
              </div>
              
              {/* Demo Explanation */}
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <h4 className="text-blue-400 font-semibold mb-2">Demo Simulation:</h4>
                <p className="text-gray-300 text-sm">
                  {!aiActivated && simulationTime > 0 ? 
                    "🔴 High traffic congestion with erratic patterns. AI will activate in " + Math.max(0, 10 - simulationTime) + " seconds..." :
                    aiActivated ? 
                    "🤖 AI is now optimizing traffic flow! Watch as density stabilizes and congestion reduces." :
                    "Click 'Start Demo' to see how AI transforms chaotic traffic into optimized flow patterns."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Real-time Metrics */}
          <div className="space-y-6">
            <MetricCard
              icon={<Activity className="w-6 h-6 text-blue-400" />}
              title="Traffic Flow"
              value={`${Math.round(trafficFlow)}%`}
              trend={trafficFlow > 70 ? "up" : "down"}
              color="blue"
            />
            
            <MetricCard
              icon={<AlertTriangle className="w-6 h-6 text-red-400" />}
              title="Congestion Level"
              value={`${Math.round(congestionLevel)}%`}
              trend={congestionLevel < 50 ? "up" : "down"}
              color="red"
            />
            
            <MetricCard
              icon={<TrendingUp className="w-6 h-6 text-green-400" />}
              title="AI Optimization"
              value={`${Math.round(optimizationScore)}%`}
              trend="up"
              color="green"
            />
          </div>
        </div>

        {/* AI Features Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            AI-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="Real-time Analysis"
              description="Instant traffic pattern recognition"
              active={demoState === 'running'}
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-blue-400" />}
              title="Predictive Timing"
              description="Smart signal optimization"
              active={demoState === 'running'}
            />
            <FeatureCard
              icon={<Activity className="w-8 h-8 text-green-400" />}
              title="Adaptive Control"
              description="Dynamic traffic management"
              active={demoState === 'running'}
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-purple-400" />}
              title="Congestion Relief"
              description="Automated flow optimization"
              active={demoState === 'running'}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready for the Full Experience?
            </h3>
            <div className="flex justify-center mb-6">
              <svg width="150" height="15" viewBox="0 0 150 15" className="text-purple-400">
                <defs>
                  <linearGradient id="ctaDemoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="25%" stopColor="currentColor" />
                    <stop offset="75%" stopColor="currentColor" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <line
                  x1="0"
                  y1="7"
                  x2="150"
                  y2="7"
                  stroke="url(#ctaDemoGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <circle cx="30" cy="7" r="2" fill="currentColor" className="animate-ping" />
                <circle cx="75" cy="7" r="1.5" fill="currentColor" className="animate-pulse" />
                <circle cx="120" cy="7" r="2" fill="currentColor" className="animate-ping" />
              </svg>
            </div>
            <p className="text-gray-300 mb-6">
              Access the complete SmartTraffic AI platform with advanced analytics, 
              real-time monitoring, and comprehensive traffic management tools.
            </p>
            <button
              onClick={handleFullDemo}
              className="bg-transparent text-white px-10 py-4 rounded-2xl text-xl font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-yellow-400/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Access Full Platform
              <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <StylishUnderline />
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// Updated components with glassmorphism theme
function MetricCard({ 
  icon, 
  title, 
  value, 
  trend, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  trend: 'up' | 'down'; 
  color: string;
}) {
  const colorClasses = {
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    red: 'from-red-500/20 to-pink-500/20 border-red-500/30',
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} backdrop-blur-xl border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-white">{value}</span>
        <TrendingUp className={`w-5 h-5 ${
          trend === 'up' ? 'text-green-400 rotate-0' : 'text-red-400 rotate-180'
        } transition-transform`} />
      </div>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  active 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  active: boolean;
}) {
  return (
    <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-500 ${
      active ? 'bg-white/10 border-white/20 scale-105' : 'hover:bg-white/10'
    }`}>
      <div className="flex flex-col items-center text-center">
        <div className={`p-3 rounded-xl mb-4 transition-all duration-300 ${
          active ? 'bg-white/20 scale-110' : 'bg-white/10'
        }`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        {active && (
          <div className="mt-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        )}
      </div>
    </div>
  );
}
