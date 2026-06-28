import Image from "next/image";
import { APP_VERSION, EXTERNAL } from "@/lib/site";
import { withBasePath } from "@/lib/utils";
import { SidebarNav } from "./sidebar-nav";

export function Sidebar() {
  return (
    <aside className="blsm-sidebar" aria-label="Primary">
      <div className="blsm-sidebar-brand">
        {/* unoptimized next/image does not inherit basePath, so prefix manually */}
        <Image
          src={withBasePath("/blossom.png")}
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
