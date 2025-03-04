"use client";

import { Building, Handshake, Star, Users, Mail } from "lucide-react";
import { JSX } from "react";

export default function Partners() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-24 text-center">
        <h1 className="text-4xl font-bold">Our Trusted Partners</h1>
        <p className="mt-4 text-lg">
          Collaborating with leading institutions and businesses to revolutionize traffic management.
        </p>
      </div>

      {/* Why Partner With Us? */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center">Why Partner With SmartTraffic AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <FeatureCard
            icon={<Handshake size={32} className="text-blue-600" />}
            title="Strong Collaborations"
            description="We work closely with governments, transport agencies, and private enterprises."
          />
          <FeatureCard
            icon={<Users size={32} className="text-blue-600" />}
            title="Impactful Innovation"
            description="Our AI-driven solutions create sustainable and efficient transportation systems."
          />
          <FeatureCard
            icon={<Star size={32} className="text-blue-600" />}
            title="Proven Success"
            description="Our AI has improved urban mobility, reducing congestion and increasing safety."
          />
        </div>
      </div>

      {/* Our Trusted Partners */}
      <div className="container mx-auto py-16 px-6 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-semibold text-center">Our Trusted Partners</h2>
        <p className="text-gray-600 text-center mt-2">
          We are proud to collaborate with global organizations.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 items-center justify-center">
          <PartnerLogo name="Tech Solutions Inc." />
          <PartnerLogo name="Global Traffic Authority" />
          <PartnerLogo name="Urban Mobility Group" />
          <PartnerLogo name="AI Innovations Lab" />
        </div>
      </div>

      {/* Become a Partner */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-semibold">Become a Partner</h2>
        <p className="text-gray-600 mt-2">Join us in shaping the future of smart traffic management.</p>
        <div className="mt-6">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
            <Mail className="mr-2" /> Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

// Partner Logo Placeholder
function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <Building size={48} className="text-gray-500" />
      <h3 className="text-lg font-medium mt-2">{name}</h3>
    </div>
  );
}
