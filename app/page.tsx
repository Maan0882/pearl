import { ArrowRight, Leaf, ShieldCheck, Truck, ChevronRight, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ----------------- HERO SECTION ----------------- */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[var(--secondary)] to-[var(--background)]"
      >
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[var(--primary)] blur-[120px]"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[var(--primary-light)] blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[var(--primary-dark)] text-sm font-semibold shadow-sm border border-[var(--primary-light)]/30">
                <Leaf className="h-4 w-4" />
                <span>Premium Quality Grains</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--foreground)] tracking-tight leading-[1.1]">
                Nourishing the World with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)]">Premium Quality</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Pearl Logistics specializes in the finest Basmati Rice, Normal Rice, and high-grade Wheat. From farm to your doorstep with uncompromising reliability.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Explore Products <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[var(--secondary)] text-[var(--foreground)] border border-[var(--primary-light)]/50 rounded-full font-semibold text-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-light)] to-[var(--primary)] rounded-[3rem] transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border border-[var(--secondary)] overflow-hidden">
                <Image src="/images/hero_logistics_grains_1777873172397.png" alt="Premium Grains Logistics" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl shadow-xl flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-10 w-10 text-[var(--primary-dark)]" />
                    <div>
                      <span className="block font-bold text-lg text-[var(--foreground)] leading-tight">100% Certified</span>
                      <span className="text-sm text-gray-700">Premium Export Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- ABOUT SECTION ----------------- */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6">Built on Trust and Quality</h3>
            <p className="text-lg text-gray-600">
              At Pearl Logistics, we bridge the gap between premium agriculture and global markets. With decades of expertise, we ensure that every grain of rice and wheat meets the highest standards of quality before reaching your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Premium Sourcing", desc: "We partner directly with top-tier farmers to ensure the best crop quality from the very beginning." },
              { icon: ShieldCheck, title: "Quality Control", desc: "Rigorous testing and sorting processes guarantee that only the finest grains make it to packaging." },
              { icon: Truck, title: "Global Logistics", desc: "State-of-the-art supply chain management ensures prompt, safe, and fresh delivery worldwide." }
            ].map((feature, i) => (
              <div key={i} className="bg-[var(--secondary)] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-[var(--primary-light)]/50 transition-all duration-300 border border-white/50 cursor-pointer">
                <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-[var(--primary)]">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-[var(--foreground)] mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- PRODUCTS SECTION ----------------- */}
      <section id="products" className="py-24 bg-gradient-to-b from-[var(--background)] to-[var(--secondary)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[var(--primary)] font-semibold tracking-wide uppercase text-sm mb-2">Our Offerings</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[var(--foreground)]">Premium Products</h3>
            </div>
            <p className="text-gray-600 max-w-md">
              Discover our carefully curated selection of high-grade grains, processed and packaged to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Product 1: Basmati Rice */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--primary-light)]/20">
              <div className="h-64 relative flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[var(--primary-dark)] z-20 shadow-sm">Best Seller</div>
                <Image src="/images/basmati_rice_1777873193851.png" alt="Basmati Rice" fill className="object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <h4 className="text-4xl font-black text-white relative z-10 opacity-90 tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">BASMATI</h4>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-[var(--foreground)] mb-2">Basmati Rice</h4>
                <p className="text-gray-600 mb-6">Long-grain, aromatic perfection. Known for its distinct flavor and fluffy texture, ideal for biryanis and premium dishes.</p>
                <a href="#contact" className="inline-flex items-center font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]">
                  Inquire Now <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Product 2: Normal Rice */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--primary-light)]/20">
              <div className="h-64 relative flex items-center justify-center p-8 overflow-hidden">
                <Image src="/images/normal_rice_1777873208203.png" alt="Normal Rice" fill className="object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <h4 className="text-4xl font-black text-white relative z-10 opacity-90 tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">RICE</h4>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-[var(--foreground)] mb-2">Normal Rice</h4>
                <p className="text-gray-600 mb-6">High-quality, versatile daily rice. Carefully milled for maximum nutrition and consistent cooking results every time.</p>
                <a href="#contact" className="inline-flex items-center font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]">
                  Inquire Now <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Product 3: Wheat */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--primary-light)]/20">
              <div className="h-64 relative flex items-center justify-center p-8 overflow-hidden">
                <Image src="/images/wheat_grains_1777873222845.png" alt="Premium Wheat" fill className="object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <h4 className="text-4xl font-black text-white relative z-10 opacity-90 tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">WHEAT</h4>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-[var(--foreground)] mb-2">Premium Wheat</h4>
                <p className="text-gray-600 mb-6">Rich, golden wheat kernels sourced from the finest farms. Perfect for milling into high-quality flour for all baking needs.</p>
                <a href="#contact" className="inline-flex items-center font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)]">
                  Inquire Now <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- CONTACT SECTION ----------------- */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--primary-dark)] rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[var(--primary-light)] opacity-20 rounded-full blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              <div className="p-12 md:p-20 flex flex-col justify-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to work with us?</h2>
                <p className="text-[var(--primary-light)] text-lg mb-10 max-w-md">
                  Whether you're looking for bulk orders, custom packaging, or international shipping, our team is ready to assist you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--primary-light)]">Email Us</p>
                      <p className="font-medium text-lg">sales@pearllogistics.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--primary-light)]">Call Us</p>
                      <p className="font-medium text-lg">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12 lg:p-20 bg-white">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all text-gray-700 bg-white">
                      <option>Basmati Rice</option>
                      <option>Normal Rice</option>
                      <option>Premium Wheat</option>
                      <option>Multiple / General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="button" className="w-full py-4 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
