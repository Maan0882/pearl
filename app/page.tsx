import { ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FloatingGrains from "@/app/components/FloatingGrains";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ═══════════════════════ CINEMATIC HERO ═══════════════════════ */}
      <section
        className="relative z-20 min-h-dvh w-full flex items-center pt-20 md:pt-24 overflow-hidden"
      >
        {/* Section Background Layer */}
        <div
          className="absolute inset-0 z-[-2]"
          style={{
            background: "linear-gradient(160deg, var(--accent-light) 0%, var(--surface-hover) 40%, var(--surface) 70%, var(--accent-light) 100%)",
          }}
        />

        <div className="absolute top-[22.5vh] md:top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2 w-150 h-150 md:w-200 md:h-200 rounded-full border border-accent/10 opacity-30 animate-spin-slow pointer-events-none z-[-1]" />
        <div className="absolute top-[22.5vh] md:top-1/2 left-1/2 md:left-1/4 -translate-x-1/2 -translate-y-1/2 w-100 h-100 md:w-150 md:h-150 rounded-full border border-accent-light/10 opacity-20 animate-spin-slow pointer-events-none z-[-1]" style={{ animationDirection: "reverse", animationDuration: "40s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-0">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 relative z-10 text-center md:text-left flex flex-col items-center md:items-start justify-center">
              <p className="text-text uppercase tracking-[0.4em] text-[10px] sm:text-xs md:text-sm font-semibold mb-6 md:mb-8 animate-fade-in-up">
                Pearl Logistics
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-text tracking-tight leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                The Essence <br className="hidden md:block" />
                of <span className="text-accent-dark md:text-accent font-serif italic pr-2">Pure Grains</span>
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl text-text1 font-medium max-w-xl md:max-w-none md:mx-0 mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Meticulously sourced, elegantly delivered. Nourishing the world with nature&apos;s finest harvests.
              </p>

              <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-10 py-4 bg-accent border border-accent text-bg-accent-dark hover:text hover:text-white transition-all duration-500 uppercase tracking-widest text-sm font-medium hover:border-accent"
                >
                  Explore Our Collection
                </Link>
              </div>
            </div>

            {/* Video Content */}
            <div className="flex-1 w-full relative h-[45vh] md:h-[60vh] lg:h-[70vh] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl z-20 isolate shrink-0">
              <video
                src="/pearlvideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Gradient to smooth out the edge of the video on mobile */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-bg/50 md:hidden pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <FloatingGrains />
        <section className="py-24 md:py-32 relative border-t border-white/5" style={{ background: "var(--bg-alt)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative h-100 lg:h-162.5 w-full rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl group z-20 isolate">
                <Image
                  src="/RIce_&_Wheat_In_Hand.jpeg"
                  alt="Harvesting Grains"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-bg/60 to-transparent pointer-events-none" />
              </div>

              <div className="space-y-8 lg:pr-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-px w-12 bg-accent"></div>
                  <span className="uppercase tracking-widest text-accent text-sm font-semibold">Our Heritage</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                  A Legacy of <br />
                  <span className="text-gradient font-serif italic pr-2">Purity & Quality</span>
                </h2>

                <p className="text-lg md:text-xl text-text-muted leading-relaxed font-medium">
                  At Pearl Logistics, our roots run deep in the fertile soils where the finest grains are cultivated. We believe that exceptional quality begins at the source, partnering directly with seasoned farmers to ensure perfection in every harvest.
                </p>

                <p className="text-base text-text-muted leading-relaxed font-medium">
                  Driven by a passion for authenticity, we bring wholesome, nutritious agricultural products to tables across the globe. Our uncompromising standards guarantee that every grain of our Basmati, normal rice, and premium wheat delivers an unmatched culinary experience.
                </p>

                <div className="pt-6">
                  <Link href="/about" className="group inline-flex items-center gap-3 text-text hover:text-accent transition-colors uppercase tracking-widest text-sm font-semibold">
                    Discover Our Story
                    <span className="w-8 h-8 rounded-full border border-text/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ ELEGANT PRODUCTS SHOWCASE ═══════════════════════ */}

        <section className="py-24 md:py-40 relative" style={{ background: "var(--bg)" }}>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="text-center mb-24 md:mb-40">
              <span className="uppercase tracking-widest text-accent text-sm font-semibold mb-4 block">The Collection</span>
              <h2 className="text-4xl md:text-6xl font-bold text-text">
                Our Finest <span className="text-gradient font-serif italic pr-2">Grains</span>
              </h2>
            </div>

            <div className="space-y-24 sm:space-y-32 md:space-y-48">

              {/* Product 1 - Basmati */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-0 items-center">
                <div className="lg:col-span-7 relative h-75 sm:h-100 md:h-150 w-full overflow-hidden z-20 isolate">
                  <Image
                    src="/images/basmati_rice.png"
                    alt="Basmati Rice"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                </div>
                <div className="lg:col-span-5 lg:-ml-24 relative z-10">
                  <div className="glass-purple p-6 sm:p-8 md:p-10 lg:p-16 rounded-sm border border-white/5 backdrop-blur-xl shadow-2xl isolate">
                    <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">01 &mdash; Signature</span>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text mb-4 sm:mb-6">Basmati Rice</h3>
                    <p className="text-text1 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                      Aromatic, long-grain perfection. Our Basmati rice is carefully aged to enhance its natural fragrance and delicate flavor, making it the undisputed crown jewel of any feast.
                    </p>
                    <Link href="/products/basmati-rice" className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors uppercase tracking-widest text-xs font-semibold">
                      Explore Basmati <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Product 2 - Wheat */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-0 items-center">
                <div className="order-2 lg:order-1 lg:col-span-5 lg:-mr-24 relative z-10">
                  <div className="glass-purple p-6 sm:p-8 md:p-10 lg:p-16 rounded-sm border border-white/5 backdrop-blur-xl shadow-2xl isolate">
                    <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">02 &mdash; Premium</span>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text mb-4 sm:mb-6">Golden Wheat</h3>
                    <p className="text-text1 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                      Wholesome and nutrient-rich. Harvested at the peak of perfection to ensure optimal baking qualities, providing the essential foundation for breads and pastries worldwide.
                    </p>
                    <Link href="/products/wheat" className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors uppercase tracking-widest text-xs font-semibold">
                      Explore Wheat <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2 lg:col-span-7 relative h-75 sm:h-100 md:h-150 w-full overflow-hidden z-20 isolate">
                  <Image
                    src="/images/wheat_grains.png"
                    alt="Premium Wheat"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                </div>
              </div>

              {/* Product 3 - Normal Rice */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-0 items-center">
                <div className="lg:col-span-7 relative h-75 sm:h-100 md:h-150 w-full overflow-hidden z-20 isolate">
                  <Image
                    src="/images/normal_rice.png"
                    alt="Normal Rice"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                </div>
                <div className="lg:col-span-5 lg:-ml-24 relative z-10">
                  <div className="glass-purple p-6 sm:p-8 md:p-10 lg:p-16 rounded-sm border border-white/5 backdrop-blur-xl shadow-2xl isolate">
                    <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">03 &mdash; Essential</span>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text mb-4 sm:mb-6">Normal Rice</h3>
                    <p className="text-text1 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                      Versatile, comforting, and essential. Providing daily sustenance for millions with reliable consistency, perfect texture, and comforting taste in every single grain.
                    </p>
                    <Link href="/products/normal-rice" className="inline-flex items-center gap-2 text-text hover:text-accent transition-colors uppercase tracking-widest text-xs font-semibold">
                      Explore Normal Rice <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════ ELEGANT CTA ═══════════════════════ */}
        <section className="py-24 relative border-t border-white/5" style={{ background: "linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-125 h-125 rounded-full bg-accent blur-[120px] mix-blend-screen" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ShieldCheck className="h-12 w-12 text-accent mx-auto mb-8 opacity-80" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8">
              Ready to Partner <br />
              <span className="font-serif italic text-gradient pr-2">With Us?</span>
            </h2>
            <p className="text-text-muted mb-12 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              We offer competitive pricing for bulk exports with custom packaging
              and international shipping support to over 50 countries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="px-10 py-4 bg-text text-bg hover:bg-accent hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-bold"
              >
                Contact Sales
              </Link>
              <Link
                href="/about"
                className="px-10 py-4 border border-white/20 text-text hover:border-accent hover:text-accent transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
              >
                Our Commitments
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}