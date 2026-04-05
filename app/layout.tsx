import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.frendevertextiles.com"),
  title: {
    default: `${siteData.companyName} | ${siteData.tagline}`,
    template: `%s | ${siteData.companyName}`
  },
  description: "Family-run textile made-ups manufacturer and exporter from India, serving global buyers with OEM, private label, and custom development.",
  openGraph: {
    title: `${siteData.companyName} | ${siteData.tagline}`,
    description: "Premium textile made-ups for global buyers across bags, aprons, home and kitchen categories.",
    url: "https://www.frendevertextiles.com",
    siteName: siteData.companyName,
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
