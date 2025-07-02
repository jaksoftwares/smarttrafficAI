"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle, Zap, Clock, Shield, DollarSign, Leaf, AlertTriangle, Phone } from "lucide-react";

const StylishUnderline = () => (
  <div className="flex justify-center mb-8">
    <svg width="200" height="20" viewBox="0 0 200 20" className="text-blue-400">
      <defs>
        <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="20%" stopColor="currentColor" />
          <stop offset="80%" stopColor="currentColor" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <line
        x1="0"
        y1="10"
        x2="200"
        y2="10"
        stroke="url(#underlineGradient)"
        strokeWidth="2"
        className="animate-pulse"
      />
      <circle cx="40" cy="10" r="3" fill="currentColor" className="animate-ping" />
      <circle cx="100" cy="10" r="2" fill="currentColor" className="animate-pulse" />
      <circle cx="160" cy="10" r="3" fill="currentColor" className="animate-ping" />
    </svg>
  </div>
);

const faqData = [
  {
    icon: HelpCircle,
    question: "How does SmartTraffic AI actually work?",
    answer: "Our system uses AI-powered cameras and IoT sensors to monitor traffic patterns in real-time. Machine learning algorithms analyze this data to optimize traffic light timing, predict congestion, and provide intelligent routing suggestions. The system continuously learns and adapts to improve traffic flow.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    question: "How long does implementation take?",
    answer: "As a student-led project, we're currently in the pilot phase. For a small intersection, initial setup takes 2-4 weeks including sensor installation and system calibration. City-wide deployment would be phased over 6-12 months depending on infrastructure complexity.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: DollarSign,
    question: "What are the costs involved?",
    answer: "We're developing cost-effective solutions suitable for various budgets. Initial pilot programs focus on proving the technology's value. Costs vary based on intersection complexity, existing infrastructure, and required sensors. We provide detailed proposals after site assessment.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    question: "How secure is our traffic data?",
    answer: "Data security is paramount. We use encrypted data transmission, secure cloud storage, and follow privacy regulations. All personal vehicle data is anonymized. Only traffic pattern data is processed to optimize signal timing while protecting individual privacy.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Zap,
    question: "Is it compatible with existing traffic systems?",
    answer: "Yes! Our system is designed to integrate with most existing traffic infrastructure. We work with current signal controllers and gradually enhance capabilities. The modular approach allows cities to upgrade incrementally without complete system replacement.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Leaf,
    question: "What environmental benefits can we expect?",
    answer: "Our simulations show 25-40% reduction in idle time at intersections, leading to decreased emissions. Optimized traffic flow reduces fuel consumption and air pollution. Better traffic management contributes to more sustainable urban transportation.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: AlertTriangle,
    question: "How does the system handle emergencies?",
    answer: "The AI system includes emergency vehicle detection and priority protocols. When emergency vehicles approach, the system automatically adjusts signal timing to create clear corridors. Manual override capabilities ensure traffic managers maintain control during critical situations.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Phone,
    question: "How do we get started with SmartTraffic AI?",
    answer: "Contact our team for an initial consultation and site assessment. We'll analyze your current traffic patterns, identify improvement opportunities, and propose a pilot program. As students, we're eager to collaborate and demonstrate our technology's potential.",
    gradient: "from-teal-500 to-green-500"
  }
];

type FAQItemType = {
  icon: React.ElementType;
  question: string;
  answer: string;
  gradient: string;
};

const FAQItem = ({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItemType;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const Icon = item.icon;
  
  return (
    <div 
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} bg-opacity-20`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
            {item.question}
          </h3>
        </div>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-6' : 'max-h-0'}`}>
        <p className="text-gray-300 leading-relaxed pl-16">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-transparent to-purple-900/25" />
        
        {/* Floating Dots */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse shadow-md shadow-blue-400/40`}
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
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(59 130 246 / 0.15)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated connecting lines */}
          <g className="animate-pulse">
            <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="rgb(59 130 246 / 0.3)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="rgb(168 85 247 / 0.3)" strokeWidth="2" strokeDasharray="8,4" />
            <line x1="20%" y1="10%" x2="80%" y2="90%" stroke="rgb(34 197 94 / 0.25)" strokeWidth="1" strokeDasharray="4,6" />
            <line x1="80%" y1="10%" x2="20%" y2="90%" stroke="rgb(249 115 22 / 0.25)" strokeWidth="1" strokeDasharray="6,3" />
          </g>
        </svg>
        
        {/* Animated Snake Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Snake line animations */}
            <animateTransform
              id="snake1"
              attributeName="transform"
              type="translate"
              values="0,0; 20,10; 0,20; -20,10; 0,0"
              dur="8s"
              repeatCount="indefinite"
            />
            <animateTransform
              id="snake2"
              attributeName="transform"
              type="translate"
              values="0,0; -15,15; 0,30; 15,15; 0,0"
              dur="12s"
              repeatCount="indefinite"
            />
            <animateTransform
              id="snake3"
              attributeName="transform"
              type="translate"
              values="0,0; 25,5; 10,25; -10,5; 0,0"
              dur="10s"
              repeatCount="indefinite"
            />
          </defs>
          
          {/* Snake Path 1 - Curved flowing line */}
          <g>
            <path
              d="M 0,20 Q 200,80 400,40 T 800,60 L 1000,80 Q 1200,20 1400,100 T 1800,60"
              fill="none"
              stroke="rgb(59 130 246 / 0.45)"
              strokeWidth="2.5"
              strokeDasharray="8,12"
              className="animate-snake-flow-1"
            />
          </g>
          
          {/* Snake Path 2 - Wavy diagonal */}
          <g>
            <path
              d="M 100,0 Q 300,120 500,60 T 900,80 L 1100,40 Q 1300,160 1500,80 T 1900,100"
              fill="none"
              stroke="rgb(168 85 247 / 0.4)"
              strokeWidth="2.5"
              strokeDasharray="6,8"
              className="animate-snake-flow-2"
            />
          </g>
          
          {/* Snake Path 3 - S-curve pattern */}
          <g>
            <path
              d="M 0,100 Q 150,200 300,100 T 600,100 Q 750,200 900,100 T 1200,100 Q 1350,200 1500,100"
              fill="none"
              stroke="rgb(34 197 94 / 0.35)"
              strokeWidth="2.5"
              strokeDasharray="10,6"
              className="animate-snake-flow-3"
            />
          </g>
          
          {/* Snake Path 4 - Horizontal wave */}
          <g>
            <path
              d="M 0,300 Q 100,250 200,300 T 400,300 Q 500,250 600,300 T 800,300 Q 900,250 1000,300 T 1200,300"
              fill="none"
              stroke="rgb(249 115 22 / 0.35)"
              strokeWidth="2.5"
              strokeDasharray="4,10"
              className="animate-snake-flow-4"
            />
          </g>
          
          {/* Snake Path 5 - Vertical flowing */}
          <g>
            <path
              d="M 200,0 Q 150,100 200,200 T 200,400 Q 150,500 200,600 T 200,800"
              fill="none"
              stroke="rgb(236 72 153 / 0.35)"
              strokeWidth="2.5"
              strokeDasharray="12,4"
              className="animate-snake-flow-5"
            />
          </g>
          
          {/* Snake Path 6 - Spiral-like */}
          <g>
            <path
              d="M 800,0 Q 900,50 850,100 Q 800,150 900,200 Q 1000,250 900,300 Q 800,350 850,400"
              fill="none"
              stroke="rgb(14 165 233 / 0.4)"
              strokeWidth="2.5"
              strokeDasharray="8,8"
              className="animate-snake-flow-6"
            />
          </g>
        </svg>
        
        {/* Additional Floating Elements */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`extra-${i}`}
            className={`absolute animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          >
            <div className="w-1 h-1 bg-cyan-400 rounded-full shadow-md shadow-cyan-400/40" />
          </div>
        ))}
        
        {/* Pulsing Circles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className={`absolute w-5 h-5 border border-blue-400/25 rounded-full animate-ping`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mt-9 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-6 animate-pulse">
            Frequently Asked Questions
          </h1>
          <StylishUnderline />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about SmartTraffic AI implementation, 
            technology, and how we&apos;re revolutionizing urban mobility through intelligent traffic management.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>

        <StylishUnderline />

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <div className="flex justify-center mb-6">
              <svg width="150" height="15" viewBox="0 0 150 15" className="text-blue-400">
                <defs>
                  <linearGradient id="ctaUnderlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
                  stroke="url(#ctaUnderlineGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <circle cx="30" cy="7" r="2" fill="currentColor" className="animate-ping" />
                <circle cx="75" cy="7" r="1.5" fill="currentColor" className="animate-pulse" />
                <circle cx="120" cy="7" r="2" fill="currentColor" className="animate-ping" />
              </svg>
            </div>
            <p className="text-gray-300 mb-6">
              Our team is here to help you understand how SmartTraffic AI can transform your city&apos;s transportation.
            </p>
            <a
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 inline-flex items-center gap-3"
            >
              Contact Our Team
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <StylishUnderline />
      </div>

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
        
        /* Snake Line Animations */
        @keyframes snake-flow-1 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -200;
          }
        }
        
        @keyframes snake-flow-2 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 140;
          }
        }
        
        @keyframes snake-flow-3 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -160;
          }
        }
        
        @keyframes snake-flow-4 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 140;
          }
        }
        
        @keyframes snake-flow-5 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -160;
          }
        }
        
        @keyframes snake-flow-6 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 128;
          }
        }
        
        .animate-snake-flow-1 {
          animation: snake-flow-1 15s linear infinite;
        }
        
        .animate-snake-flow-2 {
          animation: snake-flow-2 20s linear infinite reverse;
        }
        
        .animate-snake-flow-3 {
          animation: snake-flow-3 18s linear infinite;
        }
        
        .animate-snake-flow-4 {
          animation: snake-flow-4 12s linear infinite reverse;
        }
        
        .animate-snake-flow-5 {
          animation: snake-flow-5 25s linear infinite;
        }
        
        .animate-snake-flow-6 {
          animation: snake-flow-6 16s linear infinite reverse;
        }
      `}</style>
    </div>
  );
}