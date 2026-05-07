import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  badge?: string;
  href?: string;
}

export default function ProductCard({ name, image, badge, href = "#contact" }: ProductCardProps) {
  return (
    <Link href={href} className="product-card group block cursor-pointer">
      <div className="card-image">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badge && (
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-accent-dark shadow-sm border border-border">
            {badge}
          </div>
        )}
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      <div className="card-footer">
        <span className="font-semibold text-text text-sm md:text-base">{name}</span>
        <div className="arrow">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
