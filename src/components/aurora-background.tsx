/** CSS-only animated Aurora background, frozen on prefers-reduced-motion via globals.css. */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div
        className="blsm-aurora"
        style={{ position: "absolute", inset: "-20%", opacity: 0.5 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent 30%, color-mix(in srgb, var(--bg-root) 92%, transparent))",
        }}
      />
    </div>
  );
}
