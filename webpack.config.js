/* eslint-env node */
const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg = require(path.resolve(__dirname, 'package.json'));

module.exports = (env = { dev: true }) => ({
  mode: env.dev ? 'development' : 'production',
  entry: path.resolve(
    __dirname,
    env.dev || env.demo ? `${env.dev ? 'dev_' : ''}demo` : 'src',
    `index${env.dev || env.demo ? '' : '.legacy'}.js`
  ),
  output: {
    path: path.resolve(__dirname, env.demo ? 'demo' : 'dist'),
    filename: `${pkg.name}.legacy.js`,
    library: 'DomainGfx',
  },
  plugins: [
    env.dev ? new webpack.HotModuleReplacementPlugin() : null,
    env.dev
      ? new HtmlWebpackPlugin({
          title: pkg.name,
          template: path.join(
            __dirname,
            `${env.dev ? 'dev_' : ''}demo`,
            'index.template.html'
          ),
        })
      : null,
  ].filter(Boolean),
  devtool: env.dev ? 'inline-source-map' : 'source-map',
  devServer: env.dev
    ? {
        overlay: true,
        hot: true,
        port: 8181,
        watchOptions: {
          ignored: /node_modules/,
        },
      }
    : undefined,
  performance: {
    hints: env.production && !env.debug && !env.demo ? 'error' : false,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 versions', '>0.1%'],
                },
                modules: false,
                corejs: 3,
                debug: env.debug,
                useBuiltIns: 'usage',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-object-rest-spread',
          ],
          cacheDirectory: true,
        },
      },
    ],
  },
});
