const path = require('path');
const fs = require('fs');

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');

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
        babel({
          presets: [
            ['es2015', {loose: true, modules: false}],
            'es2016',
            'es2017',
            'stage-2',
          ]
        }),
      ]
    },
    path.resolve(distFolder, 'domain_gfx.es5.js'),
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
  }
})();
