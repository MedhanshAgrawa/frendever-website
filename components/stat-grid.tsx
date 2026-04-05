import { siteData } from "@/lib/site-data";

export function StatGrid() {
  return (
    <div className="stat-grid">
      {siteData.stats.map((item) => (
        <div key={item.label} className="stat-card">
          <div className="stat-value">{item.value}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
