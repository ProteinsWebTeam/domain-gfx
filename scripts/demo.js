const fs = require('fs');
const path = require('path');

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const chalk = require('chalk');

const copy = (src, dest) => fs.createReadStream(src)
  .pipe(fs.createWriteStream(dest));

(async () => {
  try {
    copy(
      path.resolve('node_modules', 'codemirror', 'lib', 'codemirror.js'),
      path.resolve('demo', 'codemirror.js')
    );
    copy(
      path.resolve('node_modules', 'codemirror', 'lib', 'codemirror.css'),
      path.resolve('demo', 'codemirror.css')
    );
    copy(
      path.resolve(
        'node_modules', 'codemirror', 'mode', 'javascript', 'javascript.js'
      ),
      path.resolve('demo', 'cm-mode-javascript.js')
    );
    const bundle = await rollup.rollup({
      entry: path.resolve('demo', 'index.js'),
      plugins: [
        babel({
          presets: ['stage-2'],
          plugins: ['external-helpers'],
        }),
        nodeResolve({
          module: true,
          jsnext: true,
          main: true,
          browser: true,
        })
      ],
    });
    await bundle.write({
      format: 'iife',
      sourceMap: true,
      dest: path.resolve('demo', 'bundle.js'),
    });
    console.log(chalk.green.bold('success ✔'));
  } catch (err) {
    console.error(chalk.red.bold('failing ✘'));
    console.error(err);
  }
})();
