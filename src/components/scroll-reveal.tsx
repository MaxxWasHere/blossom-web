"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

/**
 * Scroll-revealed entrances for any element marked `.blsm-reveal`. Elements are
 * pre-hidden (autoAlpha 0, y 24) and revealed with a staggered fade/rise as
 * they enter the viewport via ScrollTrigger.batch. Anything already in the
 * viewport on load (above the fold) is revealed immediately as a safety so it
 * never gets stuck hidden. Skipped entirely under prefers-reduced-motion
 * (elements stay visible). Re-initializes on route change (pathname dependency)
 * with revertOnUpdate so stale ScrollTriggers are killed. Scoped to its wrapper.
 */
export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const scope = ref.current;
      if (!scope) return;
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
        const els = Array.from(scope.querySelectorAll<HTMLElement>(".blsm-reveal"));
        if (!!conditions?.reduceMotion) {
          gsap.set(els, { autoAlpha: 1, y: 0 });
          return;
        }
        if (els.length === 0) return;
        gsap.set(els, { autoAlpha: 0, y: 24 });
        ScrollTrigger.batch(els, {
          start: "top 88%",
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.5,
              ease: "power3.out",
              overwrite: "auto",
            }),
          onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, y: 24, overwrite: "auto" }),
        });
        ScrollTrigger.refresh();
        const vh = typeof window !== "undefined" ? window.innerHeight : 800;
        els.forEach((el) => {
          if (el.getBoundingClientRect().top < vh * 0.92) {
            gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", overwrite: "auto" });
          }
        });
      });
      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true, scope: ref }
  );

  return <div ref={ref}>{children}</div>;
}
