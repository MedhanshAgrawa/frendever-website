import { PageHero } from "@/components/page-hero";
import { InquiryForm } from "@/components/inquiry-form";
import { addresses, contactDetails } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start an OEM, private label, or custom development conversation."
        description="Share your target market, price architecture, quantities, materials, and timelines. Frendever can evaluate feasibility and propose the right path."
        aside={
          <div className="aside-card">
            <p className="aside-title">Direct contact</p>
            <div className="contact-block">
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>{contactDetails.phone}</a>
              <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">WhatsApp inquiry</a>
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="soft-card">
            <p className="detail-label">Inquiry form</p>
            <InquiryForm />
          </div>

          <div className="contact-side-stack">
            {addresses.map((address) => (
              <article key={address.label} className="address-card">
                <h3>{address.label}</h3>
                {address.lines.map((line) => <p key={line}>{line}</p>)}
              </article>
            ))}

            <article className="soft-card">
              <p className="detail-label">Why buyers reach out</p>
              <ul className="clean-list">
                <li>New category development</li>
                <li>Private label execution</li>
                <li>Alternative material and finish options</li>
                <li>Scalable repeat programs</li>
                <li>FOB and CIF export planning</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
