"use client"

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";

import { products } from "@/app/data/products";

export default function ProductsGrid() {
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveHash(hash);
    };

    handleHash(); // Run on mount

    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [pathname, searchParams]);

  // Scroll to highlighted product on mount / hash change
  useEffect(() => {
    if (activeHash) {
      const el = document.getElementById(activeHash);
      if (el) {
        // Ensure layout has settled
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200); 
        return () => clearTimeout(timer);
      }
    }
  }, [activeHash]);

  return (
    <section className="py-12 md:py-20" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const isHighlighted = activeHash === product.id;
            const productUrl = `/products/${product.id}`;
            return (
              <div
                key={product.id}
                id={product.id}
                className={`space-y-6 rounded-3xl transition-all duration-500 ${
                  isHighlighted
                    ? "ring-2 ring-accent shadow-[0_0_40px_0px_var(--accent)] scale-[1.01] sm:scale-[1.02] p-2 sm:p-3"
                    : "p-0"
                }`}
              >
                <ProductCard
                  name={product.name}
                  image={product.image}
                  badge={product.badge}
                  href={productUrl}
                />
                <div
                  className={`feature-card p-6! transition-all duration-500 ${
                    isHighlighted ? "border-accent/60 bg-accent/5" : ""
                  }`}
                >
                  <h3 className="text-lg font-bold text-text mb-2">
                    {product.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2 text-sm text-text-muted">
                    {product.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={productUrl}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    View Details <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}