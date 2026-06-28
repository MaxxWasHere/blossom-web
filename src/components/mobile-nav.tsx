"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { NAV_GROUPS, EXTERNAL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";

function norm(p: string) {
  return p.replace(/\/+$/, "") || "/";
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="btn btn-ghost blsm-mobile-only"
        style={{ minHeight: 36, width: 40, padding: 0 }}
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu size={18} />
      </button>

      {open && (
        <div
          className="blsm-fade"
          style={{ position: "fixed", inset: 0, zIndex: 200 }}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              inset: 0,
              background: "color-mix(in srgb, var(--bg-root) 70%, transparent)",
              backdropFilter: "blur(4px)",
            }}
          />
          <div
            className="blsm-card"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "min(330px, 88vw)",
              borderRadius: 0,
              borderLeft: "1px solid var(--border)",
              boxShadow: "var(--m3-elevation-3)",
              overflowY: "auto",
              padding: "14px 12px",
              animation: "blsm-rise .3s cubic-bezier(0.34,1.56,0.64,1) both",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 8px 12px",
                borderBottom: "1px solid var(--border)",
                marginBottom: 14,
              }}
            >
              <span className="font-display" style={{ fontWeight: 700, fontSize: 16 }}>
                Menu
              </span>
              <button
                type="button"
                className="btn btn-ghost"
                style={{ minHeight: 32, width: 32, padding: 0 }}
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X size={16} />
              </button>
            </div>

            {NAV_GROUPS.map((group) => (
              <div className="blsm-sidebar-group" key={group.label} style={{ marginBottom: 12 }}>
                <div className="blsm-sidebar-section-label">{group.label}</div>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const active = norm(pathname) === norm(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn("blsm-sidebar-item", active && "is-active")}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon size={16} className="blsm-sidebar-item-icon" />
                      <span>{item.label}</span>
                      {item.wip && <span className="blsm-wip-badge">WIP</span>}
                    </Link>
                  );
                })}
              </div>
            ))}

            <div
              style={{
                marginTop: 8,
                padding: 12,
                borderRadius: "var(--m3-shape-corner-md)",
                border: "1px solid var(--border)",
                background: "var(--bg-input)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <ThemeSwitcher />
              <a
                className="btn btn-accent"
                href={EXTERNAL.releases}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Download size={16} /> Download Blossom
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
