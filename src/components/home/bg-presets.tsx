"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Card, CardBody, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";

const PRESETS = [
  { id: "aurora", label: "Aurora" },
  { id: "mesh", label: "Mesh" },
  { id: "stars", label: "Stars" },
  { id: "bubbles", label: "Bubbles" },
] as const;

const STARS = [
  { x: "18%", y: "22%", d: "0s" },
  { x: "42%", y: "14%", d: "0.4s" },
  { x: "68%", y: "30%", d: "0.8s" },
  { x: "84%", y: "18%", d: "1.2s" },
  { x: "30%", y: "52%", d: "1.6s" },
  { x: "58%", y: "60%", d: "2s" },
  { x: "78%", y: "48%", d: "0.6s" },
];

const BUBBLES = [
  { x: "20%", y: "10%", s: 10, d: "0s" },
  { x: "45%", y: "6%", s: 14, d: "0.5s" },
  { x: "68%", y: "14%", s: 8, d: "1s" },
  { x: "32%", y: "4%", s: 6, d: "1.5s" },
  { x: "82%", y: "8%", s: 12, d: "0.3s" },
];

/** Live animated-background preset selector: four small live thumbnails
 *  (Aurora/Mesh/Stars/Bubbles) with a selectable highlight. The thumbnails
 *  themselves are the live preview. */
export function BgPresets() {
  const [active, setActive] = useState<string>("aurora");

  return (
    <Card hover className="blsm-widget blsm-bgpresets">
      <CardHeader>
        <CardIcon>
          <Sparkles size={18} />
        </CardIcon>
        <CardTitle>Animated background</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="blsm-bg-thumb-row">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`blsm-bg-thumb${active === p.id ? " is-active" : ""}`}
              onClick={() => setActive(p.id)}
              aria-pressed={active === p.id}
              aria-label={`${p.label} background preset`}
            >
              <span className="blsm-bg-thumb-bg">{renderPreset(p.id)}</span>
              <span className="blsm-bg-thumb-label">{p.label}</span>
            </button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

function renderPreset(id: string) {
  switch (id) {
    case "aurora":
      return <div className="blsm-aurora" style={{ position: "absolute", inset: 0 }} />;
    case "mesh":
      return (
        <div className="blsm-bg-mesh">
          <span
            className="blsm-mesh-blob"
            style={{ background: "var(--accent)", top: "-12%", left: "-12%", animation: "blsm-blob-a 7s ease-in-out infinite" }}
          />
          <span
            className="blsm-mesh-blob"
            style={{ background: "#6d8bff", bottom: "-16%", right: "-12%", animation: "blsm-blob-b 9s ease-in-out infinite" }}
          />
        </div>
      );
    case "stars":
      return (
        <div className="blsm-bg-stars">
          {STARS.map((s, i) => (
            <span key={i} style={{ left: s.x, top: s.y, animationDelay: s.d }} />
          ))}
        </div>
      );
    case "bubbles":
      return (
        <div className="blsm-bg-bubbles">
          {BUBBLES.map((b, i) => (
            <span key={i} style={{ left: b.x, bottom: b.y, width: b.s, height: b.s, animationDelay: b.d }} />
          ))}
        </div>
      );
    default:
      return null;
  }
}
