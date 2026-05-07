"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Wheat, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [pathname]);
 
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];
 
  const productSubLinks = [
    { name: "Basmati Rice", href: "/products/basmati-rice" },
    { name: "Normal Rice", href: "/products/normal-rice" },
    { name: "Wheat", href: "/products/wheat" },
  ];
 
  const isProductsActive = pathname === "/products";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg py-3"
          : "bg-linear-to-r from-bg via-bg-alt to-surface py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
                <Image
                  src="/Pearl Logistic 2 (2).png"
                  alt="Pearl Logistics Logo"
                  width={200}
                  height={50}
                  className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-10' : 'h-14'}`}
                  priority
                />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {/* Home & About */}
            {navLinks.filter((l) => l.href !== "/contact").map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 font-medium transition-colors text-md group ${
                  pathname === link.href
                    ? "text-accent-dark"
                    : "text-text hover:text-accent-dark"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-accent to-glow rounded-full transition-all duration-300 ${
                    pathname === link.href ? "w-3/4" : "w-0 group-hover:w-3/4"
                  }`}
                />
              </Link>
            ))}
 
            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsOpen((prev) => !prev)}
                className={`relative px-4 py-2 font-medium transition-colors text-md group flex items-center gap-1 ${
                  isProductsActive ? "text-accent-dark" : "text-text hover:text-accent-dark"
                }`}
              >
                Products
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-accent to-glow rounded-full transition-all duration-300 ${
                    isProductsActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                  }`}
                />
              </button>
 
              {/* Dropdown Panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 glass rounded-2xl shadow-xl border border-border overflow-hidden transition-all duration-200 ${
                  isProductsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* "All Products" link */}
                <Link
                  href="/products"
                  onClick={() => setIsProductsOpen(false)}
                  className={`block px-4 py-3 text-sm font-semibold border-b border-border transition-colors ${
                    pathname === "/products"
                      ? "text-accent-dark bg-surface"
                      : "text-text hover:bg-surface hover:text-accent-dark"
                  }`}
                >
                  All Products
                </Link>
                {productSubLinks.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    onClick={() => setIsProductsOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-text-muted hover:bg-surface hover:text-accent-dark transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us CTA */}
            <Link
              href="/contact"
              className="ml-3 btn-primary text-md py-2.5! px-6! inline-flex items-center gap-2"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-text hover:bg-surface-hover transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-2xl border-t border-border transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[90vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-2 max-h-[80vh] overflow-y-auto">
          {navLinks.filter((l) => l.href !== "/contact").map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                pathname === link.href
                  ? "bg-surface text-accent-dark"
                  : "text-text hover:bg-surface hover:text-accent-dark"
              }`}
            >
              {link.name}
            </Link>
          ))}
 
          {/* Mobile Products Accordion */}
          <div>
            <button
              onClick={() => setIsMobileProductsOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-colors ${
                isProductsActive
                  ? "bg-surface text-accent-dark"
                  : "text-text hover:bg-surface hover:text-accent-dark"
              }`}
            >
              Products
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isMobileProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
 
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isMobileProductsOpen ? "max-h-60" : "max-h-0"
              }`}
            >
              <div className="ml-4 mt-1 space-y-1 border-l-2 border-accent/30 pl-3">
                <Link
                  href="/products"
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-text hover:bg-surface hover:text-accent-dark transition-colors"
                >
                  All Products
                </Link>
                {productSubLinks.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    className="block px-3 py-2 rounded-lg text-sm text-text-muted hover:bg-surface hover:text-accent-dark transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
 
          <div className="pt-3">
            <Link
              href="/contact"
              className="block w-full text-center btn-primary rounded-xl!"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
