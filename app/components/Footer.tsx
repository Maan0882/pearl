import { Wheat, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FarmScene from "@/app/components/3d-scene/FarmScene";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #2d1854 0%, #1e102b 40%, #160d22 100%)",
      }}
    >
      {/* Decorative grain shapes in background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-glow opacity-[0.04] blur-[80px] pointer-events-none" />

      {/* 3D Farm Scene Background */}
      {/* <FarmScene /> */}

      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr_1.2fr] gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative">
                <Image
                  src="/Pearl Logistic White.png"
                  alt="Pearl Logistics Logo"
                  width={210}
                  height={60}
                  className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 h-12`}
                  priority
                />
              </div>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-6 max-w-xs">
              Delivering premium quality Basmati Rice, Normal Rice, and Wheat
              with uncompromising standards of quality and reliability across
              50+ countries.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                {
                  name: "LinkedIn",
                  Icon: (props: any) => (
                    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  Icon: (props: any) => (
                    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  Icon: (props: any) => (
                    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-200 hover:bg-(--accent)/20 hover:text-accent-light transition-all text-xs font-semibold"
                  aria-label={social.name}
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-accent-light transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Products
            </h3>
            <ul className="space-y-3">
              {["Basmati Rice", "Normal Rice", "Premium Wheat"].map(
                (product, i) => (
                  <li key={i}>
                    <Link
                      href="/products"
                      className="text-gray-200 hover:text-accent-light transition-colors text-sm flex items-center gap-1 group"
                    >
                      {product}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Licenses
            </h3>

            <ul className="space-y-3 text-gray-200 text-sm wrap-break-word">
              <li>
                <b>IEC No:</b> CJCPG0702N
              </li>
              <li>
                <b>Udyam No:</b> UDYAM-GJ-24-0229564
              </li>
              <li>
                <b>GST No:</b> 24CJCPG0702N1ZK
              </li>
              <li className="leading-relaxed">
                <b>APEDA RCMC No:</b> RCMC/APEDA/29267/2026-2027
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-accent-light" />
                </div>
                <span className="text-sm text-gray-200 leading-relaxed">
                  D 103, SHREE RADHE SHYAM, SEVASI TP 2, BHAYLI VADODARA,
                  391410, VADODARA, GUJARAT
                </span>
              </li>
              <li className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-accent-light" />
                  </div>
                  <span className="text-sm text-gray-200">+91 7990353622</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-accent-light" />
                </div>
                <span className="text-sm text-gray-200">
                  pearllogistics1997@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Pearl Logistics | Developed with
            🫶 by Techstrota | All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-accent-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}