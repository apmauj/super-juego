import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "export" generates static HTML/CSS/JS — compatible with GitHub Pages
  // No backend/server required — the entire game runs client-side
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
