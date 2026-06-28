import Link from "next/link";
import {
  Download,
  ScrollText,
  Sparkles,
  Palette,
  Scale,
  Monitor,
  Command,
  Fish,
  ShoppingCart,
  FlaskConical,
  Music,
  ScanText,
  Calendar,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { VersionPill } from "@/components/version-pill";
import { HomeEntrance } from "@/components/home-entrance";
import { BgPresets } from "@/components/home/bg-presets";
import { Card, CardBody, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { APP_VERSION, EXTERNAL, TAGLINE } from "@/lib/site";

const STATS = [
  { icon: ScrollText, value: `Stable ${APP_VERSION}`, label: "Latest release" },
  { icon: Palette, value: "8 themes", label: "Built-in" },
  { icon: Scale, value: "Apache 2.0", label: "Open source" },
  { icon: Monitor, value: "Windows", label: "Desktop" },
];

const PILLS = [
  { icon: Fish, label: "Fishing" },
  { icon: ShoppingCart, label: "Merchant" },
  { icon: FlaskConical, label: "Buffs" },
  { icon: Music, label: "Music" },
  { icon: ScanText, label: "Biome OCR" },
  { icon: Calendar, label: "Schedule" },
  { icon: Command, label: "Command palette" },
  { icon: Palette, label: "Themes" },
];

const SCHEDULE = [
  { label: "Fishing", time: ":02", state: "done" },
  { label: "Merchant", time: ":14", state: "done" },
  { label: "Buffs", time: ":28", state: "now" },
  { label: "Re-buff", time: ":44", state: "next" },
  { label: "Biome", time: ":58", state: "" },
];

export default function HomePage() {
  return (
    <HomeEntrance>
      <div className="blsm-home">
        {/* Stats strip */}
        <div className="blsm-home-stats">
          {STATS.map((s) => (
            <div key={s.label} className="blsm-stat-cell blsm-hero-el">
              <span className="blsm-stat-cell-icon">
                <s.icon size={15} />
              </span>
              <span className="blsm-stat-cell-meta">
                <span className="blsm-stat-cell-value">{s.value}</span>
                <span className="blsm-stat-cell-label">{s.label}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Main grid: compact hero + widget column */}
        <div className="blsm-home-grid">
          {/* Compact hero */}
          <section className="blsm-home-hero" style={{ position: "relative", overflow: "hidden" }}>
            <AuroraBackground />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                className="blsm-hero-el"
                style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}
              >
                <span className="blsm-pill">
                  <Sparkles size={13} /> Open source &middot; Apache 2.0
                </span>
                <VersionPill version={APP_VERSION} />
              </div>

              <h1
                className="blsm-hero-el font-display blsm-gradient-text"
                style={{
                  margin: "0 0 8px",
                  fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.02,
                }}
              >
                Blossom
              </h1>

              <p className="blsm-hero-el blsm-home-tagline">{TAGLINE}</p>

              <div className="blsm-home-row blsm-hero-el" style={{ marginTop: 4 }}>
                <a className="btn btn-accent" href={EXTERNAL.releases} target="_blank" rel="noreferrer noopener">
                  <Download size={16} /> Download
                </a>
                <Link className="btn btn-secondary" href="/changelog">
                  <ScrollText size={16} /> Changelog
                </Link>
              </div>

              <div className="blsm-home-pills blsm-hero-el" aria-label="Capabilities">
                {PILLS.map((c) => (
                  <span key={c.label} className="blsm-chip">
                    <c.icon size={13} /> {c.label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Widgets */}
          <div className="blsm-home-widgets">
            {/* Now playing */}
            <Card hover className="blsm-widget blsm-np-card">
              <CardHeader>
                <CardIcon>
                  <Music size={18} />
                </CardIcon>
                <CardTitle>Now playing</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="blsm-np">
                  <div className="blsm-np-top">
                    <span className="blsm-np-art">
                      <Music size={20} />
                    </span>
                    <span className="blsm-np-meta">
                      <span className="blsm-np-title">Sols RNG &mdash; lofi grind mix</span>
                      <span className="blsm-np-artist">Blossom player &middot; local file</span>
                    </span>
                  </div>
                  <div className="blsm-np-progress">
                    <span className="blsm-np-progress-fill" />
                  </div>
                  <div className="blsm-np-transport">
                    <SkipBack size={16} />
                    <span className="blsm-np-play">
                      <Play size={15} />
                    </span>
                    <SkipForward size={16} />
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--text-muted)",
                      }}
                    >
                      1:24 / 3:12
                    </span>
                    <Volume2 size={15} />
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Schedule peek */}
            <Card hover className="blsm-widget blsm-sched-card">
              <CardHeader>
                <CardIcon>
                  <Calendar size={18} />
                </CardIcon>
                <CardTitle>Schedule</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="blsm-sched">
                  <div className="blsm-sched-next">
                    <span className="blsm-sched-next-icon">
                      <FlaskConical size={16} />
                    </span>
                    <span className="blsm-sched-next-meta">
                      <span className="blsm-sched-next-label">Next action</span>
                      <span className="blsm-sched-next-title">Pop glitched buffs</span>
                    </span>
                    <span className="blsm-sched-next-countdown">in 2m 14s</span>
                  </div>
                  <div className="blsm-sched-timeline">
                    {SCHEDULE.map((s) => (
                      <div
                        key={s.label}
                        className={`blsm-sched-step${s.state === "now" ? " is-now" : ""}${
                          s.state === "next" ? " is-next" : ""
                        }`}
                      >
                        <span className="blsm-sched-dot" />
                        <span className="blsm-sched-step-label">{s.label}</span>
                        <span className="blsm-sched-step-time">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Animated background preset row (full width) */}
        <BgPresets />
      </div>
    </HomeEntrance>
  );
}
