"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 relative overflow-visible">
      {/* Floating foot image on the right */}
      <div className="absolute right-4 -top-16 lg:right-8 lg:-top-24 z-[9999] pointer-events-none">
        <Image
          src="/images/foot.png"
          alt="Foot decoration"
          width={300}
          height={300}
          className="opacity-80 lg:w-[400px] lg:h-[400px]"
        />
      </div>
      
      <div className="container mx-auto px-6 pr-24 lg:pr-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & About */}
        <div className="flex flex-col">
          {/* Optimized Logo in Square */}
          <div className="w-32 h-32 bg-gray-800 border-2 border-gray-600 rounded-lg flex items-center justify-center overflow-hidden mb-2">
            <Image
              src="/images/logo-g.jpeg"
              alt="SmartTraffic AI Logo"
              width={128}
              height={128}
              priority // Faster loading
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-blue-500 mt-2">SmartTraffic AI</h2>
          <p className="mt-4 text-gray-400">
            An AI-powered intelligent traffic management system optimizing urban mobility, 
            reducing congestion, and enhancing road safety.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition">About</Link></li>
            <li><Link href="/about#features" className="text-gray-400 hover:text-blue-400 transition">Features</Link></li>
            <li><Link href="/about#team" className="text-gray-400 hover:text-blue-400 transition">Team</Link></li>
            <li><Link href="/blog" className="text-gray-400 hover:text-blue-400 transition">Blog</Link></li>
            <li><Link href="/demo" className="text-gray-400 hover:text-blue-400 transition">Demo</Link></li>
            <li><Link href="/faq" className="text-gray-400 hover:text-blue-400 transition">FAQ</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-400">
              <Mail size={18} className="mr-2 text-blue-400" /> support@smarttraffic.ai
            </li>
            <li className="flex items-center text-gray-400">
              <Phone size={18} className="mr-2 text-blue-400" /> +254113129442 .
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex mt-4 space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:scale-110 transition">
              <Facebook size={20} className="text-gray-400 hover:text-blue-500" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:scale-110 transition">
              <Twitter size={20} className="text-gray-400 hover:text-blue-500" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:scale-110 transition">
              <Linkedin size={20} className="text-gray-400 hover:text-blue-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SmartTraffic AI. All rights reserved.
      </div>
    </footer>
  );
}
