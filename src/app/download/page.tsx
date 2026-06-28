import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Card, CardBody, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import {
  Download,
  Monitor,
  ScanText,
  Video,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  FlaskConical,
} from "lucide-react";
import { APP_VERSION, EXTERNAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download the Blossom bootstrapper for Windows. Stable and beta tracks, system requirements, setup tutorials, and the Tesseract OCR note for the Biome Selector.",
};

const REQ = [
  "Windows 10 or 11 (the macro is Windows-only, built on AutoIt + pywebview).",
  "Roblox installed and logged in, with your private server link saved in Misc.",
  "Calibrated points for the features you want to use (Fishing, Merchant, Reconnect, ...).",
  "For the Biome Selector OCR: Tesseract OCR and the Arial font for best accuracy.",
];

export default function DownloadPage() {
  return (
    <div className="blsm-page">
      <PageHeader
        eyebrow="Download"
        title="Get Blossom"
        description={`The current stable release is v${APP_VERSION}. Blossom ships as a small bootstrapper that syncs to the newest release for its channel on every start, so one shortcut stays current on its own.`}
      />

      {/* Primary CTA */}
      <Card style={{ marginBottom: 18 }}>
        <CardBody>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ minWidth: 240, flex: 1 }}>
              <div className="blsm-eyebrow" style={{ marginBottom: 8 }}>
                Stable channel
              </div>
              <h2
                className="font-display"
                style={{ margin: "0 0 8px", fontSize: "1.5rem", fontWeight: 600 }}
              >
                Download the bootstrapper
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6, margin: 0, maxWidth: 520 }}>
                Grab <code>Blossom.exe</code> from the latest GitHub release. On first run it pulls the
                runtime components it needs (OpenCV, WinOCR), then launches the app.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              <a
                className="btn btn-accent"
                href={EXTERNAL.releases}
                target="_blank"
                rel="noreferrer noopener"
                style={{ minHeight: 48, padding: "12px 22px", fontSize: 15 }}
              >
                <Download size={18} /> Download for Windows
              </a>
              <a
                href={EXTERNAL.appRepo}
                target="_blank"
                rel="noreferrer noopener"
                style={{ fontSize: 12.5, color: "var(--text-muted)" }}
              >
                View releases on GitHub <ArrowRight size={12} style={{ display: "inline", verticalAlign: "-1px" }} />
              </a>
            </div>
          </div>
        </CardBody>
      </Card>

      <div
        className="dl-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 14,
          marginBottom: 18,
        }}
      >
        {/* Tracks */}
        <Card>
          <CardHeader>
            <CardIcon>
              <RefreshCw size={18} />
            </CardIcon>
            <CardTitle>Stable vs beta</CardTitle>
          </CardHeader>
          <CardBody>
            <p>
              Stable and beta builds stay on separate tracks. The stable bootstrapper{" "}
              (<code>Blossom.exe</code>) only offers stable releases; the beta bootstrapper{" "}
              (<code>Blossom-beta.exe</code>) only offers beta releases. Keep one shortcut and it stays
              current on its own, including deliberate rollbacks.
            </p>
          </CardBody>
        </Card>

        {/* Tesseract */}
        <Card>
          <CardHeader>
            <CardIcon>
              <ScanText size={18} />
            </CardIcon>
            <CardTitle>Tesseract OCR</CardTitle>
          </CardHeader>
          <CardBody>
            <p>
              Some features (the Biome Selector OCR) need{" "}
              <a href={EXTERNAL.tesseract} target="_blank" rel="noreferrer noopener">
                Tesseract OCR
              </a>{" "}
              and the <strong>Arial</strong> font installed for the best accuracy. Other OCR-based
              features use the built-in Windows OCR engine.
            </p>
          </CardBody>
        </Card>
      </div>

      {/* System requirements */}
      <Card style={{ marginBottom: 18 }}>
        <CardHeader>
          <CardIcon>
            <Monitor size={18} />
          </CardIcon>
          <CardTitle>System requirements</CardTitle>
        </CardHeader>
        <CardBody>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {REQ.map((r) => (
              <li key={r} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.55 }}>
                <CheckCircle2 size={16} style={{ color: "var(--success)", flexShrink: 0, marginTop: 3 }} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 14,
              marginBottom: 0,
              fontSize: 12.5,
              color: "var(--warning)",
            }}
          >
            <AlertTriangle size={14} /> Blossom is Windows-only. A macOS setup tutorial exists for a
            related workflow, but the macro itself runs on Windows.
          </p>
        </CardBody>
      </Card>

      {/* Tutorials */}
      <Card>
        <CardHeader>
          <CardIcon>
            <Video size={18} />
          </CardIcon>
          <CardTitle>Setup tutorials</CardTitle>
        </CardHeader>
        <CardBody>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            <TutorialCard
              href={EXTERNAL.tutorialWindows}
              title="Windows setup"
              desc="Install the bootstrapper, run the first-time setup, and calibrate the basics."
            />
            <TutorialCard
              href={EXTERNAL.tutorialMac}
              title="macOS setup"
              desc="A related workflow tutorial for macOS users."
            />
          </div>
          <p style={{ marginTop: 14, marginBottom: 0, fontSize: 13, color: "var(--text-muted)" }}>
            Need a hand? Ask in the{" "}
            <a href={EXTERNAL.discord} target="_blank" rel="noreferrer noopener">
              Blossom Discord
            </a>{" "}
            or check the{" "}
            <Link href="/faq">FAQ</Link>.
          </p>
        </CardBody>
      </Card>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 18,
          padding: "12px 16px",
          borderRadius: "var(--m3-shape-corner-md)",
          border: "1px solid var(--border)",
          background: "var(--bg-input)",
          fontSize: 13,
          color: "var(--text-secondary)",
        }}
      >
        <FlaskConical size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
        <span style={{ margin: 0 }}>
          The Macro Schedule and Biome Selector OCR are works in progress. They may not run correctly
          yet; profiles and timeline editing are preview-only until they stabilize.
        </span>
      </div>
    </div>
  );
}

function TutorialCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="blsm-card blsm-card-hover"
      style={{ textDecoration: "none", padding: 14, display: "block" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <Video size={16} style={{ color: "var(--accent)" }} />
        <span className="font-display" style={{ fontWeight: 600, color: "var(--text-primary)" }}>
          {title}
        </span>
        <ArrowRight size={14} style={{ marginLeft: "auto", color: "var(--text-muted)" }} />
      </div>
      <p style={{ margin: 0, fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{desc}</p>
    </a>
  );
}
