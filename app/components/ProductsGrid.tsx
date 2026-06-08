"use client";

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

    handleHash();

    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (activeHash) {
      const el = document.getElementById(activeHash);

      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 200);

        return () => clearTimeout(timer);
      }
    }
  }, [activeHash]);

  return (
    <section
      className="py-12 md:py-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {products.map((product, index) => {
            const isHighlighted = activeHash === product.id;
            const productUrl = `/products/${product.id}`;
            const isEven = index % 2 === 0;

            return (
              <div
                key={product.id}
                id={product.id}
                className={`rounded-3xl transition-all duration-500 ${
                  isHighlighted
                    ? "ring-2 ring-accent shadow-[0_0_40px_0px_var(--accent)] p-3"
                    : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">

                  {/* Product Card — alternates order on desktop */}
                  <div className={`lg:w-1/2 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <ProductCard
                      name={product.name}
                      image={product.image}
                      badge={product.badge}
                      href={productUrl}
                    />
                  </div>

                  {/* Feature / Info Card — alternates order on desktop */}
                  <div
                    className={`feature-card lg:w-1/2 p-8 rounded-3xl border transition-all duration-500 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } ${
                      isHighlighted
                        ? "border-accent/60 bg-accent/5"
                        : "border-white/10"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-text mb-4">
                      {product.name}
                    </h3>

                    <p className="text-text-muted leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <ul className="space-y-3 text-text-muted">
                      {product.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {product.varieties && product.varieties.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">
                          Types Available
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.varieties.map((variety) => (
                            <span
                              key={variety.name}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
                            >
                              {variety.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href={productUrl}
                      className="mt-8 inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}