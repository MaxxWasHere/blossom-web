import { Titlebar } from "./titlebar";
import { Sidebar } from "./sidebar";

/**
 * The whole site is rendered as a single simulated Blossom desktop window,
 * fixed to the viewport and clipped (overflow: hidden). The document itself
 * never scrolls; only the inner main-content pane scrolls where content
 * genuinely overflows (e.g. Changelog). On narrow viewports the sidebar
 * collapses and the window goes edge-to-edge (see globals.css).
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="blsm-app-root">
      <div className="blsm-window blsm-app-window">
        <Titlebar />
        <div className="blsm-app-layout">
          <Sidebar />
          <main className="blsm-main">{children}</main>
        </div>
      </div>
    </div>
  );
}
