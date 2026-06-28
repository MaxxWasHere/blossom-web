import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import { APP_VERSION, EXTERNAL } from "@/lib/site";
import { withBasePath } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import { MobileNav } from "./mobile-nav";

/**
 * Clean full-width top header (replaces the mock window titlebar): Blossom
 * brand + "vX.Y.Z stable" on the left, theme switcher + Download button on
 * the right (desktop). On narrow screens the actions collapse into the
 * MobileNav drawer. M3 surface-container background with a subtle accent
 * hairline along the bottom.
 */
export function Header() {
  return (
    <header className="blsm-header">
      <Link href="/" aria-label="Blossom home" className="blsm-header-brand">
        <Image
          src={withBasePath("/blossom.png")}
          alt=""
          width={26}
          height={26}
          className="blsm-header-logo"
          unoptimized
          priority
        />
        <span className="blsm-header-wordmark">Blossom</span>
        <span className="version-pill hidden sm:inline-flex" style={{ fontSize: 11, padding: "2px 9px" }}>
          v{APP_VERSION} stable
        </span>
      </Link>

      <div className="blsm-header-spacer" />

      <div
        className="blsm-desktop-only"
        style={{ alignItems: "center", gap: 10, padding: "0 4px 0 8px" }}
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
