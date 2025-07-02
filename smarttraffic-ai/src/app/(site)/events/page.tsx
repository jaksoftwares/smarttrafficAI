"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Camera, 
  Building,
  Award,
  Target
} from "lucide-react";

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

interface EventImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  participants: number;
  duration: string;
  category: string;
  images: EventImage[];
  highlights: string[];
  outcomes: string[];
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(1);

  const events: Event[] = [
    {
      id: 1,
      title: "KeNHA Toll Weighing Bridge Station Visit",
      date: "June 30, 2025",
      location: "KeNHA Toll Station, Juja, Kiambu County",
      description: "Strategic site visit to Kenya National Highways Authority (KeNHA) Toll Weighing Bridge Station to understand current traffic management infrastructure and explore collaboration opportunities for SmartTraffic AI implementation.",
      participants: 2,
      duration: "6 hours",
      category: "Site Visit",
      images: [
        {
          id: 1,
          src: "/images/event-1.jpg",
          alt: "Team at KeNHA Toll Station entrance",
          title: "Arrival at KeNHA Station",
          description: "SmartTraffic AI team arriving at the KeNHA Toll Weighing Bridge Station for technical assessment and partnership discussions."
        },
        {
          id: 2,
          src: "/images/event-2.jpg",
          alt: "Weighing bridge equipment inspection",
          title: "Infrastructure Assessment",
          description: "Detailed examination of existing weighing bridge technology and traffic monitoring systems currently in operation."
        },
        {
          id: 3,
          src: "/images/event-3.jpg",
          title: "Technical Documentation",
          alt: "Team documenting technical specifications",
          description: "Recording technical specifications and operational procedures to inform AI integration strategies."
        },
        {
          id: 4,
          src: "/images/event-4.jpg",
          alt: "Stakeholder meeting with KeNHA officials",
          title: "Stakeholder Engagement",
          description: "Productive discussions with KeNHA officials about potential collaboration and smart traffic management solutions."
        }
      ],
      highlights: [
        "First-hand assessment of existing traffic infrastructure",
        "Direct engagement with KeNHA officials and operators",
        "Technical documentation of current systems",
        "Identification of AI integration opportunities",
        "Understanding of operational challenges and requirements"
      ],
      outcomes: [
        "Comprehensive understanding of current traffic management systems",
        "Established preliminary contact with KeNHA stakeholders",
        "Identified specific areas for AI enhancement",
        "Gathered technical requirements for solution development",
        "Created foundation for future collaboration discussions"
      ]
    },
    {
      id: 2,
      title: "Smart Traffic AI System Demo",
      date: "January 20, 2025",
      location: "Tech Hub, Nairobi",
      description: "Live demonstration of our SmartTraffic AI system capabilities, showcasing real-time traffic analysis, congestion prediction, and intelligent routing algorithms to potential stakeholders and investors.",
      participants: 6,
      duration: "3 hours",
      category: "Demo",
      images: [
        {
          id: 1,
          src: "/images/intersection.jpg",
          alt: "Smart traffic intersection demo",
          title: "AI-Powered Intersection",
          description: "Demonstration of our intelligent traffic light optimization system in action at a busy intersection."
        },
        {
          id: 2,
          src: "/images/traffic.jpg",
          alt: "Traffic monitoring dashboard",
          title: "Real-time Analytics",
          description: "Live dashboard showing traffic flow analysis, congestion patterns, and AI-generated optimization recommendations."
        },
        {
          id: 3,
          src: "/images/lights.jpeg",
          alt: "Smart traffic light system",
          title: "Adaptive Traffic Control",
          description: "Our adaptive traffic light control system responding to real-time traffic conditions and pedestrian flow."
        }
      ],
      highlights: [
        "Live demonstration of AI traffic optimization",
        "Real-time congestion prediction showcase",
        "Interactive stakeholder engagement session",
        "System performance metrics presentation",
        "Future roadmap discussion with investors"
      ],
      outcomes: [
        "Positive feedback from key stakeholders",
        "Interest expressed by potential investors",
        "Technical validation of core algorithms",
        "Partnership opportunities identified",
        "Next steps for pilot deployment outlined"
      ]
    }
  ];

  const selectedEventData = events.find(event => event.id === selectedEvent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-transparent to-purple-900/25" />
        
        {/* Floating Dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hexagon Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        {/* Galaxy background with stars */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-blue-900/10 to-transparent"></div>
        
        {/* Animated snake-like dashes */}
        <svg className="absolute inset-0 w-full h-full text-cyan-400/40">
          {/* Snake path 1 */}
          <path
            d="M 0,100 Q 200,50 400,150 T 800,100 Q 1000,200 1200,100 T 1600,150"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,15"
            className="animate-pulse"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 50,0; 0,0"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Snake path 2 */}
          <path
            d="M 100,300 Q 300,250 500,350 T 900,300 Q 1100,400 1300,300 T 1700,350"
            stroke="url(#snakeGradient1)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="15,20"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; -30,20; 0,0"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Snake path 3 */}
          <path
            d="M 50,500 Q 250,450 450,550 T 850,500 Q 1050,600 1250,500 T 1650,550"
            stroke="url(#snakeGradient2)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="12,18"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 40,-10; 0,0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Snake path 4 - Vertical */}
          <path
            d="M 200,0 Q 150,200 250,400 T 200,800 Q 300,1000 200,1200"
            stroke="url(#snakeGradient3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,12"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; 15,30; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Snake path 5 - Diagonal */}
          <path
            d="M 0,0 Q 300,200 600,100 T 1200,300 Q 1500,100 1800,400"
            stroke="url(#snakeGradient4)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6,10"
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0,0; -20,25; 0,0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Gradients for snake paths */}
          <defs>
            <linearGradient id="snakeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="snakeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="snakeGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="snakeGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Galaxy stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-purple-400 mb-6 animate-pulse">
              Events & Activities
            </h1>
            <StylishUnderline color="text-yellow-400" position="top" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Documenting our journey through site visits, pitch presentations, stakeholder meetings, and collaborative activities that shape the future of smart traffic management.
            </p>
          </div>

          {/* Events Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 inline-flex">
              {events.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedEvent === event.id
                      ? 'bg-blue-500/30 text-white border border-blue-400/50'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Event {event.id}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Event Details */}
          {selectedEventData && (
            <div className="space-y-12">
              {/* Event Header */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Building className="w-6 h-6 text-blue-400" />
                      </div>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedEventData.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {selectedEventData.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedEventData.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-green-400" />
                        <span className="text-green-300 font-medium">Date</span>
                      </div>
                      <p className="text-white">{selectedEventData.date}</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-300 font-medium">Location</span>
                      </div>
                      <p className="text-white">{selectedEventData.location}</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-300 font-medium">Participants</span>
                      </div>
                      <p className="text-white">{selectedEventData.participants} Team Members</p>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-yellow-400" />
                        <span className="text-yellow-300 font-medium">Duration</span>
                      </div>
                      <p className="text-white">{selectedEventData.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Images Gallery */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Camera className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Event Gallery</h3>
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                    {selectedEventData.images.length} Photos
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedEventData.images.map((image, index) => (
                    <div 
                      key={image.id}
                      className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <div className="relative h-72 bg-black/20">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain p-2"
                        />
                        {/* Image number indicator */}
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
                          {index + 1}
                        </div>
                        {/* Gradient overlay for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Highlights and Outcomes */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Highlights */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-2xl font-bold text-white">Key Highlights</h3>
                  </div>
                  <ul className="space-y-4">
                    {selectedEventData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-green-400" />
                    <h3 className="text-2xl font-bold text-white">Outcomes & Results</h3>
                  </div>
                  <ul className="space-y-4">
                    {selectedEventData.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <StylishUnderline color="text-purple-400" position="bottom" />
        </div>
      </div>
    </div>
  );
}