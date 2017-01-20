const fs = require('fs');
const path = require('path');
const process = require('process');

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const watch = require('watch');
const debounce = require('lodash.debounce');
const livereload = require('livereload');

let cache;
const dest = path.resolve('demo', 'lib.js');

const generateBundle = async () => {
  const bundle = await rollup.rollup({
    entry: path.resolve('src', 'index.js'),
    cache,
    plugins: [
      babel({
        presets: [
          'stage-2',
        ],
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
    sourceMap: true,
    dest,
  });
};

let build = generateBundle();

watch.watchTree(path.resolve('src'), debounce(async () => {
  await build;
  build = generateBundle();
}, 1000));

const lrServer = livereload.createServer();
lrServer.watch(path.resolve('demo'));

console.log(
  `open your browser at file://${path.resolve('demo', 'index.html')}`
);

// Clean-up logic
const cleanup = (code = 0, err) => {
  try {
    fs.unlinkSync(dest);
    fs.unlinkSync(`${dest}.map`);
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
