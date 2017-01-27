const fs = require('fs');
const path = require('path');
const process = require('process');

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const watch = require('watch');
const chalk = require('chalk');
const debounce = require('lodash.debounce');
const livereload = require('livereload');

let cache;
let failing = false;
const dest = path.resolve('demo', 'lib.js');

const generateBundle = async () => {
  try {
    const bundle = await rollup.rollup({
      entry: path.resolve('src', 'index.js'),
      cache,
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
    cache = bundle;
    await bundle.write({
      format: 'iife',
      moduleName: 'DomainGfx',
      sourceMap: 'inline',
      dest,
    });
    if (failing) {
      console.log(chalk.green.bold('back to normal ✔'));
      failing = false;
    }
  } catch (err) {
    if (failing) {
      console.error(chalk.red('still failing ✘'));
    } else {
      console.error(chalk.red.bold('now failing ✘'));
    }
    console.error(err);
    failing = true;
  }
};

let build = generateBundle()
  .then(() => console.log(chalk.green('build successful ✔')));

watch.watchTree(path.resolve('src'), debounce(async () => {
  await build;
  build = generateBundle();
}, 1000));

const lrServer = livereload.createServer();
lrServer.watch(path.resolve('demo'));

console.log(chalk.blue(
  `open your browser at file://${path.resolve('demo', 'index.html')}`
));

// Clean-up logic
const cleanup = (code = 0, err) => {
  try {
    fs.unlinkSync(dest);
    if (err) throw err;
    process.exit(code);
    return;
  } catch (_) {}
  if (err) console.error(err);
  process.exit(1);
};

// Listen to possible program ends
// Clean close
process.on('exit', () => cleanup(0));

// Caught a ctrl+c event
process.on('SIGINT', () => cleanup(0));

// Something bad happened
process.on('uncaughtException', err => cleanup(1, err));
