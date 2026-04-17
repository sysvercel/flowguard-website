import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/demo",
        destination: "/how-it-works",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
