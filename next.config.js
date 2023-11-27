/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  // rewrites() {
  // 如果这里开启， 代表 所有 /api/ 后的url ， proxy 到 localhost:11111/后面, 看你情况要不要
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://localhost:11111/:path*",
  //     },
  //   ];
  // },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
