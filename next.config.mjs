/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "additionalram.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "taha.sener.ai",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig;
