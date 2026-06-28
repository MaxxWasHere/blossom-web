import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardBody, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { MockAppWindow } from "@/components/mock-app-window";
import { ThemeGrid } from "@/components/theme-grid";
import { CtaBand } from "@/components/cta-band";
import { Palette, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Preview the Blossom app window and switch between all eight built-in themes live: Pink, Sakura, Midnight, OLED, Forest, Light, Dark, and System.",
};

export default function ShowcasePage() {
  return (
    <>
      <div className="blsm-page">
        <PageHeader
          eyebrow="Showcase"
          title="Preview Blossom in any theme"
          description="This is a static mock of the app's Macro Status page, rendered with the same Material 3 tokens, fonts, and app-shell components as the real Blossom. Pick a theme and the whole window updates instantly."
        />

        <Card style={{ marginBottom: 22 }}>
          <CardHeader>
            <CardIcon>
              <Palette size={18} />
            </CardIcon>
            <CardTitle>Theme</CardTitle>
          </CardHeader>
          <CardBody>
            <ThemeGrid />
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 14,
                marginBottom: 0,
                fontSize: 12.5,
                color: "var(--text-muted)",
              }}
            >
              <Info size={14} /> Your choice is saved to this browser and applies to the whole site.
            </p>
          </CardBody>
        </Card>

        <h2 className="m3-headline" style={{ margin: "0 0 12px", fontSize: "1.3rem" }}>
          Macro Status
        </h2>
        <div className="blsm-showcase-teaser" style={{ marginBottom: 0 }}>
          <MockAppWindow />
        </div>

        <p
          style={{
            marginTop: 14,
            marginBottom: 0,
            fontSize: 12.5,
            color: "var(--text-muted)",
          }}
        >
          The real app adds Fishing, Merchant, Schedule, Calibrations, Appearance, Music, and Settings
          tabs, plus a command palette and update toasts.
        </p>
      </div>
      <CtaBand
        title="Try it for real"
        sub="The mock shows the look. Download the bootstrapper to run the full app on Windows."
      />
    </>
  );
}
