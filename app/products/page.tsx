import type { Metadata } from "next";
import { TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";

export const metadata: Metadata = {
  title: "Products — Pearl Logistics",
  description: "Explore our premium range of Basmati Rice, Normal Rice, and high-grade Wheat. Export-quality grains processed to international standards.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* PAGE HEADER */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg, var(--bg) 0%, var(--bg-alt) 40%, var(--surface) 100%)" }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="section-label mx-auto mb-4"><TrendingUp className="h-4 w-4" /><span>Our Products</span></div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-6 leading-tight">
              Wide Commodities, <span className="text-gradient">Premium Quality</span>
            </h1>
            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Discover our carefully curated selection of high-grade grains, processed and packaged to international export standards.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS BANNER */}
      <section className="py-8" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[200px] md:h-[320px] rounded-3xl overflow-hidden shadow-lg border border-[var(--border)]">
            <Image src="/images/products_banner.png" alt="Premium grain commodities — Rice, Wheat" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-dark)]/50 via-transparent to-[var(--accent)]/30 pointer-events-none" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
              <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg mb-1">Premium Agri Commodities</h2>
              <p className="text-white/80 text-sm md:text-base drop-shadow">Export-quality rice &amp; wheat from India&apos;s finest farms</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-12 md:py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basmati Rice */}
            <div className="space-y-6">
              <ProductCard name="Basmati Rice" image="/images/basmati_rice.png" badge="Best Seller" href="/contact" />
              <div className="feature-card !p-6">
                <h3 className="text-lg font-bold text-[var(--text)] mb-2">Basmati Rice</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                  Long-grain, aromatic perfection. Known for its distinct flavor and fluffy texture, ideal for biryanis and premium dishes. Sourced from India&apos;s finest paddy fields.
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Extra-long grain (8mm+)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Aged for enhanced aroma</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Non-GMO, pesticide-free</li>
                </ul>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors">
                  Inquire Now <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Normal Rice */}
            <div className="space-y-6">
              <ProductCard name="Normal Rice" image="/images/normal_rice.png" href="/contact" />
              <div className="feature-card !p-6">
                <h3 className="text-lg font-bold text-[var(--text)] mb-2">Normal Rice</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                  High-quality, versatile daily rice. Carefully milled for maximum nutrition and consistent cooking results. Perfect for everyday consumption worldwide.
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Premium milled quality</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />High nutritional value</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Consistent grain size</li>
                </ul>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors">
                  Inquire Now <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Premium Wheat */}
            <div className="space-y-6">
              <ProductCard name="Premium Wheat" image="/images/wheat_grains.png" href="/contact" />
              <div className="feature-card !p-6">
                <h3 className="text-lg font-bold text-[var(--text)] mb-2">Premium Wheat</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                  Rich, golden wheat kernels sourced from the finest farms. Perfect for milling into high-quality flour for all baking and culinary needs.
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />High gluten content</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Golden, plump kernels</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />Export-grade certified</li>
                </ul>
                <Link href="/contact" className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors">
                  Inquire Now <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BULK ORDER CTA */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-purple rounded-3xl p-10 md:p-14 border border-[var(--accent-light)]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">Looking for Bulk Orders?</h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto">We offer competitive pricing for bulk exports with custom packaging and international shipping support.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">Request a Quote <ArrowRight className="h-5 w-5" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
