import Link from "next/link";
import { Home as HomeIcon, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="blsm-page" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div
          className="font-display blsm-gradient-text"
          style={{ fontSize: "clamp(3rem, 10vw, 5rem)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}
        >
          404
        </div>
        <h1
          className="font-display"
          style={{ fontSize: "1.5rem", fontWeight: 600, margin: "12px 0 8px" }}
        >
          This page drifted off the dock
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.6, margin: "0 0 22px" }}>
          The page you were looking for doesn&apos;t exist or may have moved. Head back to the home page
          or check the changelog for what&apos;s new.
        </p>
        <div style={{ display: "inline-flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
          <Link className="btn btn-accent" href="/">
            <HomeIcon size={16} /> Back home
          </Link>
          <Link className="btn btn-secondary" href="/changelog">
            <ArrowLeft size={16} /> View changelog
          </Link>
        </div>
      </div>
    </div>
  );
}
