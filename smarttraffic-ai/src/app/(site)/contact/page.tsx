"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  Clock,
  Globe,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const StylishUnderline = ({ color = "text-yellow-400", position = "top" }: { color?: string; position?: "top" | "bottom" }) => (
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="text-cyan-400">
          <defs>
            <pattern id="contactHexagons" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,5 50,20 50,40 30,55 10,40 10,20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactHexagons)" />
        </svg>
      </div>

      {/* Animated Snake Lines */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Snake Path 1 - Curved flowing line */}
          <g>
            <path
              d="M 0,20 Q 200,80 400,40 T 800,60 L 1000,80 Q 1200,20 1400,100 T 1800,60"
              fill="none"
              stroke="rgb(251 191 36 / 0.4)"
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
              stroke="rgb(59 130 246 / 0.35)"
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
              stroke="rgb(34 197 94 / 0.3)"
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
              stroke="rgb(168 85 247 / 0.3)"
              strokeWidth="2.5"
              strokeDasharray="4,10"
              className="animate-snake-flow-4"
            />
          </g>
          
          {/* Snake Path 5 - Vertical flowing */}
          <g>
            <path
              d="M 1400,0 Q 1350,100 1400,200 T 1400,400 Q 1350,500 1400,600 T 1400,800"
              fill="none"
              stroke="rgb(236 72 153 / 0.3)"
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
              stroke="rgb(14 165 233 / 0.35)"
              strokeWidth="2.5"
              strokeDasharray="8,8"
              className="animate-snake-flow-6"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-400 mb-6 animate-pulse">
              Get In Touch
            </h1>
            <StylishUnderline color="text-yellow-400" position="top" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to revolutionize your city&apos;s traffic management? Let&apos;s discuss how SmartTraffic AI can transform your urban infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email Us</h3>
                      <p className="text-gray-300">support@smarttraffic.ai</p>
                      <p className="text-gray-400 text-sm">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-full group-hover:bg-green-500/30 transition-colors">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Call Us</h3>
                      <p className="text-gray-300">+254113129442</p>
                      <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-full group-hover:bg-purple-500/30 transition-colors">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Visit Us</h3>
                      <p className="text-gray-300">123 Innovation Drive</p>
                      <p className="text-gray-300">Tech Valley, CA 94016</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-500/20 p-3 rounded-full group-hover:bg-cyan-500/30 transition-colors">
                      <Clock className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Weekend: Emergency support only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-white font-bold text-xl mb-6 text-center">Connect With Us</h3>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="bg-blue-600/20 p-3 rounded-full hover:bg-blue-600/40 transition-colors group">
                    <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="bg-gray-600/20 p-3 rounded-full hover:bg-gray-600/40 transition-colors group">
                    <Github className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="bg-blue-500/20 p-3 rounded-full hover:bg-blue-500/40 transition-colors group">
                    <Twitter className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="bg-purple-600/20 p-3 rounded-full hover:bg-purple-600/40 transition-colors group">
                    <Globe className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Form background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" className="text-blue-400">
                  <defs>
                    <pattern id="formGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#formGrid)" />
                </svg>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2 font-medium">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all duration-300 resize-none"
                          placeholder="Tell us about your project or ask us anything..."
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
                    >
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
        {/* Animated hexagon background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="animate-pulse">
            <defs>
              <pattern id="ctaHexagons" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,5 50,20 50,40 30,55 10,40 10,20" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaHexagons)" />
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
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join hundreds of cities already using SmartTraffic AI to create smarter, safer, and more efficient transportation systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="/demo"
              className="bg-transparent text-white px-8 py-4 rounded-3xl text-lg font-semibold border-2 border-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Schedule Demo
              <ArrowRight 
                size={24} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </a>
            
            <a
              href="/about"
              className="bg-transparent text-white px-10 py-4 rounded-2xl text-xl font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-yellow-400/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Learn More
              <ArrowRight size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <StylishUnderline color="text-white" position="bottom" />
        </div>
      </section>

      {/* CSS for snake animations */}
      <style jsx>{`
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
