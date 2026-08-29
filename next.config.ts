import type { NextConfig } from "next";

const repo = "dachkids";
const basePath = process.env.GITHUB_ACTIONS === "true" ? `/${repo}` : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
