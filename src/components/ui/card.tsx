"use client";

import { useRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Card with GSAP-driven hover (y lift) and press (scale) micro-interactions.
 * Only cards passed `hover` get the effect. The handlers are wrapped in
 * contextSafe so the tweens are reverted on unmount, and the whole thing is
 * gated on prefers-reduced-motion via gsap.matchMedia() (no transform when
 * reduceMotion is true). Scoped to the card ref via useGSAP.
 */
export function Card({ className, hover, ...props }: HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      if (!hover) return;
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
        if (!!conditions?.reduceMotion) return;
        const enter = contextSafe(() => gsap.to(el, { y: -3, duration: 0.18, ease: "power2.out", overwrite: "auto" }));
        const leave = contextSafe(() => gsap.to(el, { y: 0, duration: 0.22, ease: "power2.out", overwrite: "auto" }));
        const down = contextSafe(() => gsap.to(el, { scale: 0.985, duration: 0.1, ease: "power2.out", overwrite: "auto" }));
        const up = contextSafe(() => gsap.to(el, { scale: 1, duration: 0.22, ease: "back.out(2)", overwrite: "auto" }));
        el.addEventListener("pointerenter", enter);
        el.addEventListener("pointerleave", leave);
        el.addEventListener("pointerdown", down);
        el.addEventListener("pointerup", up);
        el.addEventListener("pointercancel", up);
        return () => {
          el.removeEventListener("pointerenter", enter);
          el.removeEventListener("pointerleave", leave);
          el.removeEventListener("pointerdown", down);
          el.removeEventListener("pointerup", up);
          el.removeEventListener("pointercancel", up);
        };
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return <div ref={ref} className={cn("blsm-card", hover && "blsm-card-hover", className)} {...props} />;
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("blsm-card-header", className)} {...props} />;
}

export function CardIcon({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("blsm-card-icon", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("blsm-card-title", className)} {...props} />;
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("blsm-card-body", className)} {...props} />;
}
