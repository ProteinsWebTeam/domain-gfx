const path = require('path');
const fs = require('fs');

const filesize = require('filesize');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const chalk = require('chalk');

let cache;
const distFolder = 'dist';

if (!fs.existsSync(distFolder)) {
  fs.mkdirSync(distFolder);
}

const configs = [
  [
    {
      entry: path.resolve('src', 'index.js'),
      cache,
      plugins: [
        nodeResolve(),
        babel({
          presets: [
            'babili',
            'es2015-rollup',
            'es2016',
            'es2017',
            'stage-2',
          ]
        }),
      ]
    },
    path.resolve(distFolder, 'domain_gfx.es5.js'),
  ],
  [
    {
      entry: path.resolve('src', 'index.js'),
      cache,
      plugins: [
        nodeResolve(),
        babel({
          presets: [
            'babili',
            'es2016',
            'es2017',
            'stage-2',
          ]
        }),
      ]
    },
    path.resolve(distFolder, 'domain_gfx.es2015.js'),
  ],
];

(async () => {
  for (const [config, dest] of configs) {
    const bundle = await rollup.rollup(config);

    cache = bundle;

    await bundle.write({
      format: 'iife',
      moduleName: 'DomainGfx',
      sourceMap: true,
      dest
    });

    console.log(
      chalk.green(`compiled to ${dest} (${filesize(fs.statSync(dest).size)})`)
    );
  }

  console.log(chalk.green.bold('success ✔'));
})();
