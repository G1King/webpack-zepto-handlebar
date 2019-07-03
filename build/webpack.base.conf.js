'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const fs = require('fs')
const webpack = require('webpack')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  exclude: [resolve('src/zepto/zepto.min.js')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})
const prefix = './src/entries/'
let jsFiles = fs.readdirSync(path.resolve(__dirname, '../src/entries'))
  .filter(function (cv) {
    return cv.endsWith('.js')
  })
let entries = {}
jsFiles.map(function (cv) {
  const name = cv.split('.')[0]
  entries[name] = prefix + cv
  return cv
})
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.hbs', '.json'],
    alias: {
      '@': resolve('src'),
      '@c': resolve('src/components')
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader?helperDirs[]=' + resolve('src/helpers/handlebarsHelps.js')
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src/common'), resolve('src/entries'), resolve('src/helpers'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]

    // loaders: [{
    //   test: resolve('common/lib/zepto.min'),
    //   loader: 'exports-loader?window.Zepto!script-loader'
    // }]

  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: resolve('common/lib/zepto.min'),
      Zepto: resolve('common/lib/zepto.min')
    })
  ]
}
