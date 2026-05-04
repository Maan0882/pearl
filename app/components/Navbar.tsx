"use client";

import { useState, useEffect } from "react";
import { Menu, X, Package } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="text-[var(--primary)] h-8 w-8" />
            <span className="font-bold text-2xl tracking-tight text-[var(--foreground)]">
              Pearl <span className="text-[var(--primary)]">Logistics</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--foreground)] p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 shadow-lg border-t border-[var(--secondary)]">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-[var(--foreground)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] rounded-md font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-[var(--primary)] text-white px-5 py-3 rounded-md font-medium"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
