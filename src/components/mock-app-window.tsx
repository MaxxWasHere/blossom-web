import { Card, CardBody, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import {
  Fish,
  ShoppingCart,
  FlaskConical,
  Calendar,
  Crosshair,
  Palette,
  Music,
  Settings,
  Play,
  Sparkles,
} from "lucide-react";

const NAV = [
  { label: "Macro", icon: Sparkles, active: true },
  { label: "Fishing", icon: Fish },
  { label: "Merchant", icon: ShoppingCart },
  { label: "Schedule", icon: Calendar, wip: true },
  { label: "Calibrations", icon: Crosshair },
  { label: "Appearance", icon: Palette },
  { label: "Music", icon: Music },
  { label: "Settings", icon: Settings },
];

/** A faithful mock of the Blossom desktop app window, rendered with the real
 *  component styles. It follows the active theme automatically via CSS vars. */
export function MockAppWindow({ id = "mock-app" }: { id?: string }) {
  return (
    <div className="blsm-window" id={id} style={{ height: 560, overflow: "hidden" }}>
      {/* Titlebar */}
      <div className="blsm-titlebar">
        <div className="blsm-titlebar-dots" aria-hidden="true">
          <span className="blsm-titlebar-dot close" />
          <span className="blsm-titlebar-dot minimize" />
          <span className="blsm-titlebar-dot maximize" />
        </div>
        <span className="blsm-titlebar-title">Blossom - Macro Status</span>
        <div className="blsm-titlebar-spacer" />
        <span className="blsm-pill" style={{ fontSize: 11, padding: "3px 10px", marginRight: 10 }}>
          <span
            aria-hidden="true"
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "var(--success)",
              boxShadow: "0 0 8px var(--success)",
            }}
          />
          Running
        </span>
      </div>

      <div className="blsm-app-layout">
        {/* Mini sidebar */}
        <aside className="blsm-sidebar" style={{ width: 188, minWidth: 188 }}>
          <div className="blsm-sidebar-brand" style={{ padding: "14px 14px 12px" }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "linear-gradient(135deg, var(--accent), var(--accent-dim))",
                flexShrink: 0,
              }}
            />
            <div>
              <h1 style={{ fontSize: 15 }}>Blossom</h1>
              <div className="version">v2.3.6</div>
            </div>
          </div>
          <nav className="blsm-sidebar-nav" style={{ padding: "10px 8px", gap: 12 }}>
            <div className="blsm-sidebar-group">
              <div className="blsm-sidebar-section-label">Macros</div>
              {NAV.slice(0, 4).map((item) => (
                <MiniItem key={item.label} {...item} />
              ))}
            </div>
            <div className="blsm-sidebar-group">
              <div className="blsm-sidebar-section-label">Setup</div>
              {NAV.slice(4).map((item) => (
                <MiniItem key={item.label} {...item} />
              ))}
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <div className="blsm-main">
          <div className="blsm-page stagger">
            <div style={{ marginBottom: 18 }}>
              <h2
                className="font-display"
                style={{ fontSize: 22, fontWeight: 600, margin: "0 0 4px", letterSpacing: "-0.015em" }}
              >
                Macro Status
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>
                Live overview of the current automation session.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                marginBottom: 14,
              }}
              className="stat-row"
            >
              <Stat value="1,284" label="Catches" />
              <Stat value="1,284" label="Sells" />
              <Stat value="4h 12m" label="Uptime" />
            </div>

            <Card style={{ marginBottom: 12 }}>
              <CardHeader>
                <CardIcon>
                  <Sparkles size={18} />
                </CardIcon>
                <CardTitle>Automated Actions</CardTitle>
              </CardHeader>
              <CardBody>
                <ToggleRow label="Fishing Mode" hint="Detect bite, reel, walk to dock, sell." defaultOn />
                <ToggleRow label="Auto Potion Craft" hint="Rotate and pop glitched buffs on a schedule." defaultOn />
                <ToggleRow label="Merchant auto-buy" hint="Teleport, OCR the shop, buy your list." />
              </CardBody>
            </Card>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <span className="blsm-chip">
                  <Crosshair size={13} /> Calibrations
                </span>
                <span className="blsm-chip">
                  <Fish size={13} /> Fishing
                </span>
                <span className="blsm-chip">
                  <FlaskConical size={13} /> Buffs
                </span>
              </div>
              <button className="btn btn-accent" type="button" style={{ pointerEvents: "none" }}>
                <Play size={15} /> Start macro
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #mock-app .stat-row { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 560px) {
          #mock-app .stat-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function MiniItem({
  label,
  icon: Icon,
  active,
  wip,
}: {
  label: string;
  icon: typeof Fish;
  active?: boolean;
  wip?: boolean;
}) {
  return (
    <div className={`blsm-sidebar-item${active ? " is-active" : ""}`} style={{ cursor: "default" }}>
      <Icon size={16} className="blsm-sidebar-item-icon" />
      <span>{label}</span>
      {wip && <span className="blsm-wip-badge">WIP</span>}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="blsm-stat">
      <div className="blsm-stat-value">{value}</div>
      <div className="blsm-stat-label">{label}</div>
    </div>
  );
}

function ToggleRow({
  label,
  hint,
  defaultOn,
}: {
  label: string;
  hint: string;
  defaultOn?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 14,
        padding: "8px 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--text-primary)" }}>{label}</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{hint}</div>
      </div>
      <label className="blsm-toggle">
        <input type="checkbox" defaultChecked={defaultOn} readOnly />
        <span className="blsm-toggle-track" />
      </label>
    </div>
  );
}
