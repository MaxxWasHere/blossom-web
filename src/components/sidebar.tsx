import Image from "next/image";
import { APP_VERSION, EXTERNAL } from "@/lib/site";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <aside className="blsm-sidebar" aria-label="Primary">
      <div className="blsm-sidebar-brand">
        {/* next/image with unoptimized handles basePath automatically */}
        <Image
          src="/blossom.png"
          alt="Blossom logo"
          width={34}
          height={34}
          className="blsm-sidebar-brand-mark"
          unoptimized
          priority
        />
        <div>
          <h1>Blossom</h1>
          <div className="version">v{APP_VERSION} stable</div>
        </div>
      </div>

      <SidebarNav />

      <div className="blsm-sidebar-footer">
        Apache 2.0 &middot; open source
        <br />
        <a href={EXTERNAL.appRepo} target="_blank" rel="noreferrer noopener">
          MaxxWasHere/Blossom
        </a>
      </div>
    </aside>
  );
}

