import Link from "next/link";
import Image from "next/image";
import { Code, MessageCircle, Video, ScanText, Wrench } from "lucide-react";
import { APP_VERSION, EXTERNAL, NAV_GROUPS, SITE_NAME, TAGLINE } from "@/lib/site";
import { withBasePath } from "@/lib/utils";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-sidebar)",
        marginTop: 48,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "40px 24px 28px",
          display: "grid",
          gridTemplateColumns: "minmax(220px, 1.4fr) repeat(3, 1fr)",
          gap: 32,
        }}
        className="footer-grid"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Image
              src={withBasePath("/blossom.png")}
              alt="Blossom logo"
              width={30}
              height={30}
              unoptimized
              style={{ borderRadius: 8, border: "1px solid var(--border-accent)" }}
            />
            <span className="font-display" style={{ fontWeight: 700, fontSize: 17 }}>
              {SITE_NAME}
            </span>
            <span className="version-pill" style={{ fontSize: 11, padding: "2px 8px" }}>
              v{APP_VERSION}
            </span>
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: 13, lineHeight: 1.6, margin: 0, maxWidth: 320 }}>
            {TAGLINE}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 14, marginBottom: 0 }}>
            Open source under the{" "}
            <a href={EXTERNAL.license} target="_blank" rel="noreferrer noopener">
              Apache 2.0 License
            </a>
            .
          </p>
        </div>

        <FooterCol title="Pages">
          {NAV_GROUPS.flatMap((g) => g.items).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </FooterCol>

        <FooterCol title="Resources">
          <a href={EXTERNAL.appRepo} target="_blank" rel="noreferrer noopener">
            <Code size={14} /> App repository
          </a>
          <a href={EXTERNAL.releases} target="_blank" rel="noreferrer noopener">
            <Wrench size={14} /> Latest release
          </a>
          <a href={EXTERNAL.tesseract} target="_blank" rel="noreferrer noopener">
            <ScanText size={14} /> Tesseract OCR
          </a>
          <a href={EXTERNAL.discordDevPortal} target="_blank" rel="noreferrer noopener">
            <Wrench size={14} /> Discord Dev Portal
          </a>
        </FooterCol>

        <FooterCol title="Community">
          <a href={EXTERNAL.discord} target="_blank" rel="noreferrer noopener">
            <MessageCircle size={14} /> Discord support
          </a>
          <a href={EXTERNAL.tutorialWindows} target="_blank" rel="noreferrer noopener">
            <Video size={14} /> Windows setup
          </a>
          <a href={EXTERNAL.tutorialMac} target="_blank" rel="noreferrer noopener">
            <Video size={14} /> macOS setup
          </a>
          <a href={EXTERNAL.siteRepo} target="_blank" rel="noreferrer noopener">
            <Code size={14} /> Site repository
          </a>
        </FooterCol>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "16px 24px",
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "space-between",
          alignItems: "center",
          color: "var(--text-muted)",
          fontSize: 12,
        }}
      >
        <span>
          Blossom is an independent fork of Noteab / Coteab. Not affiliated with or endorsed by Roblox Corporation.
        </span>
        <span>
          Made with Material 3 Expressive &middot; &copy; {new Date().getFullYear()} MaxxWasHere
        </span>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="m3-label" style={{ color: "var(--text-muted)" }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
        {children}
      </div>
    </div>
  );
}
