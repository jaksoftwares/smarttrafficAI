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
    <nav className="fixed w-full z-50 px-4 top-4">
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/10 border border-white/30 shadow-lg rounded-3xl px-6 py-4 flex justify-between items-center transition-all duration-300">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo-g.jpeg"
            alt="SmartTraffic AI Logo"
            width={40}
            height={40}
            priority
            className="rounded-full border border-white/40"
          />
          <span className="text-2xl font-bold text-white transition duration-300 hover:text-blue-200">
            SmartTraffic AI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          {[
            { name: "About", href: "/about" },
            { name: "Features", href: "/about#features" },
            { name: "Blog", href: "/blog" },
            { name: "FAQs", href: "/faq" },
            { name: "Team", href: "/about#team" },
            { name: "AI Demo", href: "/demo" }, 
            { name: "Events", href: "/events"}
          ].map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative group px-2 py-1 transition duration-300 ${
                pathname === href ? "text-blue-200 font-semibold" : "hover:text-blue-400"
              }`}
            >
              {name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
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
          className="md:hidden text-white focus:outline-none transition-transform duration-300 transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed top-24 left-4 right-4 z-40 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 shadow-xl p-6 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {[
          { name: "About", href: "/about" },
          { name: "Features", href: "/about#features" },
          { name: "Blog", href: "/blog" },
          { name: "FAQs", href: "/faq" },
          { name: "AI Demo", href: "/demo" },
          { name: "Team", href: "/about#team" },
          { name: "Events", href: "/events"},
          { name: "Contact Us", href: "/contact", highlight: true },
        ].map(({ name, href, highlight }) => (
          <Link
            key={href}
            href={href}
            className={`block py-2 text-white border-b border-white/10 transition duration-300 ${
              pathname === href ? "text-blue-200 font-semibold" : "hover:text-blue-400"
            } ${highlight ? "text-blue-300 font-bold" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
