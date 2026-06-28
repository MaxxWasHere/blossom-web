"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Fades + rises the main content on route change (fade/rise + subtle scale).
 * Skipped on Home (the HomeEntrance component handles its own staggered
 * reveal) and when the user prefers reduced motion. Scoped to its wrapper
 * ref via useGSAP; re-runs on every pathname change with revertOnUpdate so
 * the previous transition is cleaned up before the next plays.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const isHome = pathname === "/";
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
        const reduceMotion = !!conditions?.reduceMotion;
        if (isHome || reduceMotion) {
          gsap.set(el, { autoAlpha: 1, y: 0, scale: 1 });
          return;
        }
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 14, scale: 0.99 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.42, ease: "power3.out" }
        );
      });
      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true, scope: ref }
  );

  return <div className="blsm-page-transition">{children}</div>;
}
