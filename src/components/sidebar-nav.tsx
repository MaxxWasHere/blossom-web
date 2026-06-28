"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";

function isActive(pathname: string, href: string) {
  const p = pathname.replace(/\/+$/, "") || "/";
  const h = href.replace(/\/+$/, "") || "/";
  return p === h;
}

/**
 * Sidebar nav with a single GSAP-driven sliding selection rail that moves to
 * the active item on route change (with a scaleY "pop" on arrival) plus an
 * active-item icon pop. On the first mount the rail fades/pops in at the
 * active item; on subsequent navigations it slides from its previous
 * position to the new one (previous position held in a ref across reverts).
 * A passive scroll listener keeps the rail aligned if the nav scrolls.
 * Everything is gated on prefers-reduced-motion via gsap.matchMedia()
 * (snap, no slide/pop when reduceMotion is true). Scoped to the nav ref.
 */
export function SidebarNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLSpanElement>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useGSAP(
    (_context, contextSafe) => {
      const nav = navRef.current;
      const rail = railRef.current;
      if (!nav || !rail || !contextSafe) return;
      const active = nav.querySelector<HTMLElement>(".blsm-sidebar-item.is-active");

      const place = contextSafe((animate: boolean) => {
        if (!active || !rail) return;
        const navRect = nav.getBoundingClientRect();
        const aRect = active.getBoundingClientRect();
        const railH = Math.max(20, aRect.height * 0.6);
        const targetX = aRect.left - navRect.left;
        const targetY = aRect.top - navRect.top + (aRect.height - railH) / 2;
        const fromPos = lastPos.current;
        if (!animate || !fromPos) {
          gsap.set(rail, {
            height: railH,
            x: fromPos ? fromPos.x : targetX,
            y: fromPos ? fromPos.y : targetY,
            autoAlpha: fromPos ? 1 : 0,
          });
          gsap.to(rail, { autoAlpha: 1, x: targetX, y: targetY, duration: 0.45, ease: "power3.out", overwrite: "auto" });
          gsap.fromTo(
            rail,
            { scaleY: 0.3, transformOrigin: "50% 0%" },
            { scaleY: 1, duration: 0.5, ease: "back.out(1.7)", overwrite: "auto" }
          );
        } else {
          gsap.set(rail, { height: railH, x: fromPos.x, y: fromPos.y, autoAlpha: 1 });
          gsap.to(rail, { x: targetX, y: targetY, duration: 0.45, ease: "power3.out", overwrite: "auto" });
          gsap.fromTo(
            rail,
            { scaleY: 0.3, transformOrigin: "50% 0%" },
            { scaleY: 1, duration: 0.5, ease: "back.out(1.7)", overwrite: "auto" }
          );
        }
        lastPos.current = { x: targetX, y: targetY };

        const icon = active.querySelector<HTMLElement>(".blsm-sidebar-item-icon");
        if (icon && animate) {
          gsap.fromTo(
            icon,
            { scale: 0.8 },
            { scale: 1, duration: 0.4, ease: "back.out(1.7)", overwrite: "auto", clearProps: "transform" }
          );
        }
      });

      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
        const reduceMotion = !!conditions?.reduceMotion;
        if (!active) {
          gsap.set(rail, { autoAlpha: 0 });
          return;
        }
        if (reduceMotion) {
          const navRect = nav.getBoundingClientRect();
          const aRect = active.getBoundingClientRect();
          const railH = Math.max(20, aRect.height * 0.6);
          gsap.set(rail, {
            height: railH,
            x: aRect.left - navRect.left,
            y: aRect.top - navRect.top + (aRect.height - railH) / 2,
            autoAlpha: 1,
          });
          lastPos.current = { x: aRect.left - navRect.left, y: aRect.top - navRect.top + (aRect.height - railH) / 2 };
          return;
        }
        place(!!lastPos.current);
      });

      // Keep the rail aligned if the nav scrolls (short windows).
      const onScroll = contextSafe(() => {
        if (!active || !rail) return;
        const navRect = nav.getBoundingClientRect();
        const aRect = active.getBoundingClientRect();
        const railH = Math.max(20, aRect.height * 0.6);
        gsap.set(rail, { x: aRect.left - navRect.left, y: aRect.top - navRect.top + (aRect.height - railH) / 2 });
      });
      nav.addEventListener("scroll", onScroll, { passive: true });

      // Reposition once webfonts have loaded (layout may shift).
      if (typeof document !== "undefined" && "fonts" in document) {
        (document as Document & { fonts: { ready: Promise<unknown> } }).fonts.ready
          .then(() => onScroll())
          .catch(() => {});
      }

      return () => {
        nav.removeEventListener("scroll", onScroll);
        mm.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true, scope: navRef }
  );

  return (
    <nav className="blsm-sidebar-nav" ref={navRef} aria-label="Site">
      <span className="blsm-sidebar-rail" ref={railRef} aria-hidden="true" />
      {NAV_GROUPS.map((group) => (
        <div className="blsm-sidebar-group" key={group.label}>
          <div className="blsm-sidebar-section-label">{group.label}</div>
          {group.items.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("blsm-sidebar-item", active && "is-active")}
                aria-current={active ? "page" : undefined}
                title={item.description}
              >
                <Icon size={16} className="blsm-sidebar-item-icon" />
                <span>{item.label}</span>
                {item.wip && <span className="blsm-wip-badge">WIP</span>}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
