/* eslint-env node */
const path = require('path');

const webpack = require('webpack');

const pkg = require(path.resolve(__dirname, 'package.json'));

module.exports = (env = { dev: true }) => {
  const legacyConfig = {
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
      env.production ? new webpack.optimize.ModuleConcatenationPlugin() : null,
      env.production || env.demo
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
      hints: env.production && !env.debug && !env.demo ? 'error' : false,
    },
    devtool: env.dev ? '#inline-source-map' : '#source-map',
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js$/i,
          // exclude: [path.resolve(__dirname, 'node_modules')],
          exclude: [path.resolve(__dirname, 'node_modules', 'core-js')],
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
                      debug: env.debug,
                      // TODO: check if can switch from false to 'usage' with
                      // next version of Babel
                      useBuiltIns: false,
                    },
                  ],
                ],
                plugins: [
                  'transform-class-properties',
                  'transform-object-rest-spread',
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
  if (env.dev) {
    legacyConfig.devServer = {
      host: '0.0.0.0',
    };
  }

  if (env.production && !env.demo) {
    const modernConfig = {
      ...legacyConfig,
      output: {
        ...legacyConfig.output,
        filename: `${pkg.name}.js`,
      },
      entry: path.resolve(__dirname, 'src', 'index.js'),
    };

    return [modernConfig, legacyConfig];
  }

  return legacyConfig;
};
