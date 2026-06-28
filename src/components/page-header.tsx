import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="blsm-rise" style={{ marginBottom: 28 }}>
      {eyebrow && (
        <div className="blsm-eyebrow" style={{ marginBottom: 10 }}>
          {eyebrow}
        </div>
      )}
      <h1
        className="m3-display"
        style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", marginBottom: 12, marginTop: 0 }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: 16,
            lineHeight: 1.6,
            maxWidth: 660,
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
