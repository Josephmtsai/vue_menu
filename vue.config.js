const { defineConfig } = require('@vue/cli-service');

const fileName = 'js/[name].[contenthash:8].js';
const chunkFilename = 'js/[name].[contenthash:8].js';
const cdnPublicPath = './dist';
const cssFilename = 'css/[name].[contenthash:8].css';
const config = defineConfig({
  transpileDependencies: true,
  outputDir: cdnPublicPath,
  filenameHashing: true,
  productionSourceMap: true,
  configureWebpack: (webpackSetting) => {
    webpackSetting.output = Object.assign(webpackSetting.output, {
      filename: fileName,
      chunkFilename: chunkFilename,
    });
  },
  css: {
    extract: {
      filename: cssFilename,
      chunkFilename: cssFilename,
    },
  },
});

module.exports = config;
