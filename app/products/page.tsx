import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { productCategories, products } from "@/lib/products";
import { coreCategories } from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product universe"
        title="Developed around buyer specifications, end use, and merchandising goals."
        description="Frendever supports a broad textile made-ups range with a strong fit for retail, hospitality, gifting, and private label programs."
        aside={
          <div className="aside-card">
            <p className="aside-title">Core categories</p>
            <div className="chip-cloud">
              {coreCategories.map((item) => (
                <span key={item} className="chip dark-chip">{item}</span>
              ))}
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <div className="catalogue-intro">
            <div>
              <p className="eyebrow">CMS-ready catalogue</p>
              <h2>Structured for future scale.</h2>
              <p className="section-copy">Each category can be expanded later with more SKUs, certifications, downloadable spec sheets, MOQ logic, or a buyer-facing portal.</p>
            </div>
            <div className="catalogue-meta">
              <span>{products.length} featured categories</span>
              <span>{productCategories.length} active product groups</span>
            </div>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
