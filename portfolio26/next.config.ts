import type { NextConfig } from "next";

// Set by the GitHub Actions workflow only — not present on Vercel
const isGitHubPages = process.env.EXPORT_FOR_PAGES === "true";

const nextConfig: NextConfig = {
  // Static export only for GitHub Pages; Vercel uses native Next.js support
  ...(isGitHubPages && { output: "export" }),

  // basePath is set by GH Pages CI; empty string on Vercel (no basePath)
  basePath: process.env.PAGES_BASE_PATH || "",

  // Disable Next.js image optimization (required for static hosts, harmless on Vercel)
  images: { unoptimized: true },

  // Helps static hosts resolve routes correctly
  trailingSlash: true,
};

export default nextConfig;
