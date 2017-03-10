const path = require('path');
const fs = require('fs');

const filesize = require('filesize');
const rollup = require('rollup');
const rollupBabel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const babel = require('babel-core');
const chalk = require('chalk');

const distFolder = 'dist';

if (!fs.existsSync(distFolder)) {
  fs.mkdirSync(distFolder);
}

const configs = [
  {
    config: {
      entry: path.resolve('src', 'index.js'),
      plugins: [
        nodeResolve(),
        rollupBabel({
          presets: [
            'es2015-rollup',
            'es2016',
            'es2017',
            'stage-2',
          ]
        }),
      ]
    },
    dest: path.resolve(distFolder, 'domain_gfx.es5.js'),
  },
  {
    config: {
      entry: path.resolve('src', 'index.js'),
      plugins: [
        nodeResolve(),
        rollupBabel({
          plugins: ['external-helpers'],
          presets: [
            'es2016',
            'es2017',
            'stage-2',
          ]
        }),
      ]
    },
    dest: path.resolve(distFolder, 'domain_gfx.es2015.js'),
  },
];

Promise.all(configs.map(
  ({config, dest}) => rollup.rollup(config).then(bundle => {
    const rolledUp = bundle.generate({
      format: 'iife',
      moduleName: 'DomainGfx',
      sourceMap: true,
      sourceMapFile: dest,
    });

    const {code, map} = babel.transform(rolledUp.code, {
      inputSourceMap: rolledUp.map,
      presets: ['babili'],
    });

    fs.writeFileSync(dest, `${code}\n//# sourceMappingURL=${dest}.map`);
    fs.writeFileSync(`${dest}.map`, map.toString());

    console.log(
      chalk.green(`compiled to ${dest} (${filesize(fs.statSync(dest).size)})`)
    );
  }))
).then(() => {
  console.log(chalk.green.bold('success ✔'));
}).catch(err => {
  console.error(chalk.red.bold('Something bad happened'));
  console.error(err);
});
