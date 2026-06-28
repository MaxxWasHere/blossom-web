/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  // Strip the asset prefix's effect on the dev server; only meaningful for the
  // static export at the project-pages URL (e.g. /blossom-web).
  assetPrefix: basePath || undefined,
  // Keep generated HTML/CSS deterministic for a static host.
  reactStrictMode: true,
  // GitHub Pages serves a flat directory tree; no rewrites/redirects needed.
};

export default nextConfig;
