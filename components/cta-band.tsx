import Link from "next/link";

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <p className="eyebrow">Ready for development</p>
          <h2>Need OEM, private label, or custom textile made-ups?</h2>
          <p className="section-copy">Share your target market, materials, quantities, and launch goals. Frendever can build around your brief.</p>
        </div>
        <div className="cta-actions">
          <Link href="/contact" className="button">Start an inquiry</Link>
          <Link href="/products" className="button button-secondary">View product universe</Link>
        </div>
      </div>
    </section>
  );
}
