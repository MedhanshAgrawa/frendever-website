import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="page-hero">
        <div className="container detail-hero">
          <div>
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="hero-copy">{product.description}</p>
            <div className="pill-row">
              <span className="pill">{product.featureTag}</span>
              <span className="pill soft">{product.minLeadTime}</span>
            </div>
          </div>

          <div className="detail-primary-image">
            <Image src={product.image} alt={product.name} fill className="contain-image" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <div>
            <div className="gallery-grid">
              {product.gallery.map((image, index) => (
                <div key={image} className="gallery-item">
                  <Image src={image} alt={`${product.name} view ${index + 1}`} fill className="contain-image" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>

          <aside className="detail-panel">
            <div>
              <p className="detail-label">Highlights</p>
              <ul className="clean-list">
                {product.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <p className="detail-label">Material options</p>
              <div className="chip-cloud">
                {product.materials.map((item) => <span key={item} className="chip dark-chip">{item}</span>)}
              </div>
            </div>
            <div>
              <p className="detail-label">Possible finishes</p>
              <div className="chip-cloud">
                {product.finishes.map((item) => <span key={item} className="chip">{item}</span>)}
              </div>
            </div>
            <div>
              <p className="detail-label">Typical use cases</p>
              <ul className="clean-list">
                {product.useCases.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <Link href="/contact" className="button">Request this category</Link>
          </aside>
        </div>
      </section>
    </>
  );
}
