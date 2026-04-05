import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  aside
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero-copy">{description}</p>
        </div>
        {aside ? <div>{aside}</div> : null}
      </div>
    </section>
  );
}
