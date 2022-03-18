const { defineConfig } = require('@vue/cli-service');

const isProduction = process.env.NODE_ENV === 'production';
const isPartialView = process.env.PARTIAL_VIEW === 'true';

const fileName = isProduction && !isPartialView ? 'js/[name].[contenthash:8].js' : 'js/[name].js';
const chunkFilename = isProduction && !isPartialView ? 'js/[name].[contenthash:8].js' : 'js/[name].js';
const cdnPublicPath = isPartialView ? './dist/thirdparty' : './dist';
const cssFilename = isProduction && !isPartialView ? 'css/[name].[contenthash:8].css' : 'css/[name].css';
const config = defineConfig({
  transpileDependencies: true,
  outputDir: cdnPublicPath,
  filenameHashing: true,
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

if (isPartialView && isProduction) {
  console.log('PartialView');
  config['pages'] = {
    index: {
      entry: './src/headerFooter.js',
      template: './public/index.html',
      filename: 'Index.htm',
    },
  };
}
module.exports = config;
