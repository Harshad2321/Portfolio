const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  basePath: isProd ? '/Myself' : '',
  assetPrefix: isProd ? '/Myself/' : '',
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
