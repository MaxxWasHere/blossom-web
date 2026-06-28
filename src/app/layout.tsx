import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/app-shell";
import { APP_VERSION, DESCRIPTION, SITE_TITLE } from "@/lib/site";
import { THEMES } from "@/lib/themes";
import { withBasePath } from "@/lib/utils";

const SITE_URL = "https://maxxwashere.github.io/blossom-web";
const THEME_IDS = THEMES.map((t) => t.id);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_TITLE} (v${APP_VERSION})`,
    template: "%s - Blossom",
  },
  description: DESCRIPTION,
  applicationName: "Blossom",
  authors: [{ name: "MaxxWasHere", url: "https://github.com/MaxxWasHere" }],
  creator: "MaxxWasHere",
  keywords: [
    "Blossom",
    "Roblox",
    "Roblox macro",
    "SOLS RNG",
    "fishing macro",
    "merchant auto-buy",
    "AutoIt",
    "pywebview",
    "Material 3",
  ],
  openGraph: {
    title: `${SITE_TITLE} (v${APP_VERSION})`,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Blossom",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 512,
        height: 512,
        alt: "Blossom logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${SITE_TITLE} (v${APP_VERSION})`,
    description: DESCRIPTION,
    images: [`${SITE_URL}/og.png`],
  },
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), sizes: "any" },
      { url: withBasePath("/blossom.png"), type: "image/png" },
    ],
    apple: withBasePath("/blossom.png"),
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0a0809",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="pink" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="pink"
          enableSystem
          themes={THEME_IDS}
          disableTransitionOnChange
          storageKey="blossom-web-theme"
        >
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
