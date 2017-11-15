import '../src/polyfills';

import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

import DomainGfx from '../src/index.js';
import debounce from 'lodash-es/debounce';

import data from './data.json';

const textArea = document.querySelector('.data textarea');
const visu = document.querySelector('.visu');
const invalid = document.querySelector('.invalid');

// Domain graphics
let dg;

// Render function
const updateView = cm => {
  const text = cm.getValue();
  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    invalid.classList.remove('hidden');
    // eslint-disable-next-line no-console
    console.error(err);
    return;
  }
  if (dg) {
    dg.data = data;
  } else {
    dg = new DomainGfx({ parent: visu, data });
  }
  invalid.classList.add('hidden');
};

// CodeMirror logic
textArea.value = JSON.stringify(data, null, 2);
const cm = CodeMirror.fromTextArea(textArea, { lineNumbers: true });
cm.on('change', debounce(updateView, 1000));

// Kicks off first render
updateView(cm);
