import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://maxxwashere.github.io/blossom-web";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/features", "/showcase", "/changelog", "/download", "/faq"];
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r === "/" ? "/" : r + "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r === "/" ? 1 : 0.7,
  }));
}
