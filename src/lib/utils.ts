import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Prefix a root-relative path with the configured basePath (for static export
 *  to a project-pages URL like /blossom-web). Next.js already does this for
 *  next/link, next/image, and metadata, but raw <img>/<a> need it manually. */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
