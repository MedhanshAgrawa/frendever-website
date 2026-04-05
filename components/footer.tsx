import Link from "next/link";
import { navigation, contactDetails } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Frendever Textiles India</p>
          <h3 className="footer-title">Built for global buyers who need premium execution with dependable scale.</h3>
        </div>

        <div>
          <p className="footer-label">Navigation</p>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-label">Contact</p>
          <div className="footer-contact">
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>{contactDetails.phone}</a>
            <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">WhatsApp inquiry</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Frendever Textiles India</span>
        <span>OEM • Private label • Custom development • FOB / CIF</span>
      </div>
    </footer>
  );
}
