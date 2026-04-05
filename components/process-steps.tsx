import { qualitySteps } from "@/lib/site-data";

export function ProcessSteps() {
  return (
    <div className="process-grid">
      {qualitySteps.map((step, index) => (
        <div key={step.title} className="process-card">
          <div className="step-index">{String(index + 1).padStart(2, "0")}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
