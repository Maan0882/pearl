import { Wheat, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #2d1854 0%, #1e102b 40%, #160d22 100%)",
      }}
    >
      {/* Decorative grain shapes in background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-glow opacity-[0.04] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative">
                  <Image
                    src="/Pearl Logistic 2 (2).png"
                    alt="Pearl Logistics Logo"
                    width={200}
                    height={50}
                    className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 h-12`}
                    priority
                  />
              </div>
            </div>
            <p className="text-[#9b8ab3] text-sm leading-relaxed mb-6 max-w-xs">
              Delivering premium quality Basmati Rice, Normal Rice, and Wheat
              with uncompromising standards of quality and reliability across 50+
              countries.
            </p>
            {/* Social placeholders */}
            <div className="flex items-center gap-3">
              {["LinkedIn", "Twitter", "Instagram"].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#9b8ab3] hover:bg-(--accent)/20 hover:text-accent-light transition-all text-xs font-semibold"
                  aria-label={social}
                >
                  {social[0]}
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
                    className="text-[#9b8ab3] hover:text-accent-light transition-colors text-sm flex items-center gap-1 group"
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
              {[
                "Basmati Rice",
                "Normal Rice",
                "Premium Wheat",
              ].map((product, i) => (
                <li key={i}>
                  <Link
                    href="/products"
                    className="text-[#9b8ab3] hover:text-accent-light transition-colors text-sm flex items-center gap-1 group"
                  >
                    {product}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
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
                <span className="text-sm text-[#9b8ab3] leading-relaxed">
                  D 103, SHREE RADHE SHYAM, SEVASI TP 2, BHAYLI VADODARA, 391410, VADODARA, GUJARAT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-accent-light" />
                </div>
                <span className="text-sm text-[#9b8ab3]">+91 7990353622</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-accent-light" />
                </div>
                <span className="text-sm text-[#9b8ab3]">
                  kamalgohel457@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6b5691] text-sm">
            &copy; {new Date().getFullYear()} Pearl Logistics. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#6b5691]">
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
