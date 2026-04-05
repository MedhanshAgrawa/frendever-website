import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ProcessSteps } from "@/components/process-steps";
import { CtaBand } from "@/components/cta-band";
import { compliance, finishOptions, materialFamilies } from "@/lib/site-data";

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Integrated development, manufacturing, inspection, and dispatch."
        description="Frendever supports textile made-ups programs through dedicated teams, disciplined process control, and buyer-specific customization."
        aside={
          <div className="aside-card">
            <p className="aside-title">Operational depth</p>
            <ul className="clean-list">
              <li>2 operating factories plus 1 main office and showroom</li>
              <li>Dedicated merchandising, design, sampling, stitching, finishing, and packing teams</li>
              <li>Dedicated cutting floor with measurement control tools</li>
              <li>Dispatch capacity of 1,200+ cubic feet per day</li>
            </ul>
          </div>
        }
      />

      <section className="section">
        <div className="container image-copy-grid reverse">
          <div>
            <SectionHeading
              eyebrow="Materials & specialty development"
              title="Domestic and imported options aligned to end use, target pricing, and brief."
              description="Frendever works across multiple fabric families and functional treatments to build commercially appropriate programs."
            />
            <div className="capability-columns">
              <article className="soft-card">
                <p className="detail-label">Base materials</p>
                <div className="chip-cloud">
                  {materialFamilies.map((item) => <span key={item} className="chip dark-chip">{item}</span>)}
                </div>
              </article>
              <article className="soft-card">
                <p className="detail-label">Functional finishes</p>
                <div className="chip-cloud">
                  {finishOptions.map((item) => <span key={item} className="chip">{item}</span>)}
                </div>
              </article>
            </div>
          </div>
          <div className="image-frame tall">
            <Image src="/images/tote-cream.jpg" alt="Premium tote bag" fill className="contain-image" sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="Quality, compliance, sustainability"
            title="Structured QC backed by buyer audit readiness."
            description="From material checks to pre-shipment assurance, Frendever is set up for dependable export execution."
          />
          <ProcessSteps />
          <div className="compliance-grid">
            {compliance.map((item) => (
              <article key={item} className="compliance-card">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
