import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Factory, Globe2, Leaf, PackageCheck, ShieldCheck } from "lucide-react";
import { FadeIn, FloatIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { StatGrid } from "@/components/stat-grid";
import { ProductCard } from "@/components/product-card";
import { ProcessSteps } from "@/components/process-steps";
import { CtaBand } from "@/components/cta-band";
import { differentiators, exportMarkets, buyerTypes, materialFamilies } from "@/lib/site-data";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <FadeIn>
            <p className="eyebrow">Company profile 2026</p>
            <h1>Advanced textile made-ups manufacturing for brands, retailers, importers, and private labels worldwide.</h1>
            <p className="hero-copy">
              Frendever Textiles India develops and manufactures premium bags, aprons, kitchen textiles, storage items, and custom textile made-ups with strong export discipline, flexible sourcing, and dependable scale.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button">Request development support</Link>
              <Link href="/products" className="button button-secondary">See product universe</Link>
            </div>

            <div className="hero-points">
              <span><BadgeCheck size={18} /> OEM, private label, and custom development</span>
              <span><Globe2 size={18} /> FOB and CIF execution for global buyers</span>
              <span><Factory size={18} /> 2 factories and 150+ machines</span>
            </div>
          </FadeIn>

          <FloatIn className="hero-visual-shell">
            <div className="hero-visual">
              <div className="hero-image-card hero-primary">
                <Image src="/images/factory-floor.jpg" alt="Frendever factory floor" fill sizes="(max-width: 900px) 100vw, 45vw" className="cover-image" priority />
              </div>
              <div className="hero-stack">
                <div className="hero-image-card">
                  <Image src="/images/office.jpg" alt="Frendever office and showroom" fill sizes="240px" className="cover-image" />
                </div>
                <div className="mini-grid">
                  <div className="hero-image-card">
                    <Image src="/images/tote-tan.jpg" alt="Waxed canvas tote bag" fill sizes="180px" className="contain-image" />
                  </div>
                  <div className="hero-image-card">
                    <Image src="/images/apron-denim.jpg" alt="Denim apron" fill sizes="180px" className="contain-image" />
                  </div>
                </div>
              </div>
            </div>
          </FloatIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <StatGrid />
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="What makes Frendever different"
            title="Built around buyer briefs, commercial fit, and repeatable export quality."
            description="A premium manufacturing partner combining development agility, practical product engineering, and disciplined execution."
          />
          <div className="feature-grid">
            {differentiators.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.05}>
                <article className="feature-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-showcase">
          <FadeIn>
            <SectionHeading
              eyebrow="Product universe"
              title="From everyday utility to premium canvas and custom textile made-ups."
              description="Core categories include bags and totes, aprons, kitchen textiles, table linen, storage items, pouches, pet products, utility textiles, and seasonal gifting programs."
              action={<Link href="/products" className="text-link">View all categories <ArrowRight size={16} /></Link>}
            />
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container capability-grid">
          <FadeIn>
            <p className="eyebrow light">Operational depth</p>
            <h2>Integrated capability from development through dispatch.</h2>
            <p className="section-copy light-copy">
              Dedicated teams support merchandising, design, inspection, cutting, sampling, stitching, finishing, packing, and dispatch with buyer-specific packaging and labeling where required.
            </p>
            <div className="check-list">
              <div><PackageCheck size={18} /> Specialist sampling for virtually any workable textile made-up brief</div>
              <div><ShieldCheck size={18} /> Three-stage manual QC plus pre-shipment assurance</div>
              <div><Leaf size={18} /> Eco-friendly materials, recycled trims, azo-free dyes, and sustainable packaging options</div>
            </div>
          </FadeIn>
          <FloatIn>
            <div className="glass-panel">
              <p className="eyebrow light">Materials & finishes</p>
              <div className="chip-cloud">
                {materialFamilies.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          </FloatIn>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="Quality assurance"
            title="Structured QC, buyer audit readiness, and responsible material choices."
            description="Every program is managed with pre-production inspection, in-line checks, final manual QC, and pre-shipment assurance."
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="section">
        <div className="container two-column-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Global markets"
              title="Serving retailers, importers, wholesalers, hospitality, and gifting programs worldwide."
              description="Frendever supports OEM, private label, and custom development programs for international buyers."
            />
            <div className="chip-cloud">
              {exportMarkets.map((market) => (
                <span key={market} className="chip dark-chip">{market}</span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="buyer-card">
              <p className="eyebrow">Buyer types</p>
              <div className="buyer-list">
                {buyerTypes.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
