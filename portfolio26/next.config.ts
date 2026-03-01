import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 1) Make Next build a fully static site into /out
  output: "export", // :contentReference[oaicite:6]{index=6}

  // 2) GitHub Pages project sites are served from /<repo>
  // GitHub Actions will provide this value automatically.
  basePath: process.env.PAGES_BASE_PATH,

  // 3) GitHub Pages can’t run Next’s image optimization server
  images: { unoptimized: true }, // :contentReference[oaicite:7]{index=7}

  // 4) Helps static hosts resolve routes consistently
  trailingSlash: true, // optional but commonly helpful :contentReference[oaicite:8]{index=8}
};

export default nextConfig;
