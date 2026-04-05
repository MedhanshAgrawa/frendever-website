import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { FadeIn } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { StatGrid } from "@/components/stat-grid";
import { CtaBand } from "@/components/cta-band";
import { addresses, differentiators } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Frendever"
        title="A family-run textile made-ups company with strong manufacturing roots in North India."
        description="Founded in 1994 by Praveen Kumar, Frendever blends third-generation business discipline with practical product innovation, premium execution, and dependable export manufacturing."
        aside={
          <div className="aside-card">
            <p className="aside-title">What Frendever delivers</p>
            <ul className="clean-list">
              <li>Premium textile made-ups across bags, aprons, kitchen, and home categories</li>
              <li>End-to-end execution for FOB and CIF programs</li>
              <li>OEM, private label, and custom development</li>
              <li>Flexible sourcing across domestic and imported fabrics</li>
            </ul>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <StatGrid />
        </div>
      </section>

      <section className="section">
        <div className="container image-copy-grid">
          <FadeIn>
            <div className="image-frame tall">
              <Image src="/images/factory-wide.jpg" alt="Factory operations" fill className="cover-image" sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              eyebrow="Manufacturing philosophy"
              title="Any textile made-up, any workable specification, optimized for scale, quality, and commercial fit."
              description="Frendever is designed for buyers who value responsiveness during development and discipline during execution."
            />
            <div className="feature-stack">
              {differentiators.map((item) => (
                <article key={item.title} className="feature-line">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="Locations"
            title="Head office, showroom, and two operating factories."
            description="Operations are anchored across New Delhi, Faridabad, and Greater Noida for development, coordination, and scalable production."
          />
          <div className="address-grid">
            {addresses.map((address) => (
              <article key={address.label} className="address-card">
                <h3>{address.label}</h3>
                {address.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
