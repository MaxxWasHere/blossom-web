"use client";

import { useRef } from "react";
import { useTheme } from "next-themes";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * A quick accent wash that crossfades in/out when the theme changes
 * (autoAlpha 0.4 -> 0). Skipped on the initial theme set and when the user
 * prefers reduced motion. Scoped to its overlay ref; re-runs on theme change.
 */
export function ThemeFlash() {
  const ref = useRef<HTMLDivElement>(null);
  const prev = useRef<string | undefined>(undefined);
  const { theme } = useTheme();

  useGSAP(
    () => {
      if (!theme || theme === prev.current) return;
      const wasInitial = prev.current === undefined;
      prev.current = theme;
      if (wasInitial) return;

      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
        if (!!conditions?.reduceMotion) return;
        gsap.fromTo(el, { autoAlpha: 0.4 }, { autoAlpha: 0, duration: 0.5, ease: "power2.out" });
      });
      return () => mm.revert();
    },
    { dependencies: [theme], revertOnUpdate: true, scope: ref }
  );

  return <div ref={ref} className="blsm-theme-flash" aria-hidden="true" />;
}
