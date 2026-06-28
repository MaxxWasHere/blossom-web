import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { PageTransition } from "./page-transition";
import { ScrollReveal } from "./scroll-reveal";
import { ScrollProgress } from "./scroll-progress";
import { ThemeFlash } from "./theme-flash";

/**
 * Marketing site shell: a sticky top nav, a normally-scrolling main content
 * area (the document scrolls — this is a marketing site, not an app window),
 * and a rich footer. Replaces the app-shell sidebar/titlebar entirely. Keeps
 * the GSAP page-transition fade, ScrollTrigger scroll reveals + progress bar,
 * and theme-flash crossfade.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      <ScrollProgress />
      <main className="blsm-site-main">
        <PageTransition>
          <ScrollReveal>{children}</ScrollReveal>
        </PageTransition>
      </main>
      <SiteFooter />
      <ThemeFlash />
    </>
  );
}
