"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  const p = pathname.replace(/\/+$/, "") || "/";
  const h = href.replace(/\/+$/, "") || "/";
  return p === h;
}

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="blsm-sidebar-nav" aria-label="Site">
      {NAV_GROUPS.map((group) => (
        <div className="blsm-sidebar-group" key={group.label}>
          <div className="blsm-sidebar-section-label">{group.label}</div>
          {group.items.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("blsm-sidebar-item", active && "is-active")}
                aria-current={active ? "page" : undefined}
                title={item.description}
              >
                <Icon size={16} className="blsm-sidebar-item-icon" />
                <span>{item.label}</span>
                {item.wip && <span className="blsm-wip-badge">WIP</span>}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
