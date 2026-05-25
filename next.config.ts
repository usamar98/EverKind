import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/#home",
        permanent: false
      },
      {
        source: "/care-services",
        destination: "/#services",
        permanent: false
      },
      {
        source: "/our-approach",
        destination: "/#approach",
        permanent: false
      },
      {
        source: "/families",
        destination: "/#families",
        permanent: false
      },
      {
        source: "/careers",
        destination: "/#careers",
        permanent: false
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
