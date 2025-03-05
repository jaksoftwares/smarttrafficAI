"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo-g.jpeg"
            alt="SmartTraffic AI Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-2xl font-bold text-blue-600 transition duration-300 hover:text-blue-700">
            SmartTraffic AI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          {[
            { name: "About", href: "/about" },
            { name: "Features", href: "/features" },
            { name: "Impact", href: "/impact" },
            { name: "Blog", href: "/blog" },
            { name: "FAQs", href: "/faq" },
            { name: "AI Demo", href: "/demo" },
            { name: "Partners", href: "/partners" },
          ].map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative group px-2 py-1 transition duration-300 ${
                pathname === href ? "text-blue-600 font-semibold" : "hover:text-blue-500"
              }`}
            >
              {name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none transition-transform duration-300 transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu - Fixed Overlapping Issue */}
      <div
        className={`fixed top-16 left-0 w-full bg-white shadow-md px-6 py-4 space-y-3 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"
        } origin-top`}
      >
        {[
          { name: "About", href: "/about" },
          { name: "Features", href: "/features" },
          { name: "Impact", href: "/impact" },
          { name: "Blog", href: "/blog" },
          { name: "FAQs", href: "/faq" },
          { name: "AI Demo", href: "/demo" },
          { name: "Partners", href: "/partners" },
          { name: "Contact Us", href: "/contact", highlight: true },
        ].map(({ name, href, highlight }) => (
          <Link
            key={href}
            href={href}
            className={`block py-2 transition duration-300 border-b ${
              pathname === href ? "text-blue-600 font-semibold" : "hover:text-blue-500"
            } ${highlight ? "text-blue-600 font-bold" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
