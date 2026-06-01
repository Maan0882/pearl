import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Package,
  Globe,
  ShieldCheck,
  Info,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import { products } from "@/app/data/products";
import CTAGrains from "@/app/components/3d-scene/CTAGrains";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found — Pearl Logistics",
    };
  }

  return {
    title: `${product.name} — Pearl Logistics`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const otherProducts = products.filter((p) => p.id !== id);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* BREADCRUMBS */}
      {/* <nav className="bg-bg py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-accent transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-text font-medium">{product.name}</span>
          </div>
        </div>
      </nav> */}

      <section className="py-10 md:py-10 bg-[#f5f5f5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TITLE */}
          <div className="text-center max-w-4xl mx-auto mb-5">
            <h1 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-6">
              {product.name}
            </h1>
          </div>

          {/* IMAGE FIRST */}
          <div className="relative w-full max-w-[900px] mx-auto mb-10 px-4 sm:px-0">
            <div
              className="relative w-full overflow-hidden rounded-[32px] shadow-2xl border border-border bg-white aspect-[4/3] sm:aspect-[1100/460]"
              /* Change: Taller aspect ratio on mobile (4:3) and wider on desktop (2.5:1) */
              style={{
                aspectRatio:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? "4 / 3"
                    : "1100 / 460",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 900px) 100vw, 900px"
              />

              {/* Subtle Dark Overlay */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              {/* Top Left Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
                  <span className="px-3 py-1 md:px-5 md:py-2 rounded-full bg-accent text-white text-[10px] md:text-sm font-bold shadow-lg">
                    {product.badge}
                  </span>
                </div>
              )}

            
            </div>
          </div>

          {/* DETAILS AFTER IMAGE */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-md md:text-md text-text-muted leading-relaxed">
              {product.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT VARIETIES SECTION */}
      {product.varieties && product.varieties.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-5">
              <div className="section-label mx-auto mb-4">Our Range</div>
              <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
                Premium <span className="text-gradient">Varieties</span>
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                We offer a diverse selection of {product.name.toLowerCase()} to
                cater to different culinary needs and market preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.varieties.map((variety, index) => (
                <div
                  key={index}
                  className="group relative bg-bg-alt rounded-[32px] overflow-hidden border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={variety.image}
                      alt={variety.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-text/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                      {variety.name}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {variety.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-accent font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Inquire for this variety{" "}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SPECIFICATIONS & FEATURES
      <section className="py-20 bg-bg-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            SPECIFICATIONS TABLE
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-text">Quality Parameters</h2>
              </div>
              <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-bg border-b border-border">
                      <th className="px-6 py-4 text-sm font-bold text-text">Specifications</th>
                      <th className="px-6 py-4 text-sm font-bold text-text text-right">Standard Values</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className="hover:bg-bg/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-text-muted font-medium">{spec.label}</td>
                        <td className="px-6 py-4 text-sm text-text font-bold text-right">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            KEY FEATURES & PACKAGING
            <div className="space-y-8">
              Features Card
              <div className="glass-purple p-8 rounded-3xl border border-accent/20">
                <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </div>
                      <span className="text-sm text-text-muted leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              Packaging Card
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                  <Package className="h-5 w-5 text-accent" />
                  Packaging Options
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.packaging.map((pack, index) => (
                    <span key={index} className="px-4 py-2 bg-bg border border-border rounded-xl text-xs font-semibold text-text-muted">
                      {pack}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

      {/* PREMIUM CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative glass-purple rounded-[48px] p-10 md:p-20 border border-accent/20 overflow-hidden shadow-[0_40px_100px_rgba(155,109,215,0.15)] isolate">
            
            {/* Interactive 3D Heap Grains Animation */}
            <CTAGrains />

            {/* Decorative background glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-glow/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <ShieldCheck className="h-14 w-14 text-accent mx-auto mb-8 opacity-90 animate-bounce-slow" />
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text mb-8 tracking-tight">
                Secure Bulk Supply <br className="hidden md:block" />
                <span className="text-gradient font-serif italic pr-2">With Confidence</span>
              </h2>
              
              <p className="text-text-muted text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Our trade experts are ready to provide you with the best market
                rates for <span className="text-text font-bold">{product.name}</span>, custom packaging solutions, and seamless international logistics.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="group relative px-12 py-5 bg-text text-bg overflow-hidden transition-all duration-500 rounded-sm w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 uppercase tracking-[0.2em] text-sm font-bold flex items-center gap-2 justify-center">
                    Get a Quote <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <a
                  href="tel:+917990353622"
                  className="group px-12 py-5 border border-text/10 text-text hover:border-accent hover:text-accent transition-all duration-500 uppercase tracking-[0.2em] text-sm font-semibold rounded-sm w-full sm:w-auto flex items-center justify-center gap-3"
                >
                  <Phone className="h-5 w-5" /> Call Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <div className="section-label mx-auto mb-4">Explore More</div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Our Other Commodities
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="group">
                <div className="bg-white rounded-3xl overflow-hidden border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative aspect-video">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white text-left">
                      <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                      <div className="flex items-center gap-1 text-white/80 text-sm font-medium">
                        View Details <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BACK TO PRODUCTS */}
      <div className="py-12 text-center border-t border-border">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
        >
          <ArrowLeft className="h-5 w-5" /> Back to All Products
        </Link>
      </div>
    </div>
  );
}