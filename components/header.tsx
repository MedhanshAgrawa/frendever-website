"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label="Frendever Textiles India">
          <Image src="/images/logo_transparent.png" alt="Frendever logo" width={54} height={54} className="brand-mark" />
          <div>
            <div className="brand-name">Frendever Textiles India</div>
            <div className="brand-sub">Premium textile made-ups for global buyers</div>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "nav-link active" : "nav-link"}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="button button-small">Start an inquiry</Link>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-panel">
          <div className="container mobile-panel-inner">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={pathname === item.href ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="button" onClick={() => setOpen(false)}>Start an inquiry</Link>
          </div>
        </div>
      )}
    </header>
  );
}
