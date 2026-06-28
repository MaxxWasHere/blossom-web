import { Download, ArrowRight } from "lucide-react";
import { AuroraBackground } from "./aurora-background";
import { EXTERNAL } from "@/lib/site";

/**
 * Reusable closing CTA band for marketing pages: a heading, a short line, and
 * Download for Windows + View on GitHub buttons over an aurora glow.
 */
export function CtaBand({
  title = "Download Blossom",
  sub = "Free and open source under Apache 2.0. Grab the bootstrapper and it stays current on its own.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="blsm-cta-section">
      <div className="blsm-container">
        <div className="blsm-cta-band blsm-reveal">
          <AuroraBackground />
          <div className="blsm-cta-band-inner">
            <h2 className="m3-headline blsm-cta-title">{title}</h2>
            <p className="blsm-cta-sub">{sub}</p>
            <div className="blsm-cta-row">
              <a
                className="btn btn-accent blsm-hero-cta-primary"
                href={EXTERNAL.releases}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Download size={18} /> Download for Windows
              </a>
              <a
                className="btn btn-secondary"
                href={EXTERNAL.appRepo}
                target="_blank"
                rel="noreferrer noopener"
              >
                View on GitHub <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
