import type { Metadata } from "next";
import { TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
//import ProductCard from "@/app/components/ProductCard";
import { Suspense } from 'react'
import ProductsGrid from "@/app/components/ProductsGrid";

export const metadata: Metadata = {
  title: "Products — Pearl Logistics",
  description:
    "Explore our premium range of Basmati Rice, Normal Rice, and high-grade Wheat. Export-quality grains processed to international standards.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* PAGE HEADER */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Grains_in_bowl.jpeg"
            alt="Rice and wheat grains in bowls"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-(--surface)/20 via-(--surface-hover)/30 to-(--surface)/20" />
        </div>
        <div className="absolute top-0 right-0 w-100 h-100 bg-accent opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="section-label mx-auto mb-4">
              <TrendingUp className="h-4 w-4" />
              <span>Our Products</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
              Wide Commodities,{" "}
              <span className="text-gradient">Premium Quality</span>
            </h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Discover our carefully curated selection of high-grade grains,
              processed and packaged to international export standards.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS BANNER */}
      <section className="py-6 sm:py-8" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-48 xs:h-60 sm:h-72 md:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-border">
            <Image
              src="/images/products_banner.png"
              alt="Premium grain commodities — Rice, Wheat"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-accent-dark/60 via-accent-dark/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
              <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg mb-1">
                Premium Agri Commodities
              </h2>
              <p className="text-white/80 text-sm md:text-base drop-shadow">
                Export-quality rice &amp; wheat from India&apos;s finest farms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID — client component handles highlight logic */}
      {/* 
          Wrapping in Suspense prevents the build error 
          by allowing this part to be rendered on the client.
      */}
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductsGrid />
      </Suspense>

      {/* BULK ORDER CTA */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-purple rounded-3xl p-10 md:p-14 border border-(--accent-light)/30">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
              Looking for Bulk Orders?
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">
              We offer competitive pricing for bulk exports with custom
              packaging and international shipping support.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Quote <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}