"use client";

import Image from "next/image";
import { Linkedin, Twitter, Crown, Users, Code, Database, Brain, BarChart3 } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Lawrence Nderu",
    role: "Project Lead & Supervisor",
    image: "/images/dr-lawrence.jpg",
    bio: "Leading academic supervisor guiding the SmartTraffic AI project with expertise in AI and urban systems.",
    linkedin: "#",
    twitter: "#",
    icon: Crown,
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-400/30",
    iconColor: "text-yellow-400",
    hoverBorder: "hover:border-yellow-400/50"
  },
  {
    name: "Joseph Kirika",
    role: "Team Lead & Backend Developer",
    image: "/images/profile.jpeg",
    bio: "Visionary student leader driving AI-powered traffic solutions with backend expertise.",
    linkedin: "#",
    twitter: "#",
    icon: Users,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400/30",
    iconColor: "text-blue-400",
    hoverBorder: "hover:border-blue-400/50"
  },
  {
    name: "Irke Konzolo",
    role: "Frontend Developer",
    image: "/images/iyke-konzolo.jpg",
    bio: "Expert in creating seamless user experiences and modern web interfaces.",
    linkedin: "#",
    twitter: "#",
    icon: Code,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-400/30",
    iconColor: "text-green-400",
    hoverBorder: "hover:border-green-400/50"
  },
  {
    name: "Felix Ombongi",
    role: "Data Scientist",
    image: "/images/felix.jpg",
    bio: "Building scalable data pipelines and analytics for traffic intelligence systems.",
    linkedin: "#",
    twitter: "#",
    icon: BarChart3,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-400/30",
    iconColor: "text-purple-400",
    hoverBorder: "hover:border-purple-400/50"
  },
  {
    name: "Allan Canon",
    role: "AI Developer",
    image: "/images/profile.jpg",
    bio: "Developing machine learning models for intelligent traffic prediction and optimization.",
    linkedin: "#",
    twitter: "#",
    icon: Brain,
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-400/30",
    iconColor: "text-red-400",
    hoverBorder: "hover:border-red-400/50"
  },
  {
    name: "John Kibet",
    role: "AI Developer",
    image: "/images/profile.jpg",
    bio: "Turning traffic data into actionable insights through advanced AI algorithms.",
    linkedin: "#",
    twitter: "#",
    icon: Brain,
    color: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-400/30",
    iconColor: "text-indigo-400",
    hoverBorder: "hover:border-indigo-400/50"
  },
  {
    name: "Derrick Gacheru",
    role: "AI Developer",
    image: "/images/profile.jpg",
    bio: "Spreading awareness and driving SmartTraffic AI adoption through innovative solutions.",
    linkedin: "#",
    twitter: "#",
    icon: Database,
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-400/30",
    iconColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-400/50"
  },
];

export default function TeamSection() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-yellow-200 to-blue-400 text-transparent bg-clip-text mb-20 animate-pulse">
        Meet Our Team
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        A passionate group of students and academic leader working together to revolutionize urban traffic management through AI innovation.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member, index) => {
          const IconComponent = member.icon;
          return (
            <div 
              key={index} 
              className={`bg-white/5 backdrop-blur-xl rounded-3xl p-6 border ${member.borderColor} ${member.hoverBorder} hover:bg-white/8 transition-all duration-500 group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Role Icon */}
              <div className={`p-3 bg-gradient-to-br ${member.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <IconComponent className={`w-6 h-6 ${member.iconColor}`} />
              </div>

              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full p-1`}>
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className={`${member.iconColor} font-medium text-sm mb-3`}>{member.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="text-gray-400 hover:text-blue-400 transition" size={16} />
                </a>
                <a 
                  href={member.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Twitter className="text-gray-400 hover:text-blue-300 transition" size={16} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
