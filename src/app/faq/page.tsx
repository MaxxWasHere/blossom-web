import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { AccordionItem } from "@/components/ui/accordion";
import { EXTERNAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Blossom FAQ: getting started, calibration and OCR, troubleshooting (Auto Eden, reconnect, idle macro), updates, and licensing under Apache 2.0.",
};

type QA = { q: string; a: React.ReactNode };

const GROUPS: { label: string; items: QA[] }[] = [
  {
    label: "Getting started",
    items: [
      {
        q: "What is Blossom?",
        a: (
          <p>
            Blossom is an open-source Roblox macro and an independent fork of Noteab / Coteab,
            maintained separately with its own UI and features. It automates gameplay like fishing,
            merchant shopping, and buff popping, inside a Material 3 Expressive desktop app.
          </p>
        ),
      },
      {
        q: "Is it free?",
        a: (
          <p>
            Yes. Blossom is free and open source under the{" "}
            <a href={EXTERNAL.license} target="_blank" rel="noreferrer noopener">
              Apache 2.0 License
            </a>
            . You can use, modify, and share it as long as you keep the license and attribution.
          </p>
        ),
      },
      {
        q: "How do I install it?",
        a: (
          <p>
            Download the bootstrapper from the{" "}
            <a href={EXTERNAL.releases} target="_blank" rel="noreferrer noopener">
              latest GitHub release
            </a>{" "}
            and run it. On first run it pulls the runtime components it needs (OpenCV, WinOCR), then
            launches the app and walks you through a first-time setup that covers calibration and the
            automation modes. See the{" "}
            <Link href="/download">Download page</Link> for tutorial links.
          </p>
        ),
      },
      {
        q: "What are the system requirements?",
        a: (
          <p>
            Windows 10 or 11 (the macro is Windows-only, built on AutoIt + pywebview), Roblox installed
            and logged in with your private server link saved in Misc, and calibrated points for the
            features you want to use. The Biome Selector OCR additionally needs Tesseract OCR and the
            Arial font for best accuracy.
          </p>
        ),
      },
    ],
  },
  {
    label: "Calibration & OCR",
    items: [
      {
        q: "How do I calibrate Blossom?",
        a: (
          <p>
            Open the Calibrations tab and use the Mark buttons for each point you need (Fishing,
            Merchant, Reconnect Start, and so on). Every Mark saves to your Blossom config and the
            macro reads the updated points on the next tick without restarting. Flow banners guide
            each step in the unified Calibrations hub.
          </p>
        ),
      },
      {
        q: "When do I need Tesseract OCR?",
        a: (
          <p>
            The Biome Selector OCR uses{" "}
            <a href={EXTERNAL.tesseract} target="_blank" rel="noreferrer noopener">
              Tesseract OCR
            </a>{" "}
            and expects the Arial font for the best accuracy. Other OCR-based features use the
            built-in Windows OCR engine, so you do not need Tesseract for those.
          </p>
        ),
      },
      {
        q: "Why is the Biome Selector marked WIP?",
        a: (
          <p>
            The Biome Selector&apos;s OCR engine is still being tuned, so it is labeled as a work in
            progress. Biome detection and Discord webhook pings work, but the selector itself may not
            be reliable yet.
          </p>
        ),
      },
    ],
  },
  {
    label: "Troubleshooting",
    items: [
      {
        q: "The macro is idle or not fishing. What do I check?",
        a: (
          <p>
            Confirm Fishing Mode is on and your Fishing calibrations are set. If you are stuck at the
            dock with no bite for 60 seconds, enable Auto Reconnect and Fishing failsafe rejoin in Misc
            so Blossom retries the in-game UI path and then reconnects. If Fishing Mode and Auto Potion
            Craft are both on and nothing runs, that combination was fixed in 2.3.0, so update to the
            latest stable release. Session logs live under <code>%LOCALAPPDATA%\Blossom\logs\</code>.
          </p>
        ),
      },
      {
        q: "Reconnect isn&apos;t working. What now?",
        a: (
          <p>
            Calibrate the Reconnect Start button under Movements and set your Private Server link in
            Misc. On a disconnect, Blossom terminates the client, joins your private server, clicks
            Reconnect Start, and verifies you are in-game from the Roblox logs. If it still fails, copy
            the last ~300 log lines from Settings &amp; extras &rarr; Logs &amp; diagnostics and share
            them in the Discord support channel.
          </p>
        ),
      },
      {
        q: "What is Auto Eden?",
        a: (
          <p>
            Auto Eden is an automation mode for the Eden area. It uses its own entry alignment, so it is
            excluded from the shared character-align step that other recorded paths run. Configure it
            under its own macro tab and calibrate the points it asks for. For step-by-step help, ask in
            the{" "}
            <a href={EXTERNAL.discord} target="_blank" rel="noreferrer noopener">
              Blossom Discord
            </a>
            .
          </p>
        ),
      },
      {
        q: "Where do I get help?",
        a: (
          <p>
            The fastest path is the{" "}
            <a href={EXTERNAL.discord} target="_blank" rel="noreferrer noopener">
              Blossom Discord support channel
            </a>
            . For bugs, include the last ~300 lines from Settings &amp; extras &rarr; Logs &amp;
            diagnostics. You can also file issues on the{" "}
            <a href={EXTERNAL.appRepo} target="_blank" rel="noreferrer noopener">
              app repository
            </a>
            .
          </p>
        ),
      },
    ],
  },
  {
    label: "Updates & licensing",
    items: [
      {
        q: "How do updates work?",
        a: (
          <p>
            The bootstrapper syncs to the newest release for its channel on every start, including a
            deliberate rollback, rather than only upgrading when the number goes up. Stable and beta
            builds stay on separate tracks, so keep one shortcut and it stays current on its own.
          </p>
        ),
      },
      {
        q: "What license is Blossom under?",
        a: (
          <p>
            Apache 2.0. You may use, modify, and share the code if you ship the license with
            distributions, note which files you changed, and keep the existing copyright and NOTICE text.
          </p>
        ),
      },
      {
        q: "Can I modify and redistribute it?",
        a: (
          <p>
            Yes, under the Apache 2.0 terms. Keep the license and attribution, state that you modified
            the project, and note which files changed. See the{" "}
            <Link href="/changelog#licensing-apache-2-0">Licensing section</Link> of the changelog for
            the short version.
          </p>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="blsm-page">
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Getting started, calibration and OCR, troubleshooting, and licensing. If your question isn't here, the Discord support channel is the fastest way to get help."
      />

      {GROUPS.map((group) => (
        <section key={group.label} style={{ marginBottom: 28 }}>
          <h2
            className="m3-headline"
            style={{ margin: "0 0 12px", fontSize: "1.3rem" }}
          >
            {group.label}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {group.items.map((item, i) => (
              <AccordionItem key={i} question={item.q}>
                {item.a}
              </AccordionItem>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
