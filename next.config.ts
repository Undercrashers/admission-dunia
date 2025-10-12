import type { NextConfig } from "next";


// Images from placehold.co are allowed for Next.js <Image> optimization
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
  // For Jest/React Testing Library, see jest.config.js for test setup
};

export default nextConfig;
