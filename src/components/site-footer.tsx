import Link from "next/link";
import Image from "next/image";
import { Code, MessageCircle, Video, Scale, ExternalLink } from "lucide-react";
import { ALL_NAV_ITEMS, APP_VERSION, EXTERNAL, TAGLINE } from "@/lib/site";
import { withBasePath } from "@/lib/utils";

/**
 * Rich marketing footer: brand blurb + social, nav/resource/project columns,
 * and a bottom bar with copyright, version, license, and the theme list.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="blsm-site-footer">
      <div className="blsm-site-footer-inner">
        <div className="blsm-site-footer-brand">
          <Link href="/" className="blsm-site-footer-brand-mark" aria-label="Blossom home">
            <Image
              src={withBasePath("/blossom.png")}
              alt=""
              width={34}
              height={34}
              unoptimized
            />
            <span className="font-display blsm-site-footer-wordmark">Blossom</span>
          </Link>
          <p className="blsm-site-footer-blurb">{TAGLINE}</p>
          <div className="blsm-site-footer-social">
            <a
              href={EXTERNAL.appRepo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Blossom on GitHub"
            >
              <Code size={16} />
            </a>
            <a
              href={EXTERNAL.discord}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Blossom Discord"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div className="blsm-site-footer-cols">
          <div className="blsm-site-footer-col">
            <div className="blsm-site-footer-col-label">Explore</div>
            {ALL_NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="blsm-site-footer-col">
            <div className="blsm-site-footer-col-label">Resources</div>
            <a href={EXTERNAL.releases} target="_blank" rel="noreferrer noopener">
              Releases <ExternalLink size={11} />
            </a>
            <a href={EXTERNAL.tutorialWindows} target="_blank" rel="noreferrer noopener">
              Windows tutorial <Video size={11} />
            </a>
            <a href={EXTERNAL.tutorialMac} target="_blank" rel="noreferrer noopener">
              macOS tutorial <Video size={11} />
            </a>
            <Link href="/faq">FAQ</Link>
            <Link href="/changelog">Changelog</Link>
          </div>
          <div className="blsm-site-footer-col">
            <div className="blsm-site-footer-col-label">Project</div>
            <a href={EXTERNAL.appRepo} target="_blank" rel="noreferrer noopener">
              MaxxWasHere/Blossom <ExternalLink size={11} />
            </a>
            <a href={EXTERNAL.license} target="_blank" rel="noreferrer noopener">
              Apache 2.0 <Scale size={11} />
            </a>
            <a href={EXTERNAL.discord} target="_blank" rel="noreferrer noopener">
              Discord <MessageCircle size={11} />
            </a>
          </div>
        </div>
      </div>

      <div className="blsm-site-footer-bottom">
        <div className="blsm-site-footer-bottom-inner">
          <span>
            &copy; {year} MaxxWasHere &middot; v{APP_VERSION} stable
          </span>
          <span className="blsm-site-footer-note">
            Apache 2.0 &middot; Independent fork, not affiliated with Roblox. Themes: Pink, Sakura,
            Midnight, OLED, Forest, Light, Dark, System.
          </span>
        </div>
      </div>
    </footer>
  );
}
