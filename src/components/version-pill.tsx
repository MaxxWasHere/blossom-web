import { cn } from "@/lib/utils";

export function VersionPill({
  version,
  className,
  label = "Latest",
}: {
  version: string;
  className?: string;
  label?: string;
}) {
  return (
    <span className={cn("blsm-pill version-pill", className)}>
      <span
        aria-hidden="true"
        style={{
          width: 7,
          height: 7,
          borderRadius: 999,
          background: "var(--success)",
          boxShadow: "0 0 8px var(--success)",
        }}
      />
      {label} v{version}
    </span>
  );
}
