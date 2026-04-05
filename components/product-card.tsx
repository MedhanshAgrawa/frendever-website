import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image src={product.image} alt={product.name} fill className="product-image" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="product-content">
        <div className="pill-row">
          <span className="pill">{product.category}</span>
          <span className="pill soft">{product.featureTag}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="meta-line">{product.materials.slice(0, 3).join(" • ")}</div>
        <Link href={`/products/${product.slug}`} className="text-link">
          Explore product range <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
