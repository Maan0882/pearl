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
  MessageSquare
} from "lucide-react";
import { products } from "@/app/data/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
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

      {/* PRODUCT HERO SECTION */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-[0.03] rounded-l-[100px] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* PRODUCT IMAGE */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-border shadow-xl bg-bg-alt">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {product.badge && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-accent text-white text-xs font-bold rounded-full shadow-lg animate-badge-float">
                    {product.badge}
                  </div>
                )}
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-12 h-[2px] bg-accent" />
                  <span className="text-accent font-bold tracking-widest text-xs uppercase">Premium Commodity</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-6">
                  {product.name}
                </h1>
                <p className="text-lg text-text-muted leading-relaxed mb-8">
                  {product.fullDescription}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-bg rounded-2xl border border-border">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Package className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-medium">Min. Order (MOQ)</p>
                      <p className="text-sm text-text font-bold">{product.moq}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-bg rounded-2xl border border-border">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-medium">Origin</p>
                      <p className="text-sm text-text font-bold">{product.origin}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary flex items-center gap-2 px-8 py-4">
                    <MessageSquare className="h-5 w-5" />
                    Bulk Inquiry Now
                  </Link>
                  <a href="https://wa.me/your-number" className="btn-secondary flex items-center gap-2 px-8 py-4">
                    <Phone className="h-5 w-5 text-green-600" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT VARIETIES SECTION */}
      {product.varieties && product.varieties.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="section-label mx-auto mb-4">Our Range</div>
              <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
                Premium <span className="text-gradient">Varieties</span>
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                We offer a diverse selection of {product.name.toLowerCase()} to cater to different culinary needs and market preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.varieties.map((variety, index) => (
                <div key={index} className="group relative bg-bg-alt rounded-[32px] overflow-hidden border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
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
                    <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">{variety.name}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {variety.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-accent font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      Inquire for this variety <ArrowRight className="h-4 w-4" />
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

      {/* SIMPLE CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-purple rounded-[40px] p-10 md:p-16 border border-accent/20 relative overflow-hidden shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-glow/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">
                Ready to Order <span className="text-gradient">Bulk {product.name}?</span>
              </h2>
              <p className="text-text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Our trade experts are ready to provide you with the best market rates, custom packaging solutions, and seamless international logistics.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 text-lg shadow-[0_10px_20px_-5px_var(--accent)]">
                  Contact Us Now <ArrowRight className="h-6 w-6" />
                </Link>
                <a href="tel:+917990353622" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-5 text-lg">
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
          <h2 className="text-3xl md:text-4xl font-bold text-text">Our Other Commodities</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="group">
                <div className="bg-white rounded-3xl overflow-hidden border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative aspect-video">
                    <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
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
        <Link href="/products" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
          <ArrowLeft className="h-5 w-5" /> Back to All Products
        </Link>
      </div>
    </div>
  );
}
