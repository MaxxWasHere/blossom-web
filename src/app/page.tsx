import Link from "next/link";
import {
  Download,
  ScrollText,
  Sparkles,
  Fish,
  ShoppingCart,
  FlaskConical,
  Music,
  Palette,
  ScanText,
  Command,
  Calendar,
  Scale,
  Monitor,
  ArrowRight,
} from "lucide-react";
import { AuroraBackground } from "@/components/aurora-background";
import { VersionPill } from "@/components/version-pill";
import { HomeEntrance } from "@/components/home-entrance";
import { Card, CardBody, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { MockAppWindow } from "@/components/mock-app-window";
import { ThemeGrid } from "@/components/theme-grid";
import { APP_VERSION, EXTERNAL, TAGLINE } from "@/lib/site";

const STATS = [
  { icon: ScrollText, value: `v${APP_VERSION}`, label: "Latest stable" },
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

const FEATURES = [
  {
    icon: Fish,
    title: "Fishing Mode",
    desc: "Detect the bite, reel the minigame, walk to the dock, and optionally sell at the fish shop — with a failsafe rejoin when stuck.",
  },
  {
    icon: ShoppingCart,
    title: "Merchant auto-buy",
    desc: "Teleporter flow with interact, dialogue, OCR, and shop. Presses your Set Max then Purchase, returns you to Limbo, and de-duplicates shop pings.",
  },
  {
    icon: FlaskConical,
    title: "Glitched buff popping",
    desc: "Each potion is used once on a priority order (Xyz, Warp, Heavenly II, Oblivion) with settle gaps between rotation crafts.",
  },
  {
    icon: Music,
    title: "Music player",
    desc: "A full in-app page with now-playing, transport, seek, volume, speed (0.5x–2x), shuffle and repeat. Add tracks from a URL or a local file.",
  },
  {
    icon: Sparkles,
    title: "Animated backgrounds",
    desc: "Live Aurora, Mesh, Stars, or Bubbles wallpapers — or your own video, gif, or image. Opacity, blur, dim, and speed sliders tune the look.",
  },
  {
    icon: Palette,
    title: "Eight built-in themes",
    desc: "Pink, Sakura, Midnight, OLED, Forest, Light, Dark, and System — all driven by Material 3 design tokens, switchable live.",
  },
];

export default function HomePage() {
  return (
    <HomeEntrance>
      {/* Hero */}
      <section className="blsm-hero-section">
        <AuroraBackground />
        <div className="blsm-container blsm-hero-inner">
          <div className="blsm-hero-badges blsm-hero-el">
            <span className="blsm-pill">
              <Sparkles size={13} /> Open source &middot; Apache 2.0
            </span>
            <VersionPill version={APP_VERSION} />
          </div>
          <h1 className="blsm-hero-el blsm-hero-title font-display blsm-gradient-text">
            Blossom
          </h1>
          <p className="blsm-hero-el blsm-hero-subhead">{TAGLINE}</p>
          <div className="blsm-hero-el blsm-hero-cta-row">
            <a
              className="btn btn-accent blsm-hero-cta-primary"
              href={EXTERNAL.releases}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Download size={18} /> Download for Windows
            </a>
            <Link className="btn btn-secondary" href="/changelog">
              <ScrollText size={16} /> View changelog
            </Link>
          </div>
          <div className="blsm-hero-el blsm-hero-pills" aria-label="Capabilities">
            {PILLS.map((c) => (
              <span key={c.label} className="blsm-chip">
                <c.icon size={13} /> {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="blsm-section blsm-cred-section">
        <div className="blsm-container blsm-cred-strip">
          {STATS.map((s) => (
            <div key={s.label} className="blsm-stat-cell">
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
      </section>

      {/* What it does */}
      <section className="blsm-section">
        <div className="blsm-container">
          <div className="blsm-section-head">
            <div className="blsm-eyebrow">What it does</div>
            <h2 className="m3-headline blsm-section-title">A macro that feels good to use</h2>
            <p className="blsm-section-sub">
              Blossom automates the grind and wraps it in a Material 3 Expressive desktop app —
              fishing, shopping, buffs, music, and themes, all in one place.
            </p>
          </div>
          <div className="blsm-feature-grid">
            {FEATURES.map((f) => (
              <Card key={f.title} hover className="blsm-feature-card">
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
        </div>
      </section>

      {/* Showcase teaser */}
      <section className="blsm-section">
        <div className="blsm-container">
          <div className="blsm-section-head">
            <div className="blsm-eyebrow">Showcase</div>
            <h2 className="m3-headline blsm-section-title">A peek at the app</h2>
            <p className="blsm-section-sub">
              A static mock of Blossom&apos;s Macro Status page, rendered with the same Material 3
              tokens and components as the real app. It follows your chosen theme.
            </p>
          </div>
          <div className="blsm-showcase-teaser">
            <MockAppWindow />
          </div>
          <div className="blsm-showcase-teaser-cta">
            <Link className="btn btn-secondary" href="/showcase">
              Explore the showcase <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Themes preview */}
      <section className="blsm-section">
        <div className="blsm-container">
          <div className="blsm-section-head">
            <div className="blsm-eyebrow">Themes</div>
            <h2 className="m3-headline blsm-section-title">Eight built-in themes</h2>
            <p className="blsm-section-sub">
              Pick one and the whole site updates instantly — the same themes ship in the app&apos;s
              Appearance tab.
            </p>
          </div>
          <ThemeGrid />
        </div>
      </section>

      {/* CTA band */}
      <section className="blsm-cta-section">
        <div className="blsm-container">
          <div className="blsm-cta-band">
            <AuroraBackground />
            <div className="blsm-cta-band-inner">
              <h2 className="m3-headline blsm-cta-title">Download Blossom</h2>
              <p className="blsm-cta-sub">
                Free and open source under Apache 2.0. Grab the bootstrapper and it stays current on
                its own.
              </p>
              <div className="blsm-cta-row">
                <a
                  className="btn btn-accent blsm-hero-cta-primary"
                  href={EXTERNAL.releases}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Download size={18} /> Download for Windows
                </a>
                <a
                  className="btn btn-secondary"
                  href={EXTERNAL.appRepo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View on GitHub <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeEntrance>
  );
}
