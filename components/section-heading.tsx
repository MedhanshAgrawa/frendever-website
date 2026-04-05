import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="section-heading-row">
        <div>
          <h2>{title}</h2>
          {description ? <p className="section-copy">{description}</p> : null}
        </div>
        {action ? <div className="section-action">{action}</div> : null}
      </div>
    </div>
  );
}
