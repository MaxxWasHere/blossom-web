import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Card, CardBody, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { ScrollText, BookOpen, Scale } from "lucide-react";
import { parseChangelog, type InlineToken, type Block } from "@/lib/changelog";
import { APP_VERSION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Blossom release notes, version by version. Newest first. Sourced from the in-app Notice tab.",
};

function renderTokens(tokens: InlineToken[]) {
  return tokens.map((t, i) => {
    if (t.type === "bold") {
      return (
        <strong key={i} style={{ color: "var(--text-primary)", fontWeight: 700 }}>
          {t.value}
        </strong>
      );
    }
    if (t.type === "code") {
      return <code key={i}>{t.value}</code>;
    }
    return <span key={i}>{t.value}</span>;
  });
}

function renderBlock(b: Block) {
  if (b.type === "para") {
    return (
      <p
        style={{
          margin: "6px 0 10px",
          color: "var(--text-secondary)",
          fontSize: 14,
          lineHeight: 1.65,
        }}
      >
        {renderTokens(b.tokens)}
      </p>
    );
  }
  return (
    <div className="cl-bullet">
      <span className="cl-bullet-body">{renderTokens(b.tokens)}</span>
    </div>
  );
}

function versionSlug(version: string) {
  return `v${version.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}`;
}

export default function ChangelogPage() {
  const sections = parseChangelog();
  const versions = sections.filter((s) => s.kind === "version") as Extract<
    (typeof sections)[number],
    { kind: "version" }
  >[];
  const specials = sections.filter((s) => s.kind === "special") as Extract<
    (typeof sections)[number],
    { kind: "special" }
  >[];

  return (
    <div className="blsm-page">
      <PageHeader
        eyebrow="Changelog"
        title="Release notes"
        description={`What changed in Blossom, version by version. The current stable release is v${APP_VERSION}. This page mirrors the in-app Notice tab.`}
      />

      <div className="cl-layout" style={{ display: "grid", gap: 28, alignItems: "start" }}>
        <aside className="cl-nav" aria-label="Versions">
          <div className="m3-label" style={{ color: "var(--text-muted)", marginBottom: 10 }}>
            Versions
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {versions.map((v) => (
              <a
                key={v.version}
                href={`#${versionSlug(v.version)}`}
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  padding: "5px 10px",
                  borderRadius: 8,
                  fontFamily: "var(--font-mono)",
                }}
              >
                {v.version}
              </a>
            ))}
          </div>
        </aside>

        <div className="cl-content">
          {versions.map((v) => (
            <section key={v.version} id={versionSlug(v.version)} className="cl-version" style={{ marginBottom: 34 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 8,
                }}
              >
                <h2
                  className="font-display"
                  style={{ margin: 0, fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.015em" }}
                >
                  Blossom {v.version}
                </h2>
                {v.version === APP_VERSION && (
                  <span className="blsm-pill" style={{ fontSize: 11, padding: "3px 10px" }}>
                    Latest
                  </span>
                )}
              </div>

              {v.groups.map((g, i) => (
                <div key={i}>
                  {g.name && <div className="cl-group-label">{g.name}</div>}
                  <div>
                    {g.blocks.map((b, j) => (
                      <div key={j}>{renderBlock(b)}</div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}

          {specials.map((s) => (
            <Card key={s.slug} id={s.slug} style={{ marginTop: 18, scrollMarginTop: 90 }}>
              <CardHeader>
                <CardIcon>
                  {s.slug.includes("licens") ? <Scale size={18} /> : <BookOpen size={18} />}
                </CardIcon>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardBody>
                {s.groups.map((g, i) => (
                  <div key={i}>
                    {g.name && <div className="cl-group-label">{g.name}</div>}
                    <div>
                      {g.blocks.map((b, j) => (
                        <div key={j}>{renderBlock(b)}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          ))}

          <p style={{ marginTop: 24, marginBottom: 0, color: "var(--text-muted)", fontSize: 12.5 }}>
            <ScrollText size={13} style={{ display: "inline", verticalAlign: "-1px", marginRight: 6 }} />
            Sourced from{" "}
            <code>noticetabcontents.txt</code> in the Blossom app and copied into this site as{" "}
            <code>content/changelog.txt</code>.
          </p>
        </div>
      </div>

      <style>{`
        .cl-layout { grid-template-columns: minmax(160px, 210px) 1fr; }
        .cl-nav { position: sticky; top: 84px; }
        @media (max-width: 760px) {
          .cl-layout { grid-template-columns: 1fr !important; }
          .cl-nav { position: static !important; margin-bottom: 8px; }
        }
      `}</style>
    </div>
  );
}
