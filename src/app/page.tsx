import Link from "next/link";
import {
  Download,
  ScrollText,
  Fish,
  ShoppingCart,
  FlaskConical,
  Music,
  Palette,
  Sparkles,
  ScanText,
  Command,
  Calendar,
  ArrowRight,
  Monitor,
} from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { VersionPill } from "@/components/version-pill";
import { MockAppWindow } from "@/components/mock-app-window";
import { Card, CardBody, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { APP_VERSION, EXTERNAL, TAGLINE } from "@/lib/site";

const TEASER = [
  {
    icon: Fish,
    title: "Macro engine",
    desc: "Fishing Mode, merchant auto-buy, and glitched-buff popping run on the original Noteab timings.",
  },
  {
    icon: Music,
    title: "Music player",
    desc: "A full in-app page: playlist, transport, seek/volume/speed, shuffle and repeat. Local files or URLs.",
  },
  {
    icon: Sparkles,
    title: "Animated backgrounds",
    desc: "Aurora, Mesh, Stars, and Bubbles presets, or your own video, gif, or image as a live wallpaper.",
  },
  {
    icon: Sparkles,
    title: "Expressive motion",
    desc: "Material 3 Expressive easing everywhere: hover lifts, press springs, focus glows, fade-rise entrances.",
  },
  {
    icon: ScanText,
    title: "Biome notifier",
    desc: "OCR-based biome detection with Discord webhook pings and screenshots. (Biome Selector OCR is WIP.)",
  },
  {
    icon: Palette,
    title: "8 built-in themes",
    desc: "Pink, Sakura, Midnight, OLED, Forest, Light, Dark, and System. Switch live on this site.",
  },
];

const CAPABILITIES = [
  { icon: Fish, label: "Fishing" },
  { icon: ShoppingCart, label: "Merchant" },
  { icon: FlaskConical, label: "Buffs" },
  { icon: Music, label: "Music" },
  { icon: ScanText, label: "Biome OCR" },
  { icon: Palette, label: "Themes" },
  { icon: Command, label: "Command palette" },
  { icon: Calendar, label: "Schedule" },
];

export default function HomePage() {
  return (
    <div className="blsm-page">
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", padding: "40px 0 56px" }}>
        <AuroraBackground />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
          <div className="blsm-rise" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
            <span className="blsm-pill">
              <Sparkles size={13} /> Open source - Apache 2.0
            </span>
            <VersionPill version={APP_VERSION} />
          </div>

          <h1
            className="blsm-rise font-display"
            style={{
              fontSize: "clamp(3rem, 9vw, 5.25rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
              margin: "0 0 16px",
            }}
          >
            <span className="blsm-gradient-text">Blossom</span>
          </h1>

          <p
            className="blsm-rise"
            style={{
              fontSize: "clamp(1.05rem, 2.4vw, 1.35rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.5,
              maxWidth: 620,
              margin: "0 0 26px",
            }}
          >
            {TAGLINE}
          </p>

          <div
            className="blsm-rise"
            style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 28 }}
          >
            <a className="btn btn-accent" href={EXTERNAL.releases} target="_blank" rel="noreferrer noopener">
              <Download size={17} /> Download for Windows
            </a>
            <Link className="btn btn-secondary" href="/changelog">
              <ScrollText size={17} /> View changelog
            </Link>
          </div>

          <div
            className="blsm-rise"
            style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
            aria-label="Capabilities"
          >
            {CAPABILITIES.map((c) => (
              <span key={c.label} className="blsm-chip">
                <c.icon size={13} /> {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <hr className="blsm-divider" />

      {/* Feature teaser */}
      <section className="blsm-section" style={{ paddingBottom: 48 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <div>
            <div className="blsm-eyebrow" style={{ marginBottom: 8 }}>
              What it does
            </div>
            <h2 className="m3-headline" style={{ margin: 0 }}>
              Everything Blossom does, out of the box
            </h2>
          </div>
          <Link href="/features" className="btn btn-ghost" style={{ minHeight: 36 }}>
            Explore all features <ArrowRight size={15} />
          </Link>
        </div>

        <div
          className="stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}
        >
          {TEASER.map((f) => (
            <Card key={f.title} hover>
              <CardHeader>
                <CardIcon>
                  <f.icon size={18} />
                </CardIcon>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardBody>
                <p>{f.desc}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Showcase preview */}
      <section className="blsm-section" style={{ paddingTop: 16, paddingBottom: 48 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 1fr) minmax(360px, 1.3fr)",
            gap: 28,
            alignItems: "center",
          }}
          className="showcase-split"
        >
          <div>
            <div className="blsm-eyebrow" style={{ marginBottom: 8 }}>
              See it in your theme
            </div>
            <h2 className="m3-headline" style={{ margin: "0 0 12px" }}>
              The site is the app
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6, marginBottom: 18 }}>
              This whole site is built from Blossom&apos;s real Material 3 tokens, themes, fonts, and
              app-shell components. Pick any of the eight built-in themes and the mock window updates
              instantly, exactly like the Appearance tab in the app.
            </p>
            <Link href="/showcase" className="btn btn-secondary">
              <Monitor size={16} /> Open the showcase
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <MockAppWindow />
          </div>
        </div>
      </section>

      {/* Latest release */}
      <section className="blsm-section" style={{ paddingTop: 16 }}>
        <Card>
          <CardHeader>
            <CardIcon>
              <ScrollText size={18} />
            </CardIcon>
            <CardTitle>Latest release - v{APP_VERSION}</CardTitle>
            <Link
              href="/changelog"
              style={{ marginLeft: "auto", fontSize: 13, fontWeight: 600 }}
            >
              Full changelog <ArrowRight size={13} style={{ display: "inline", verticalAlign: "-1px" }} />
            </Link>
          </CardHeader>
          <CardBody>
            <p style={{ marginBottom: 12 }}>
              A stability release: robust aura and reconnect detection, a steadier merchant + fishing
              teleporter loop, and de-duplicated merchant shop pings. The stable updater offers this
              build; beta builds stay on their own track.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span className="blsm-chip">Aura + reconnect fixes</span>
              <span className="blsm-chip">Merchant loop</span>
              <span className="blsm-chip">Fishing teleporter walk-back</span>
              <span className="blsm-chip">Shop-ping de-dup</span>
            </div>
          </CardBody>
        </Card>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .showcase-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
