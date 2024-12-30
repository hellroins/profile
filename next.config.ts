import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  assetPrefix: "./",
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
