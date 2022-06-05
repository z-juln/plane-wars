const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    proxy: {
      // '/api': {
      //   target: '',
      //   pathRewrite: {
      //     '^/api': '/',
      //   },
      //   secure: false,
      //   changeOrigin: true,
      // },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',        
    },
    host: '0.0.0.0',
    port: 'auto',
    allowedHosts: 'all',
    open: {
      app: {
        name: 'Google Chrome',
      },
    },
  },
});
