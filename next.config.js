/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Advanced compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  
  // Bundle optimization
  webpack: (config, { dev, isServer }) => {
    // Optional bundle analyzer (only if installed)
    if (dev && !isServer) {
      try {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsFilename: 'bundle-stats.json',
          })
        )
      } catch (e) {
        // Bundle analyzer not installed, skip
      }
    }
    
    // Optimize for production
    if (!dev) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        antd: {
          name: 'antd',
          test: /[\\/]node_modules[\\/](antd|@ant-design)[\\/]/,
          chunks: 'all',
          priority: 20,
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
      }
    }
    
    return config
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  
  // Performance settings
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  
  // External packages for server components
  serverExternalPackages: [],
  
  // Experimental features for cutting-edge performance
  experimental: {
    optimizePackageImports: ['antd', '@ant-design/icons'],
  },
}

module.exports = nextConfig