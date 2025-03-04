"use client"; 
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SmartTraffic AI
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/features" className="hover:text-blue-500">Features</Link>
          <Link href="/impact" className="hover:text-blue-500">Impact</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          <Link href="/faq" className="hover:text-blue-500">FAQs</Link>
          <Link href="/demo" className="hover:text-blue-500">AI Demo</Link>
          <Link href="/partners" className="hover:text-blue-500">Partners</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 transition-all duration-300">
          <Link href="/about" className="block py-2 border-b" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/features" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="/impact" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Impact</Link>
          <Link href="/blog" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/faq" className="block py-2 border-b" onClick={() => setIsOpen(false)}>FAQs</Link>
          <Link href="/demo" className="block py-2 border-b" onClick={() => setIsOpen(false)}>AI Demo</Link>
          <Link href="/partners" className="block py-2 border-b" onClick={() => setIsOpen(false)}>Partners</Link>
          <Link href="/contact" className="block py-2 text-blue-600 font-bold" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
