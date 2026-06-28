"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Check } from "lucide-react";
import { THEMES } from "@/lib/themes";
import { cn } from "@/lib/utils";

/** Full swatch grid with blurbs, for the showcase page. */
export function ThemeGrid() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 12,
      }}
      role="radiogroup"
      aria-label="Theme preview"
    >
      {THEMES.map((t) => {
        const isActive = mounted && theme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-pressed={isActive}
            className={cn("blsm-swatch", isActive && "is-active")}
            style={{ alignItems: "flex-start", textAlign: "left", padding: 14 }}
            onClick={() => setTheme(t.id)}
            title={t.blurb}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
              <span
                className="blsm-swatch-dot"
                style={{ background: `linear-gradient(135deg, ${t.accent} 50%, ${t.surface} 50%)` }}
              />
              <span className="blsm-swatch-name" style={{ fontSize: 13 }}>
                {t.label}
              </span>
              {isActive && (
                <Check size={15} style={{ marginLeft: "auto", color: "var(--accent)" }} />
              )}
            </div>
            <p
              style={{
                fontSize: 12,
                color: "var(--text-muted)",
                margin: "8px 0 0",
                lineHeight: 1.5,
              }}
            >
              {t.blurb}
            </p>
          </button>
        );
      })}
    </div>
  );
}
