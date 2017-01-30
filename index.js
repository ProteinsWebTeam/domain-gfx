/* globals CodeMirror: false */
import DomainGfx from '../src/index.js';
import debounce from 'lodash-es/debounce';

(async (jsonFileContent) => {
  // DOM elements
  const textArea = document.querySelector('.data textarea');
  const visu = document.querySelector('.visu');
  const invalid = document.querySelector('.invalid');

  // Domain graphics
  let dg;

  // Render function
  const updateView = cm => {
    if (dg) {
      dg.delete();
    }
    const text = cm.getValue();
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      invalid.classList.remove('hidden');
      console.error(err);
      return;
    }
    invalid.classList.add('hidden');
    dg = new DomainGfx({parent: visu, data});
    dg.render();
  };

  // CodeMirror logic
  textArea.value = await jsonFileContent;
  const cm = CodeMirror.fromTextArea(textArea, {lineNumbers: true});
  cm.on('change', debounce(updateView, 1000));

  // Kicks off first render
  updateView(cm);
})(fetch('data.json').then(r => r.text()));
