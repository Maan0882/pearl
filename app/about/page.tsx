import type { Metadata } from "next";
import { Leaf, ShieldCheck, Truck, ChevronRight, Award, Settings, Package, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Global3DGrains from "@/app/components/3d-scene/Global3DGrains";
import CTAGrains from "@/app/components/3d-scene/CTAGrains";

export const metadata: Metadata = {
  title: "About Us — Pearl Logistics",
  description: "Learn about Pearl Logistics — decades of expertise in premium grain sourcing, quality control, and global logistics.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <Global3DGrains />
      {/* PAGE HEADER */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/RIce_&_Wheat.jpeg"
            alt="Rice and wheat grains"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark to light gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-(--surface)/20 via-(--surface-hover)/30 to-(--surface)/20" />
        </div>
        <div className="absolute top-0 right-0 w-100 h-100 bg-accent opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <div className="section-label mx-auto mb-4"><Award className="h-4 w-4" /><span>About Us</span></div>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
              Built on Trust, <span className="text-gradient">Driven by Quality</span>
            </h1>
            <p className="text-base font-bold md:text-lg leading-relaxed max-w-3xl mx-auto text-text1">
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
                <div className={`h-14 w-14 rounded-2xl bg-linear-to-br ${f.gradient} flex items-center justify-center shadow-md mb-6`}>
                  <f.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{f.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20" style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                  Why businesses choose <span className="text-gradient">Pearl Logistics</span>
                </h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  We deliver not just products, but trust. Our end-to-end process ensures consistency, freshness, and compliance with international standards.
                </p>
                <div className="space-y-4">
                  {["Direct farm-to-port supply chain", "ISO certified processing facilities", "Custom packaging & private labeling", "Competitive bulk pricing with LC/TT terms"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-linear-to-br from-accent to-accent-dark flex items-center justify-center shrink-0">
                        <ChevronRight className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-text text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg border border-border z-20">
                <Image src="/images/products_banner.png" alt="Pearl Logistics grain commodities" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-linear-to-r from-(--accent)/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">Our <span className="text-gradient">Process</span></h2>
            <p className="text-text-muted text-lg">From farm to global markets — quality engineered at every step of the journey.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />
            
            <div className="space-y-16 md:space-y-24">
              {[
                { step: "01", title: "Sourcing", desc: "We partner directly with top-tier farmers across India's finest agricultural heartlands, procuring grains at peak harvest to ensure maximum freshness and quality.", img: "/images/process_sourcing.png", icon: Leaf },
                { step: "02", title: "Processing", desc: "Grains undergo multi-stage cleaning, sorting, and color-grading in our state-of-the-art ISO-certified facilities to remove any impurities.", img: "/images/process_processing.png", icon: Settings },
                { step: "03", title: "Packaging", desc: "We offer custom packaging solutions including private labeling. Every batch is sealed in moisture-resistant materials to preserve freshness and aroma.", img: "/images/process_packaging.png", icon: Package },
                { step: "04", title: "Delivery", desc: "Our temperature-controlled logistics network ensures safe and timely global shipping, delivering premium quality to over 50 countries worldwide.", img: "/images/process_delivery.png", icon: Globe },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0 group">
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-linear-to-br from-accent to-accent-dark border-4 border-[var(--bg-alt)] shadow-lg -translate-x-1/2 flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Text Panel */}
                  <div className={`pl-16 md:pl-0 w-full md:w-1/2 flex flex-col justify-center relative ${i % 2 === 0 ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:order-last md:items-start md:text-left'}`}>
                    {/* Giant background number */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-[12rem] font-black text-gradient opacity-[0.03] pointer-events-none z-0 ${i % 2 === 0 ? 'right-16' : 'left-16'}`}>
                      {item.step}
                    </div>
                    
                    <div className="relative z-10 w-full max-w-md">
                      <div className={`text-sm font-bold tracking-widest text-accent mb-3 uppercase flex items-center gap-3 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                         {i % 2 !== 0 && <span className="w-8 h-px bg-accent hidden md:block"></span>}
                         Step {item.step}
                         {i % 2 === 0 && <span className="w-8 h-px bg-accent hidden md:block"></span>}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-text mb-4">{item.title}</h3>
                      <p className="text-text-muted leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Image Panel */}
                  <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-16 md:order-last' : 'md:pr-16'}`}>
                    <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl border border-border group-hover:shadow-2xl transition-all duration-500 z-20">
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative" style={{ background: "var(--bg)" }}>
        <CTAGrains />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-purple rounded-3xl p-10 md:p-14 border border-(--accent-light)/30">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Ready to Partner with Us?</h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">Reach out to discuss bulk orders, custom packaging, or international shipping solutions.</p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">Contact Us <ChevronRight className="h-5 w-5" /></span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}