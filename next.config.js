const widthPlugins = require('next-compose-plugins');
const withLess = require('next-with-less');

module.exports = widthPlugins([withLess], {
  reactStrictMode: true,
  esModule: true,

  compiler: {
    styledComponents: true
  },
  lessLoaderOptions: {
    lessOptions: {
      includePaths: ['./components'],
      javascriptEnabled: true
    }
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  output: {
    publicPath: '/'
  },

  webpack(config) {
    return config;
  }
});
