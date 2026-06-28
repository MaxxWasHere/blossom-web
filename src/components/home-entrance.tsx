"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Staggered entrance for the Home dashboard, played as a timeline:
 * hero elements (badges, wordmark, tagline, buttons, pills) -> widget cards
 * -> animated-background preset thumbnails. Uses gsap.from with
 * immediateRender (default) inside useLayoutEffect so the start state is
 * applied before first paint (no flash). Skipped under reduced motion.
 * Scoped to its wrapper ref so selectors stay inside the Home view.
 */
export function HomeEntrance({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
        if (!!conditions?.reduceMotion) return;
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".blsm-hero-el", { autoAlpha: 0, y: 24, stagger: 0.07, duration: 0.55 })
          .from(".blsm-widget", { autoAlpha: 0, y: 18, stagger: 0.06, duration: 0.45 }, "-=0.28")
          .from(
            ".blsm-bg-thumb",
            { autoAlpha: 0, y: 12, scale: 0.9, stagger: 0.05, duration: 0.35, ease: "back.out(1.7)" },
            "-=0.22"
          );
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
