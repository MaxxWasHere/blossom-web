import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import { APP_VERSION, EXTERNAL } from "@/lib/site";
import { ThemeSwitcher } from "./theme-switcher";
import { MobileNav } from "./mobile-nav";

export function Titlebar() {
  return (
    <header
      className="blsm-titlebar"
      style={{ position: "sticky", top: 0, zIndex: 50, borderRadius: 0 }}
    >
      <div className="blsm-titlebar-dots" aria-hidden="true">
        <span className="blsm-titlebar-dot close" />
        <span className="blsm-titlebar-dot minimize" />
        <span className="blsm-titlebar-dot maximize" />
      </div>

      <Link
        href="/"
        aria-label="Blossom home"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          marginLeft: 12,
          textDecoration: "none",
          color: "var(--text-primary)",
        }}
      >
        <Image
          src="/blossom.png"
          alt=""
          width={22}
          height={22}
          unoptimized
          priority
          style={{ borderRadius: 6, border: "1px solid var(--border-accent)" }}
        />
        <span
          className="font-display"
          style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em" }}
        >
          Blossom
        </span>
        <span
          className="version-pill hidden sm:inline-flex"
          style={{ fontSize: 11, padding: "2px 9px" }}
        >
          v{APP_VERSION}
        </span>
      </Link>

      <div className="blsm-titlebar-spacer" />

      <div
        className="blsm-desktop-only"
        style={{ alignItems: "center", gap: 10, padding: "0 10px 0 8px" }}
      >
        <ThemeSwitcher />
        <a
          className="btn btn-accent"
          style={{ minHeight: 34, padding: "6px 14px", fontSize: 13 }}
          href={EXTERNAL.releases}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Download size={15} /> Download
        </a>
      </div>

      <MobileNav />
    </header>
  );
}
