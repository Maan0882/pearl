import type { Metadata } from "next";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Contact Us — Pearl Logistics",
  description: "Get in touch with Pearl Logistics for bulk orders, custom packaging, or international shipping inquiries. Our trade experts respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* PAGE HEADER */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/contact_us.jpg"
            alt="Contact us — Pearl Logistics"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Dark to light gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-(--text)/30 via-(--text-muted)/40 to-(--text)/30" />
        </div>
        <div className="absolute top-0 right-0 w-100 h-100 bg-accent opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <div className="section-label mx-auto mb-4"><Mail className="h-4 w-4" /><span>Contact Us</span></div>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
              Ready to <span className="text-gradient">Work Together?</span>
            </h1>
            <p className="text-base font-bold md:text-2xl leading-relaxed max-w-3xl mx-auto text-text1">
              Whether you need bulk orders, custom packaging, or international shipping — our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-12 md:py-20" style={{ background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl overflow-hidden shadow-2xl border border-border relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-glow opacity-8 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
              {/* Left — Info Panel */}
              <div className="p-8 sm:p-10 md:p-16 flex flex-col justify-center text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--accent-dark) 0%, #5b2d9e 50%, var(--accent) 100%)" }}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-white opacity-[0.03] rounded-full translate-y-1/3 -translate-x-1/3" />

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative z-10">Let&apos;s Start a<br />Conversation</h2>
                <p className="text-white/70 text-sm sm:text-base mb-10 max-w-sm relative z-10">
                  Reach out for bulk orders, custom packaging, or international shipping inquiries. Our trade experts respond within 24 hours.
                </p>

                <div className="space-y-6 relative z-10">
                  {[
                    { icon: Mail, label: "Email Us", value: "kamalgohel457@gmail.com" },
                    { icon: Phone, label: "Call Us", value: "+91 7990353622" },
                    { icon: MapPin, label: "Visit Us", value: "D 103, SHREE RADHE SHYAM, SEVASI TP 2, BHAYLI VADODARA, 391410, VADODARA, GUJARAT" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-sm text-white/60">{item.label}</p>
                        <p className="text-sm sm:text-base font-medium text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Form */}
              <div className="p-6 sm:p-8 md:p-14 bg-white">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg text-text" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg text-text" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg text-text" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Product Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg text-text">
                      <option>Basmati Rice</option>
                      <option>Normal Rice</option>
                      <option>Premium Wheat</option>
                      <option>Multiple / General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg text-text resize-none" placeholder="Tell us about your requirements — quantity, destination, packaging preferences..." />
                  </div>
                  <button type="button" className="w-full btn-primary rounded-xl! text-base">
                    <span className="relative z-10 flex items-center justify-center gap-2">Send Message <ArrowRight className="h-5 w-5" /></span>
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