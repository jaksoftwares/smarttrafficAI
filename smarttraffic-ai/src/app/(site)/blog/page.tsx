"use client";

import { useState } from "react";
import { FileText, Clock, User, Search, ArrowRight, Bookmark, TrendingUp } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
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

const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Traffic Management",
      description: "Discover how artificial intelligence is optimizing urban traffic flow, reducing congestion, and improving safety.",
      author: "Jane Doe",
      date: "March 10, 2025",
      category: "AI & Traffic",
    },
    {
      id: 2,
      title: "The Future of Smart Cities: AI-Powered Solutions",
      description: "Explore how AI-driven technologies are shaping the future of smart cities and sustainable urban mobility.",
      author: "John Smith",
      date: "March 5, 2025",
      category: "Smart Cities",
    },
    {
      id: 3,
      title: "Reducing Traffic Congestion with AI Algorithms",
      description: "Learn about the latest AI algorithms that help predict and manage traffic congestion more effectively.",
      author: "Emily Johnson",
      date: "February 28, 2025",
      category: "Traffic Solutions",
    },
    {
      id: 4,
      title: "Smart Traffic Lights: Enhancing Urban Traffic Flow",
      description: "How AI-powered traffic signals are reducing wait times and improving road efficiency in major cities.",
      author: "Michael Brown",
      date: "February 20, 2025",
      category: "Traffic Technology",
    },
    {
      id: 5,
      title: "Computer Vision in Traffic Monitoring",
      description: "Discover how computer vision is used to analyze traffic patterns, detect violations, and improve road safety.",
      author: "Sophia Lee",
      date: "February 15, 2025",
      category: "AI & Traffic",
    },
    {
      id: 6,
      title: "The Role of IoT in Smart Traffic Management",
      description: "How the Internet of Things (IoT) is transforming traffic management through real-time data collection and analysis.",
      author: "David Wilson",
      date: "February 10, 2025",
      category: "Smart Cities",
    },
    {
      id: 7,
      title: "Machine Learning for Traffic Accident Prediction",
      description: "How machine learning models can predict and prevent traffic accidents before they happen.",
      author: "Laura Martinez",
      date: "February 5, 2025",
      category: "Traffic Solutions",
    },
    {
      id: 8,
      title: "The Impact of AI on Public Transportation Systems",
      description: "How AI is making public transportation systems more efficient, accessible, and user-friendly.",
      author: "James Anderson",
      date: "January 30, 2025",
      category: "Public Transport",
    },
    {
      id: 9,
      title: "Autonomous Vehicles and Their Role in Traffic Management",
      description: "The future of self-driving cars and how they integrate with AI-driven traffic solutions.",
      author: "Olivia Taylor",
      date: "January 25, 2025",
      category: "Autonomous Vehicles",
    },
    {
      id: 10,
      title: "How AI Can Help Reduce Carbon Emissions from Traffic",
      description: "Examining AI-driven strategies to minimize vehicle emissions and promote sustainability.",
      author: "Daniel White",
      date: "January 20, 2025",
      category: "Sustainability",
    },
    {
      id: 11,
      title: "Real-Time Traffic Data: A Game Changer for Urban Planning",
      description: "How real-time AI-powered traffic analytics can help city planners design better road networks.",
      author: "Emma Green",
      date: "January 15, 2025",
      category: "Urban Mobility",
    },
    {
      id: 12,
      title: "Ethical Considerations in AI-Based Traffic Management",
      description: "Exploring the ethical and privacy concerns surrounding AI-driven traffic solutions.",
      author: "Matthew Hall",
      date: "January 10, 2025",
      category: "AI Ethics",
    },
    {
      id: 13,
      title: "Predictive Analytics: Preventing Traffic Jams Before They Happen",
      description: "How predictive analytics can help manage and prevent urban traffic congestion.",
      author: "Chloe Scott",
      date: "January 5, 2025",
      category: "Predictive AI",
    },
  ];
export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { name: "All Posts", count: blogPosts.length, icon: FileText },
    { name: "AI & Traffic", count: 5, icon: TrendingUp },
    { name: "Smart Cities", count: 3, icon: Bookmark },
    { name: "Traffic Solutions", count: 4, icon: Search },
    { name: "Sustainability", count: 2, icon: ArrowRight }
  ];

  const filteredPosts = selectedCategory && selectedCategory !== "All Posts"
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-transparent to-purple-900/25" />
        
        {/* Floating Dots */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
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
            <pattern id="blogGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(59 130 246 / 0.15)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blogGrid)" />
          
          {/* Animated lines */}
          <g className="animate-pulse">
            <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="rgb(59 130 246 / 0.3)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="rgb(168 85 247 / 0.3)" strokeWidth="2" strokeDasharray="8,4" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="mt-9 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-6 animate-pulse">
            SmartTraffic AI Blog
          </h1>
          <StylishUnderline color="text-yellow-400" position="top" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover insights, innovations, and the latest trends in AI-powered traffic management. 
            Stay ahead with cutting-edge research and real-world applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Explore by Category</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.name;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 inline-flex items-center gap-3 ${
                    isSelected ? 'bg-blue-600 border-blue-600' : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/20">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <StylishUnderline color="text-blue-400" position="bottom" />
      </div>

      {/* Call to Action - Full width section outside container */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
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
            <FileText className="w-12 h-12 text-yellow-400 mr-4 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold">Want to Contribute?</h2>
          </div>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Share your insights and contribute to our growing knowledge hub on AI-powered traffic solutions. Join the revolution in smart transportation research.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Contact Us
              <ArrowRight 
                size={24} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </a>
            
            <a
              href="/demo"
              className="bg-transparent text-white px-10 py-4 rounded-2xl text-xl font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-yellow-400/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              View Research
              <TrendingUp size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <StylishUnderline color="text-white" position="bottom" />
        </div>
      </section>

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

// Blog Card Component
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const getCategoryColor = (category: string) => {
    const colors = {
      "AI & Traffic": {
        gradient: "from-blue-500/30 via-cyan-500/20 to-blue-600/30",
        border: "border-blue-400/40",
        glow: "shadow-blue-500/20",
        icon: "text-blue-300",
        hover: "hover:border-blue-400/60 hover:shadow-blue-500/30"
      },
      "Smart Cities": {
        gradient: "from-green-500/30 via-emerald-500/20 to-green-600/30",
        border: "border-green-400/40",
        glow: "shadow-green-500/20",
        icon: "text-green-300",
        hover: "hover:border-green-400/60 hover:shadow-green-500/30"
      },
      "Traffic Solutions": {
        gradient: "from-purple-500/30 via-pink-500/20 to-purple-600/30",
        border: "border-purple-400/40",
        glow: "shadow-purple-500/20",
        icon: "text-purple-300",
        hover: "hover:border-purple-400/60 hover:shadow-purple-500/30"
      },
      "Traffic Technology": {
        gradient: "from-yellow-500/30 via-orange-500/20 to-yellow-600/30",
        border: "border-yellow-400/40",
        glow: "shadow-yellow-500/20",
        icon: "text-yellow-300",
        hover: "hover:border-yellow-400/60 hover:shadow-yellow-500/30"
      },
      "Public Transport": {
        gradient: "from-red-500/30 via-pink-500/20 to-red-600/30",
        border: "border-red-400/40",
        glow: "shadow-red-500/20",
        icon: "text-red-300",
        hover: "hover:border-red-400/60 hover:shadow-red-500/30"
      },
      "Autonomous Vehicles": {
        gradient: "from-indigo-500/30 via-purple-500/20 to-indigo-600/30",
        border: "border-indigo-400/40",
        glow: "shadow-indigo-500/20",
        icon: "text-indigo-300",
        hover: "hover:border-indigo-400/60 hover:shadow-indigo-500/30"
      },
      "Sustainability": {
        gradient: "from-teal-500/30 via-green-500/20 to-teal-600/30",
        border: "border-teal-400/40",
        glow: "shadow-teal-500/20",
        icon: "text-teal-300",
        hover: "hover:border-teal-400/60 hover:shadow-teal-500/30"
      },
      "Urban Mobility": {
        gradient: "from-cyan-500/30 via-blue-500/20 to-cyan-600/30",
        border: "border-cyan-400/40",
        glow: "shadow-cyan-500/20",
        icon: "text-cyan-300",
        hover: "hover:border-cyan-400/60 hover:shadow-cyan-500/30"
      },
      "AI Ethics": {
        gradient: "from-gray-500/30 via-slate-500/20 to-gray-600/30",
        border: "border-gray-400/40",
        glow: "shadow-gray-500/20",
        icon: "text-gray-300",
        hover: "hover:border-gray-400/60 hover:shadow-gray-500/30"
      },
      "Predictive AI": {
        gradient: "from-violet-500/30 via-purple-500/20 to-violet-600/30",
        border: "border-violet-400/40",
        glow: "shadow-violet-500/20",
        icon: "text-violet-300",
        hover: "hover:border-violet-400/60 hover:shadow-violet-500/30"
      }
    };
    return colors[category as keyof typeof colors] || {
      gradient: "from-gray-500/30 via-slate-500/20 to-gray-600/30",
      border: "border-gray-400/40",
      glow: "shadow-gray-500/20",
      icon: "text-gray-300",
      hover: "hover:border-gray-400/60 hover:shadow-gray-500/30"
    };
  };

  const categoryStyle = getCategoryColor(post.category);

  return (
    <div 
      className={`bg-white/5 backdrop-blur-2xl border ${categoryStyle.border} ${categoryStyle.hover} rounded-3xl overflow-hidden transition-all duration-700 group hover:scale-105 hover:shadow-2xl ${categoryStyle.glow} animate-fade-in relative`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Holographic border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Enhanced Blog Image Placeholder */}
      <div className={`bg-gradient-to-br ${categoryStyle.gradient} h-52 flex items-center justify-center relative overflow-hidden`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className={categoryStyle.icon}>
            <defs>
              <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3"/>
                <circle cx="0" cy="0" r="1" fill="currentColor" opacity="0.2"/>
                <circle cx="40" cy="40" r="1" fill="currentColor" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
          </svg>
        </div>
        
        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-700" />
        
        {/* Main icon with enhanced styling */}
        <div className="relative z-10 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
          <FileText className={`w-12 h-12 ${categoryStyle.icon} group-hover:rotate-6 transition-all duration-500`} />
        </div>
        
        {/* Enhanced category badge */}
        <div className="absolute top-4 right-4">
          <span className={`bg-black/40 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/20 ${categoryStyle.icon} font-medium`}>
            {post.category}
          </span>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></div>
      </div>
      
      {/* Enhanced content section */}
      <div className="p-8 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="text-white">
            <defs>
              <pattern id={`content-pattern-${index}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#content-pattern-${index})`} />
          </svg>
        </div>
        
        <div className="relative z-10">
          <h2 className={`text-xl font-bold text-white mb-4 group-hover:${categoryStyle.icon} transition-colors duration-300 line-clamp-2`}>
            {post.title}
          </h2>
          <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
            {post.description}
          </p>
          
          {/* Enhanced Meta Information */}
          <div className="flex items-center justify-between mb-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-2 border border-white/10">
              <User className="w-4 h-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-2 border border-white/10">
              <Clock className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>
          
          {/* Enhanced Read More Button */}
          <a
            href={`/blogs/${post.id}`}
            className="bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 inline-flex items-center gap-3 group/button relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Read More</span>
            <ArrowRight size={20} className="relative z-10 group-hover/button:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
