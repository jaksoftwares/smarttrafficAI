"use client";

import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Joseph Kirika",
    role: "Team Lead/Backend Developer",
    image: "/images/profile.jpeg",
    bio: "Visionary leader driving AI-powered traffic solutions.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Irke Konzolo",
    role: "Frontend Developer",
    image: "/images/iyke-konzolo.jpg",
    bio: "Expert in machine learning & urban mobility AI systems.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Felix Ombongi",
    role: "Data Scientist",
    image: "/images/felix.jpg",
    bio: "Building scalable & efficient systems for SmartTraffic AI.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Allan Canon",
    role: "AI Developer",
    image: "/images/profile.jpg",
    bio: "Crafting seamless & engaging user experiences.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "John Kibet",
    role: "AI Developer",
    image: "/images/profile.jpg",
    bio: "Turning data into actionable insights for traffic control.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Derrick Gachru",
    role: "AI Developer",
    image: "/images/profile.jpg",
    bio: "Spreading awareness & driving SmartTraffic AI adoption.",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="mt-4 text-gray-600">
          A passionate team dedicated to revolutionizing traffic management.
        </p>

        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-500 font-medium">{member.role}</p>
              <p className="mt-2 text-gray-600 text-sm">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center mt-4 space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-gray-500 hover:text-blue-500 transition" size={20} />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="text-gray-500 hover:text-blue-400 transition" size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
