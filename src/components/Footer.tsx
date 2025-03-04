"use client";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">SmartTraffic AI</h2>
          <p className="mt-4 text-gray-400">
            An AI-powered intelligent traffic management system optimizing urban mobility, 
            reducing congestion, and enhancing road safety.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-blue-400">About</Link></li>
            <li><Link href="/features" className="text-gray-400 hover:text-blue-400">Features</Link></li>
            <li><Link href="/impact" className="text-gray-400 hover:text-blue-400">Impact</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-400">
              <Mail size={18} className="mr-2" /> support@smarttraffic.ai
            </li>
            <li className="flex items-center text-gray-400">
              <Phone size={18} className="mr-2" /> +1 (555) 123-4567
            </li>
          </ul>
          {/* Social Media Links */}
          <div className="flex mt-4 space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook size={20} className="text-gray-400 hover:text-blue-500" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter size={20} className="text-gray-400 hover:text-blue-500" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
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
