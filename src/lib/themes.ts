export type ThemeMeta = {
  id: string;
  label: string;
  /** Swatch dot: accent color */
  accent: string;
  /** Swatch dot: surface color */
  surface: string;
  /** Short description for the showcase */
  blurb: string;
};

export const THEMES: ThemeMeta[] = [
  { id: "pink", label: "Pink", accent: "#e891a8", surface: "#0a0809", blurb: "Stock Blossom - rose on near-black." },
  { id: "sakura", label: "Sakura", accent: "#7b5455", surface: "#fff8f7", blurb: "M3 Expressive light rose." },
  { id: "midnight", label: "Midnight", accent: "#ecbaba", surface: "#161012", blurb: "Deep rose-black, soft pink." },
  { id: "oled", label: "OLED", accent: "#f2a3b9", surface: "#000000", blurb: "True black for AMOLED panels." },
  { id: "forest", label: "Forest", accent: "#4cbd87", surface: "#090e0a", blurb: "Mossy dark green, emerald accent." },
  { id: "light", label: "Light", accent: "#db2777", surface: "#f4f4f5", blurb: "Clean light with a rose accent." },
  { id: "dark", label: "Dark", accent: "#a1a1aa", surface: "#0c0c0f", blurb: "Neutral zinc dark." },
  { id: "system", label: "System", accent: "#e891a8", surface: "#111114", blurb: "Follows your OS setting." },
];

export const DEFAULT_THEME = "pink";
