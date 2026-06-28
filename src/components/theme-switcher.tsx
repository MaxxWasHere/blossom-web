"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Palette, ChevronDown, Check } from "lucide-react";
import { THEMES } from "@/lib/themes";
import { cn } from "@/lib/utils";

/** Compact theme picker for the titlebar (popover of swatches). */
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="btn btn-ghost"
        style={{ minHeight: 34, padding: "6px 12px", fontSize: 13 }}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change theme"
      >
        <Palette size={15} />
        <span className="hidden sm:inline">{mounted ? current.label : "Theme"}</span>
        <ChevronDown size={14} style={{ transition: "transform .2s ease", transform: open ? "rotate(180deg)" : "none" }} />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Themes"
          className="blsm-card"
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 8px)",
            padding: 10,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
            zIndex: 100,
            minWidth: 268,
            boxShadow: "var(--m3-elevation-3)",
          }}
        >
          {THEMES.map((t) => {
            const isActive = mounted && theme === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={cn("blsm-swatch", isActive && "is-active")}
                title={t.blurb}
              >
                <span
                  className="blsm-swatch-dot"
                  style={{ background: `linear-gradient(135deg, ${t.accent} 50%, ${t.surface} 50%)` }}
                />
                <span className="blsm-swatch-name">{t.label}</span>
                {isActive && (
                  <Check
                    size={13}
                    style={{ position: "absolute", top: 8, right: 8, color: "var(--accent)" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
