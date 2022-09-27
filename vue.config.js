const IS_PROD = [ 'production', 'prod' ].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: './',
  indexPath: 'index.html',
  outputDir: process.env.outputDir || 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: !IS_PROD,
  parallel: require('os').cpus().length > 1,
  pwa: {},
  chainWebpack: config => {
    // set worker-loader
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .end();

    // 解决：worker 热更新问题
    config.module.rule('js').exclude.add(/\.worker\.js$/);
  },
  devServer: {
    port: 8900, // 端口
  },
}
