import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  badge?: string;
  href?: string;
  description?: string;
}

export default function ProductCard({
  name,
  image,
  badge,
  href = "#contact",
  description,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group block h-full bg-bg-alt rounded-3xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
    >
      {/* Vertical Layout */}
      <div className="flex flex-col h-full">
        
        {/* Image Section */}
        <div className="relative w-full h-72 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />

          {badge && (
            <div className="absolute top-4 left-4 z-10 px-4 py-1.5 rounded-full text-[10px] font-bold bg-accent text-white shadow-lg uppercase tracking-widest">
              {badge}
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-text mb-4 group-hover:text-accent transition-colors">
            {name}
          </h3>

          {description && (
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
              {description}
            </p>
          )}

          <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">
              Explore {name}
            </span>

            <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}