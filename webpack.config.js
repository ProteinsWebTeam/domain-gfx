/* eslint-env node */
const path = require('path');

const webpack = require('webpack');

const pkg = require(path.resolve(__dirname, 'package.json'));

module.exports = (env = { dev: true }) => {
  const mainConfig = {
    entry: path.resolve(
      __dirname,
      env.dev || env.demo ? `${env.dev ? 'dev_' : ''}demo` : 'src',
      'index.js'
    ),
    output: {
      path: path.resolve(__dirname, env.demo ? 'demo' : 'dist'),
      filename: `${pkg.name}.js`,
      library: 'DomainGfx',
    },
    plugins: [
      env.production ? new webpack.optimize.ModuleConcatenationPlugin() : null,
      env.production
        ? new (require('uglifyjs-webpack-plugin'))({
            parallel: 4,
            uglifyOptions: {
              beautify: env.debug,
              mangle: {
                keep_fnames: env.debug,
              },
              comments: env.debug,
            },
            sourceMap: true,
          })
        : null,
      env.dev ? new webpack.HotModuleReplacementPlugin() : null,
      env.dev || env.demo
        ? new (require('html-webpack-plugin'))({
            title: pkg.name,
            template: path.join(
              __dirname,
              `${env.dev ? 'dev_' : ''}demo`,
              'index.template.html'
            ),
          })
        : null,
    ].filter(Boolean),
    performance: {
      hints: env.production && !env.debug ? 'error' : false,
    },
    devtool: env.dev ? '#inline-source-map' : '#source-map',
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: [path.resolve(__dirname, 'node_modules')],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    'env',
                    {
                      targets: {
                        browsers: ['last 2 versions', '>0.1%'],
                      },
                      modules: false,
                      useBuiltIns: 'usage',
                    },
                  ],
                  'stage-2',
                ],
                cacheDirectory: true,
              },
            },
          ],
        },
        {
          test: /\.json$/i,
          use: [
            {
              loader: 'json-loader',
            },
          ],
        },
      ],
    },
  };
  return [mainConfig];
};
