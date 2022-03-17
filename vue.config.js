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
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[hash:8].js',
    });
  },
});

if (isPartialView) {
  config['pages'] = {
    partialview: {
      entry: 'src/headerFooter.js',
      template: 'Index.html',
      filename: 'Index.htm',
    },
  };
  config['chainWebpack'] = (config) => {
    config.plugins.delete('pwa');
    config.plugins.delete('workbox');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('precache');
    config.plugins.store.delete('prefetch-partialview'); //offline using
    config.plugins.store.delete('preload-partialview');
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css');
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css',
          },
        ]);
    }
  };
}

module.exports = config;
