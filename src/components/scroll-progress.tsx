"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

/**
 * Thin accent scroll-progress bar pinned to the top of the viewport. Its
 * scaleX is scrubbed to the document scroll position via ScrollTrigger
 * (start 0 -> end "max"). Hidden under prefers-reduced-motion. Re-initializes
 * on route change so the end recalculates for the new page height.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const bar = ref.current;
      if (!bar) return;
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
        if (!!conditions?.reduceMotion) {
          gsap.set(bar, { autoAlpha: 0 });
          return;
        }
        gsap.fromTo(
          bar,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
          }
        );
      });
      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true, scope: ref }
  );

  return <div ref={ref} className="blsm-scroll-progress" aria-hidden="true" />;
}
