import { ArrowRight, Leaf, ShieldCheck, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FloatingGrains from "@/app/components/FloatingGrains";
import ProductCard from "@/app/components/ProductCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══════════════════════ HERO SECTION ═══════════════════════ */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, var(--bg) 0%, var(--bg-alt) 30%, var(--surface) 60%, var(--bg-alt) 100%)",
        }}
      >
        <FloatingGrains />

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full border border-border opacity-20 animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full border border-accent-light opacity-15 animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in-up">
              <div className="section-label mx-auto lg:mx-0">
                <Leaf className="h-4 w-4" />
                <span>Premium Quality Grains</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text tracking-tight leading-[1.1] sm:leading-[1.08]">
                Nourishing the{" "}
                <br className="hidden sm:block" />
                World with{" "}
                <span className="text-gradient">Premium Grains</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Pearl Logistics specializes in the finest Basmati Rice, Normal Rice, and
                high-grade Wheat. From farm to your doorstep with uncompromising
                reliability and global reach.
              </p>

              <div className="flex flex-col xs:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="btn-primary w-full xs:w-auto inline-flex items-center justify-center gap-2 text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Products <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="btn-secondary w-full xs:w-auto inline-flex items-center justify-center text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="relative block lg:block">
              <div className="relative h-72 sm:h-96 md:h-110 lg:h-135 w-full">
                {/* Glow behind card */}
                <div className="absolute inset-4 bg-linear-to-tr from-accent to-glow rounded-[2rem] sm:rounded-[2.5rem] opacity-15 blur-2xl" />

                {/* Main image container */}
                <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-border">
                  <Image
                    src="/RIce_&_Wheat_In_Hand.jpeg"
                    alt="Premium grain fields — Pearl Logistics"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-accent-dark/30 to-transparent pointer-events-none" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-2 sm:-left-4 glass-purple rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl z-20 animate-float-medium" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-linear-to-br from-accent to-accent-dark flex items-center justify-center">
                      <ShieldCheck className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-text text-[10px] sm:text-sm">100% Certified</p>
                      <p className="text-[8px] sm:text-xs text-text-muted">Premium Export Quality</p>
                    </div>
                  </div>
                </div>

                {/* Top-right badge */}
                <div className="absolute -top-3 -right-2 sm:-right-3 glass rounded-lg sm:rounded-xl px-2 sm:px-4 py-2 sm:py-3 shadow-lg z-20 animate-float-medium" style={{ animationDelay: "2s" }}>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Globe className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-accent" />
                    <span className="text-[10px] sm:text-sm font-semibold text-text">Global Reach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FEATURED PRODUCTS PREVIEW ═══════════════════════ */}
      <section className="py-20 md:py-28 relative" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="section-label mb-4">
                <Leaf className="h-4 w-4" />
                <span>Our Products</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-text leading-tight">
                Premium{" "}
                <span className="text-gradient">Commodities</span>
              </h2>
            </div>
            <Link
              href="/products"
              className="btn-secondary inline-flex items-center gap-2 self-start md:self-auto"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              name="Basmati Rice"
              image="/images/basmati_rice.png"
              badge="Best Seller"
              href="/products"
            />
            <ProductCard
              name="Normal Rice"
              image="/images/normal_rice.png"
              href="/products"
            />
            <ProductCard
              name="Premium Wheat"
              image="/images/wheat_grains.png"
              href="/products"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA SECTION ═══════════════════════ */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-purple rounded-3xl p-10 md:p-14 border border-accent-light/30">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto text-base md:text-lg">
              We offer competitive pricing for bulk exports with custom packaging
              and international shipping support to 50+ countries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
              <Link
                href="/about"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}