import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          root: "var(--bg-root)",
          sidebar: "var(--bg-sidebar)",
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          "card-hover": "var(--bg-card-hover)",
          input: "var(--bg-input)",
          "input-focus": "var(--bg-input-focus)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          dim: "var(--accent-dim)",
          text: "var(--accent-text)",
          glow: "var(--accent-glow)",
          border: "var(--border-accent)",
        },
        text: {
          DEFAULT: "var(--text-primary)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          "on-accent": "var(--text-on-accent, #ffffff)",
        },
        border: {
          DEFAULT: "var(--border)",
          hover: "var(--border-hover)",
        },
        success: "var(--success)",
        danger: "var(--danger)",
        warning: "var(--warning)",
        surface: "var(--md-sys-color-surface)",
        "on-surface": "var(--md-sys-color-on-surface)",
        "on-surface-variant": "var(--md-sys-color-on-surface-variant)",
        outline: "var(--md-sys-color-outline-variant)",
        primary: {
          DEFAULT: "var(--md-sys-color-primary)",
          container: "var(--md-sys-color-primary-container)",
          "on-container": "var(--md-sys-color-on-primary-container)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        none: "0px",
        xs: "var(--m3-shape-corner-xs)",
        sm: "var(--m3-shape-corner-sm)",
        md: "var(--m3-shape-corner-md)",
        lg: "var(--m3-shape-corner-lg)",
        xl: "var(--m3-shape-corner-xl)",
        full: "var(--m3-shape-corner-full)",
      },
      boxShadow: {
        card: "var(--m3-elevation-1)",
        "card-hover": "var(--m3-elevation-2)",
        elevated: "var(--m3-elevation-3)",
        glow: "var(--shadow-glow)",
      },
      fontSize: {
        "display-sm": ["var(--m3-type-display-sm-size)", { lineHeight: "var(--m3-type-display-sm-line)", letterSpacing: "-0.02em", fontWeight: "400" }],
        "headline-md": ["var(--m3-type-headline-md-size)", { lineHeight: "var(--m3-type-headline-md-line)", letterSpacing: "-0.015em", fontWeight: "500" }],
        "title-md": ["var(--m3-type-title-md-size)", { lineHeight: "var(--m3-type-title-md-line)", fontWeight: "600" }],
        "body-md": ["var(--m3-type-body-md-size)", { lineHeight: "var(--m3-type-body-md-line)" }],
        "label-md": ["var(--m3-type-label-md-size)", { lineHeight: "var(--m3-type-label-md-line)", letterSpacing: "0.04em", fontWeight: "600" }],
      },
      keyframes: {
        "bg-aurora": {
          "0%": { backgroundPosition: "0% 0%, 100% 0%, 50% 100%, 100% 100%" },
          "100%": { backgroundPosition: "30% 60%, 60% 40%, 40% 40%, 40% 60%" },
        },
        "panel-rise": {
          from: { opacity: "0", transform: "translateY(14px) scale(0.99)" },
          to: { opacity: "1", transform: "none" },
        },
        "fade-rise": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "none" },
        },
        "dialog-in": {
          from: { opacity: "0", transform: "scale(0.94) translateY(10px)" },
          to: { opacity: "1", transform: "none" },
        },
        "toast-in": {
          from: { opacity: "0", transform: "translateY(18px) scale(0.96)" },
          to: { opacity: "1", transform: "none" },
        },
        "accent-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--accent-glow)" },
          "50%": { boxShadow: "0 0 18px 2px var(--accent-glow)" },
        },
      },
      animation: {
        "bg-aurora": "var(--blsm-bg-dur, 26s) ease-in-out infinite alternate bg-aurora",
        "panel-rise": "0.46s cubic-bezier(0.05,0.7,0.1,1) both panel-rise",
        "fade-rise": "0.4s cubic-bezier(0.05,0.7,0.1,1) both fade-rise",
        "dialog-in": "0.28s cubic-bezier(0.34,1.56,0.64,1) both dialog-in",
        "toast-in": "0.28s cubic-bezier(0.34,1.56,0.64,1) both toast-in",
        "accent-pulse": "2.4s ease-in-out infinite accent-pulse",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        decel: "cubic-bezier(0.05, 0.7, 0.1, 1)",
        standard: "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
