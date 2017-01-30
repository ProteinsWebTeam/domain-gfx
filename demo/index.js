/* globals CodeMirror: false */
import DomainGraphics from '../src/index.js';
import debounce from 'lodash-es/debounce';

(async () => {
  // Fires the fetch request at the beginning
  const jsonFileContent = fetch('data.json').then(r => r.text());

  // DOM elements
  const textArea = document.querySelector('.data textarea');
  const visu = document.querySelector('.visu');
  const invalid = document.querySelector('.invalid');

  // Domain graphics
  const dg = new DomainGraphics({parent: visu});

  // Render function
  const updateView = cm => {
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
    dg.data = data;
    dg.render();
  };

  // CodeMirror logic
  textArea.value = await jsonFileContent;
  const cm = CodeMirror.fromTextArea(textArea, {lineNumbers: true});
  cm.on('change', debounce(updateView, 1000));

  // Kicks off first render
  updateView(cm);
})();
