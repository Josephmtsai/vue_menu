const { defineConfig } = require('@vue/cli-service');
const isProduction = process.env.NODE_ENV === 'production';
const isPartialView = process.env.PARTIAL_VIEW;
console.log();
const fileName = isProduction && !isPartialView ? 'js/[name].[hash:8].js' : 'js/[name].js';
const chunkFilename = isProduction && !isPartialView ? 'js/[name].[hash:8].js' : 'js/[name].js';
const cdnPublicPath = isPartialView ? './dist/thirdparty' : './dist';
const config = defineConfig({
  transpileDependencies: true,
  outputDir: cdnPublicPath,
  filenameHashing: true,
  configureWebpack: (config) => {
    config.output = Object.assign(config.output, {
      filename: fileName,
      chunkFilename: chunkFilename,
    });
  },
});

if (isPartialView && isProduction) {
  config['pages'] = {
    partialview: {
      entry: 'src/main.js',
      template: './public/index.html',
      filename: 'Index.htm',
    },
  };
}

module.exports = config;
