/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "portfolio";

const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  generateEtags: false,
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );
    config.resolve.modules.push(__dirname);

    return config;
  },
};

module.exports = withPWA({
  nextConfig,
});
