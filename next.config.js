const Dotenv = require("dotenv-webpack");

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new Dotenv({ silent: true }));
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
}
