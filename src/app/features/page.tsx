import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardBody, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import {
  Music,
  Sparkles,
  Fish,
  ShoppingCart,
  FlaskConical,
  Calendar,
  ScanText,
  Command,
  Palette,
  RefreshCw,
  Crosshair,
  FileText,
  Rocket,
  MonitorCog,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Blossom's full feature set: a macro engine with Fishing, Merchant, and buff popping, an in-app music player, animated backgrounds, expressive Material 3 motion, biome notifier, command palette, and eight built-in themes.",
};

type Feature = {
  icon: typeof Music;
  title: string;
  desc: string;
  wip?: boolean;
  group: "Automation" | "Experience" | "Setup";
};

const FEATURES: Feature[] = [
  {
    icon: Fish,
    group: "Automation",
    title: "Fishing Mode",
    desc: "Full automation from the original Noteab macro: detect the bite, reel the minigame, walk to the dock, and optionally sell at the fish shop. Includes a failsafe rejoin when stuck at the dock.",
  },
  {
    icon: ShoppingCart,
    group: "Automation",
    title: "Merchant auto-buy",
    desc: "Teleporter flow with Coteab-style interact, dialogue, OCR, and shop. Presses your calibrated Set Max then Purchase, returns you to Limbo via Portable Crack, and de-duplicates shop pings.",
  },
  {
    icon: FlaskConical,
    group: "Automation",
    title: "Glitched buff popping",
    desc: "Each potion is used once (not three times) on a priority order (Xyz, Warp, Heavenly II, Oblivion) with a settle gap between rotation crafts so other UI tasks can run between slots.",
  },
  {
    icon: RefreshCw,
    group: "Automation",
    title: "Auto Reconnect",
    desc: "When Roblox closes or disconnects mid-macro, Blossom terminates the client, joins your private server, clicks your Reconnect Start button, and verifies you are in-game from the logs.",
  },
  {
    icon: Calendar,
    group: "Automation",
    title: "Macro Schedule",
    desc: "A horizontal timeline editor with draggable blocks, palette chips, zoom, and named profiles (e.g. Weekday fish). Overrides fishing, potion craft, and merchant per step while running.",
    wip: true,
  },
  {
    icon: ScanText,
    group: "Automation",
    title: "Biome notifier",
    desc: "OCR-based biome detection with Blossom-style Discord embeds, screenshots, and your private server link as a Rejoin field. The Biome Selector OCR engine is still a work in progress.",
  },
  {
    icon: Music,
    group: "Experience",
    title: "Music player",
    desc: "A full in-app page with now-playing, transport, seek, volume, speed (0.5x-2x), a scrolling playlist, shuffle and repeat. Add tracks from a web URL or a local audio file. Playlist and settings persist.",
  },
  {
    icon: Sparkles,
    group: "Experience",
    title: "Animated backgrounds",
    desc: "Live wallpaper presets (Aurora, Mesh, Stars, Bubbles) or your own video, gif, or image via URL or Browse. Opacity, blur, dim, and speed sliders tune the look; it freezes with Reduce motion.",
  },
  {
    icon: Sparkles,
    group: "Experience",
    title: "Expressive motion",
    desc: "Material 3 Expressive easing across inputs, selects, checkboxes, chips, badges, buttons, list rows, links, and code: hover lifts, press springs, focus glows, a checked pop, and container-transform entrances.",
  },
  {
    icon: Palette,
    group: "Experience",
    title: "Eight built-in themes",
    desc: "Pink (stock), Sakura, Midnight, OLED, Forest, Light, Dark, and System, all driven by Material 3 design tokens. Switch live on this site or in the app's Appearance tab.",
  },
  {
    icon: Command,
    group: "Experience",
    title: "Command palette",
    desc: "A Cmd/Ctrl+K palette with container-transform entrance, keyboard navigation, and the same rounded selection rows as the sidebar. Jump to any tab or action without reaching for the mouse.",
  },
  {
    icon: Crosshair,
    group: "Setup",
    title: "Unified Calibrations hub",
    desc: "Every Mark saves to your Blossom config and the macro reads updated points on the next tick without restarting. A tabbed hub with flow banners guides each calibration step.",
  },
  {
    icon: Rocket,
    group: "Setup",
    title: "Welcome setup & tours",
    desc: "A refreshed onboarding flow with Fishing Mode on the automation step, shared-axis transitions, M3 dot progress, expressive feature cards, a theme swatch grid, and an M3 Expressive loading sequence.",
  },
  {
    icon: FileText,
    group: "Setup",
    title: "Logs & diagnostics",
    desc: "Session logs under %LOCALAPPDATA%\\Blossom\\logs\\ (logs.txt for INFO+, errors.log for errors). Rotate when large; copy the last ~300 lines for support from Settings & extras.",
  },
  {
    icon: MonitorCog,
    group: "Setup",
    title: "Built-in updater",
    desc: "The bootstrapper syncs to the newest release for its channel on every start, including deliberate rollbacks, so one shortcut stays current on its own. Stable and beta stay on separate tracks.",
  },
];

const GROUPS: { label: string; blurb: string }[] = [
  { label: "Automation", blurb: "The macro engine that runs while you are away." },
  { label: "Experience", blurb: "The look, feel, and sound of using Blossom." },
  { label: "Setup", blurb: "Getting calibrated, onboarded, and staying up to date." },
];

export default function FeaturesPage() {
  return (
    <div className="blsm-page">
      <PageHeader
        eyebrow="Features"
        title="Everything Blossom does"
        description="A Roblox macro with a fishing mode, merchant auto-buy, and buff popping, wrapped in a Material 3 Expressive desktop app with a music player, animated backgrounds, and eight themes."
      />

      {GROUPS.map((group) => (
        <section key={group.label} style={{ marginBottom: 36 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 14,
            }}
          >
            <h2 className="m3-headline" style={{ margin: 0, fontSize: "1.4rem" }}>
              {group.label}
            </h2>
            <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{group.blurb}</span>
          </div>
          <div
            className="stagger"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 14,
            }}
          >
            {FEATURES.filter((f) => f.group === group.label).map((f) => (
              <Card key={f.title} hover style={{ height: "100%" }}>
                <CardHeader>
                  <CardIcon>
                    <f.icon size={18} />
                  </CardIcon>
                  <CardTitle>{f.title}</CardTitle>
                  {f.wip && <span className="blsm-wip-badge" style={{ marginLeft: "auto" }}>WIP</span>}
                </CardHeader>
                <CardBody>
                  <p>{f.desc}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
