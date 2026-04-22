import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/tr',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tr/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;