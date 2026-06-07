import { Network } from "lucide-react";

const sizes = {
  sm: 30,
  md: 38,
  lg: 48,
};

export default function BrandLogo({ size = "md", showText = true, className = "" }) {
  const markSize = sizes[size] || sizes.md;

  return (
    <div className={`brand-logo brand-logo-${size} ${className}`.trim()}>
      <span className="brand-logo-mark" style={{ width: markSize, height: markSize }}>
        <Network size={Math.round(markSize * 0.52)} strokeWidth={2.2} />
      </span>
      {showText && (
        <span className="brand-logo-copy">
          <strong>ClientFlow <b>CRM</b></strong>
          <small>Customer Management Suite</small>
        </span>
      )}
    </div>
  );
}
