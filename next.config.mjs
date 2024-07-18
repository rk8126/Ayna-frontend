/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_API_URL: process.env.NEXT_API_URL,
    NEXT_WS_URL: process.env.NEXT_WS_URL
  },
};

export default nextConfig;
