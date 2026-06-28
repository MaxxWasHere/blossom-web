import { EXTERNAL } from "@/lib/site";
import { SidebarNav } from "./sidebar-nav";

/**
 * Flush-left, full-height sidebar. Brand + version live in the top Header now,
 * so the sidebar is just the nav + a compact footer (license/repo/Discord +
 * disclaimer). Keeps the inset tonal-lane look and the GSAP sliding rail.
 */
export function Sidebar() {
  return (
    <aside className="blsm-sidebar" aria-label="Primary">
      <SidebarNav />

      <div className="blsm-sidebar-footer">
        Apache 2.0 &middot; open source
        <br />
        <a href={EXTERNAL.appRepo} target="_blank" rel="noreferrer noopener">
          MaxxWasHere/Blossom
        </a>
        {" &middot; "}
        <a href={EXTERNAL.discord} target="_blank" rel="noreferrer noopener">
          Discord
        </a>
        <br />
        Independent fork. Not affiliated with Roblox.
        <br />
        &copy; {new Date().getFullYear()} MaxxWasHere
      </div>
    </aside>
  );
}
