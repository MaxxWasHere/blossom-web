import type { LucideIcon } from "lucide-react";
import {
  Home,
  Sparkles,
  Monitor,
  ScrollText,
  Download,
  HelpCircle,
} from "lucide-react";

export const APP_VERSION = "2.3.6";
export const SITE_NAME = "Blossom";
export const SITE_TITLE = "Blossom - Roblox macro";
export const TAGLINE =
  "A Roblox macro that fishes, shops, and babysits your buffs while you are away.";
export const DESCRIPTION =
  "Blossom is an open-source (Apache 2.0) Roblox macro with a fishing mode, merchant auto-buy, buff popping, biome notifier, a built-in music player, animated backgrounds, and expressive Material 3 theming.";

export const EXTERNAL = {
  appRepo: "https://github.com/MaxxWasHere/Blossom",
  siteRepo: "https://github.com/MaxxWasHere/blossom-web",
  releases: "https://github.com/MaxxWasHere/Blossom/releases/latest",
  discord: "https://discord.gg/tv5T9uh2Ef",
  discordDevPortal: "https://discord.com/developers/applications",
  tesseract: "https://github.com/tesseract-ocr/tesseract/releases/latest",
  tutorialWindows: "https://youtu.be/dZzQytUMlCE",
  tutorialMac: "https://youtu.be/AcdfAbaegYE",
  license: "https://www.apache.org/licenses/LICENSE-2.0",
} as const;

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
  wip?: boolean;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Discover",
    items: [
      { label: "Home", href: "/", icon: Home, description: "Overview and quick links" },
      { label: "Features", href: "/features", icon: Sparkles, description: "Everything Blossom does" },
      { label: "Showcase", href: "/showcase", icon: Monitor, description: "Preview the app and themes" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Changelog", href: "/changelog", icon: ScrollText, description: "Release notes" },
      { label: "Download", href: "/download", icon: Download, description: "Get the bootstrapper" },
      { label: "FAQ", href: "/faq", icon: HelpCircle, description: "Setup and troubleshooting" },
    ],
  },
];

export const ALL_NAV_ITEMS: NavItem[] = NAV_GROUPS.flatMap((g) => g.items);
