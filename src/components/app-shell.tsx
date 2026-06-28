import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { PageTransition } from "./page-transition";
import { ThemeFlash } from "./theme-flash";

/**
 * Full-bleed app shell: the shell IS the page (100dvh x 100vw, edge-to-edge,
 * no floating window frame). A clean header spans the top; below it a flush
 * sidebar + main content. The document never scrolls; only the inner main
 * pane scrolls where content overflows (e.g. Changelog). On narrow viewports
 * the sidebar collapses to a mobile nav drawer (see globals.css / MobileNav).
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="blsm-app-root">
      <div className="blsm-app-shell">
        <Header />
        <div className="blsm-app-layout">
          <Sidebar />
          <main className="blsm-main">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </div>
      <ThemeFlash />
    </div>
  );
}
