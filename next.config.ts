import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // Outputs to the /out folder
  images: {
    unoptimized: true,   // Required for static exports as Next.js Image Optimization needs a server
  },
};

export default nextConfig;
