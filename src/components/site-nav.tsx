"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { ALL_NAV_ITEMS, APP_VERSION, EXTERNAL } from "@/lib/site";
import { cn, withBasePath } from "@/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import { MobileNav } from "./mobile-nav";

function norm(p: string) {
  return p.replace(/\/+$/, "") || "/";
}

/**
 * Sticky, full-width marketing top nav (replaces the app-shell sidebar/header).
 * Blossom brand + version left, horizontal page links center, theme switcher +
 * a prominent Download CTA right. On narrow screens the links collapse into the
 * MobileNav drawer (hamburger). Translucent blurred M3 surface.
 */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="blsm-site-nav" data-blsm-nav>
      <div className="blsm-site-nav-inner">
        <Link href="/" className="blsm-site-nav-brand" aria-label="Blossom home">
          <Image
            src={withBasePath("/blossom.png")}
            alt=""
            width={28}
            height={28}
            className="blsm-site-nav-logo"
            unoptimized
            priority
          />
          <span className="blsm-site-nav-wordmark">Blossom</span>
          <span className="version-pill blsm-site-nav-version">v{APP_VERSION}</span>
        </Link>

        <nav className="blsm-site-nav-links blsm-desktop-only" aria-label="Primary">
          {ALL_NAV_ITEMS.map((item) => {
            const active = norm(pathname) === norm(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("blsm-site-nav-link", active && "is-active")}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="blsm-site-nav-actions">
          <div className="blsm-desktop-only blsm-site-nav-actions-desktop">
            <ThemeSwitcher />
            <a
              className="btn btn-accent blsm-site-nav-cta"
              href={EXTERNAL.releases}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Download size={16} /> Download
            </a>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
