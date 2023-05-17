/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pombal-store-api.onrender.com",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
};

module.exports = nextConfig;
