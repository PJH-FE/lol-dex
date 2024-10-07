/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        pathname: '/**'
      }
    ],
    domains: ['ddragon.leagueoflegends.com'],
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
