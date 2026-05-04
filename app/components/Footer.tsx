import { Package, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--secondary)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Package className="text-[var(--primary-light)] h-8 w-8" />
              <span className="font-bold text-2xl tracking-tight text-white">
                Pearl <span className="text-[var(--primary-light)]">Logistics</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering premium quality Basmati Rice, Normal Rice, and Wheat with uncompromising standards of quality and reliability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-[var(--primary-light)] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[var(--primary-light)] transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-[var(--primary-light)] transition-colors">Our Products</a></li>
              <li><a href="#contact" className="hover:text-[var(--primary-light)] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-[var(--primary-light)] transition-colors">Basmati Rice</a></li>
              <li><a href="#products" className="hover:text-[var(--primary-light)] transition-colors">Normal Rice</a></li>
              <li><a href="#products" className="hover:text-[var(--primary-light)] transition-colors">Premium Wheat</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--primary-light)] shrink-0 mt-0.5" />
                <span className="text-sm">123 Logistics Avenue, Industrial Estate, Global City 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--primary-light)] shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--primary-light)] shrink-0" />
                <span className="text-sm">info@pearllogistics.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Pearl Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
