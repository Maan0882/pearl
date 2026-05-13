import type { Metadata } from "next";
import { TrendingUp, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ProductsGrid from "@/app/components/ProductsGrid";
import CTAGrains from "@/app/components/3d-scene/CTAGrains";

export const metadata: Metadata = {
  title: "Products — Pearl Logistics",
  description:
    "Explore our premium range of Basmati Rice, Normal Rice, and high-grade Wheat.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. NEW MODERN HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#fcfcfd]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20">
                <TrendingUp className="h-4 w-4" />
                <span>Global Export Standards</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-text mb-6 tracking-tight leading-[1.1]">
                Premium <span className="text-gradient">Agri-Products</span> for
                Global Markets
              </h1>

              <p className="text-text-muted text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                We bridge the gap between India&apos;s finest farms and the
                global plate, ensuring purity, nutrition, and excellence in
                every grain.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-text/80">
                    Certified Quality
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-text/80">
                    Fast Logistics
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Image Composition */}
            <div className="relative mt-12 lg:mt-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative w-full max-w-[500px] mx-auto aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl lg:rotate-3 hover:rotate-0 transition-transform duration-700 border-4 md:border-8 border-white">
                <Image
                  src="/combined.png"
                  alt="Premium Grains"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Card Overlay */}
              <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-border animate-bounce-slow">
                <p className="text-accent font-bold text-xl md:text-2xl">100%</p>
                <p className="text-text-muted text-[10px] md:text-xs font-bold uppercase">
                  Organic Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT GRID SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Our Featured Collection
              </h2>
              <p className="text-text-muted">
                Select from our wide range of premium basmati, non-basmati rice,
                and organic wheat varieties.
              </p>
            </div>
            <div className="h-px flex-grow bg-border mx-8 hidden md:block mb-5" />
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-80 bg-gray-100 rounded-3xl animate-pulse"
                  />
                ))}
              </div>
            }
          >
            <ProductsGrid />
          </Suspense>
        </div>
      </section>

      {/* 3. ELEGANT CTA SECTION */}
      <section className="py-32 relative border-t border-white/5 overflow-hidden" style={{ background: "linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%)" }}>
        
        {/* Interactive 3D Heap Grains Animation */}
        <CTAGrains />

        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-0 right-0 w-150 h-150 rounded-full bg-accent blur-[140px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 left-0 w-120 h-120 rounded-full bg-glow blur-[120px] mix-blend-screen opacity-50" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-purple rounded-[64px] p-12 md:p-24 border border-white/10 backdrop-blur-2xl shadow-[0_32px_80px_rgba(155,109,215,0.12)]">
            <ShieldCheck className="h-16 w-16 text-accent mx-auto mb-10 opacity-80 animate-bounce-slow" />
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-8 tracking-tight">
              Scale Your Supply <br className="hidden md:block" />
              <span className="font-serif italic text-gradient pr-2">With Perfection</span>
            </h2>
            
            <p className="text-text-muted mb-14 max-w-2xl mx-auto text-lg md:text-2xl font-medium leading-relaxed">
              Experience the pinnacle of agricultural export logistics. We provide 
              certified quality, global shipping support, and competitive bulk 
              pricing tailored to your business needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href="/contact"
                className="group relative px-12 py-5 bg-text text-bg overflow-hidden transition-all duration-500 rounded-sm"
              >
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 uppercase tracking-[0.2em] text-sm font-bold flex items-center gap-2">
                  Contact Sales <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                href="/about"
                className="group px-12 py-5 border border-text/10 text-text hover:border-accent hover:text-accent transition-all duration-500 uppercase tracking-[0.2em] text-sm font-semibold rounded-sm"
              >
                Our Quality Standards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}