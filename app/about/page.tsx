import type { Metadata } from "next";
import { Leaf, ShieldCheck, Truck, ChevronRight, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Pearl Logistics",
  description: "Learn about Pearl Logistics — decades of expertise in premium grain sourcing, quality control, and global logistics.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* PAGE HEADER */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg, var(--bg) 0%, var(--bg-alt) 40%, var(--surface) 100%)" }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="section-label mx-auto mb-4"><Award className="h-4 w-4" /><span>About Us</span></div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text)] mb-6 leading-tight">
              Built on Trust, <span className="text-gradient">Driven by Quality</span>
            </h1>
            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              At Pearl Logistics, we bridge the gap between premium agriculture and global markets. With decades of expertise, we ensure every grain meets the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-16 md:py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Leaf, title: "Premium Sourcing", desc: "We partner directly with top-tier farmers across India's finest agricultural regions to ensure the best crop quality.", gradient: "from-[#c9a7f0] to-[#9b6dd7]" },
              { icon: ShieldCheck, title: "Quality Control", desc: "Rigorous multi-stage testing, sorting, and grading processes guarantee that only the finest grains make it to export.", gradient: "from-[#b388eb] to-[#7b4bbf]" },
              { icon: Truck, title: "Global Logistics", desc: "State-of-the-art supply chain with temperature-controlled storage ensures prompt, safe delivery to 50+ countries.", gradient: "from-[#9b6dd7] to-[#6b5691]" },
            ].map((f, i) => (
              <div key={i} className="feature-card cursor-pointer">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-md mb-6`}>
                  <f.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">{f.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20" style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 border border-[var(--border)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
                  Why businesses choose <span className="text-gradient">Pearl Logistics</span>
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                  We deliver not just products, but trust. Our end-to-end process ensures consistency, freshness, and compliance with international standards.
                </p>
                <div className="space-y-4">
                  {["Direct farm-to-port supply chain", "ISO certified processing facilities", "Custom packaging & private labeling", "Competitive bulk pricing with LC/TT terms"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-[var(--text)] text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg border border-[var(--border)]">
                <Image src="/images/products_banner.png" alt="Pearl Logistics grain commodities" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-16 md:py-20" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">Our <span className="text-gradient">Process</span></h2>
            <p className="text-[var(--text-muted)]">From farm to global markets — quality at every step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Sourcing", desc: "Partner with top-tier farmers and procure the finest grains from India's agricultural heartlands." },
              { step: "02", title: "Processing", desc: "Multi-stage cleaning, sorting, and grading in ISO-certified facilities." },
              { step: "03", title: "Packaging", desc: "Custom packaging with private labeling, sealed to preserve freshness." },
              { step: "04", title: "Delivery", desc: "Temperature-controlled logistics with global shipping for timely delivery." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="feature-card text-center h-full">
                  <div className="text-5xl font-extrabold text-gradient opacity-30 mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-[var(--text)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-[var(--border)] z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-purple rounded-3xl p-10 md:p-14 border border-[var(--accent-light)]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">Ready to Partner with Us?</h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto">Reach out to discuss bulk orders, custom packaging, or international shipping solutions.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">Contact Us <ChevronRight className="h-5 w-5" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
