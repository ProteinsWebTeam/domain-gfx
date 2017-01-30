import merge from 'lodash-es/merge';

import getTooltipManager from './tooltip/tooltip';
import SvgRenderer from './renderer/svg';
import getDefaults from './defaults';
import sanitize from './utils/sanitizer';

const isHidden = ({hidden, display = true}) => hidden || !display;

export default class DomainGFX {
  constructor ({data = {}, parent, params = {}} = {}) {
    this._data = sanitize(data);
    this._parent = parent;
    this._params = merge({}, getDefaults(), params);
    this._canvas = this._createCanvas();
    this._parent.appendChild(this._canvas);
  }

  _computeWidth ({length = 0}, {image: {width, sequenceEndPadding}}) {
    return length * width.residue + sequenceEndPadding;
  }

  _computeHeight () {
    return 20;
  }

  _draw = () => {
    // draw markups
    const markups = (this._data.markups || [])
      .sort((a, b) => a.start - b.start);
    const nestedMarkups = [];
    for (const markup of markups) {
      if (isHidden(markup)) continue;
      this._renderer.drawMarkup(
        markup,
        this._params.image.width.residue,
        nestedMarkups
      );
      if (markup.end) nestedMarkups.push(markup);
    }
    // draw sequence
    this._renderer.drawSequence(
      this._data.length * this._params.image.width.residue
    );
    // draw regions
    for (const region of this._data.regions || []) {
      if (isHidden(region)) continue;
      this._renderer.drawRegion(region, this._params.image.width.residue);
    }
    // draw motifs
    for (const motif of this._data.motifs || []) {
      if (isHidden(motif)) continue;
      this._renderer.drawMotif(motif, this._params.image.width.residue);
    }
    // connect tooltip logic
    getTooltipManager().attachToCanvas(this._renderer.canvas);
  };

  _createCanvas = () => {
    this._renderer = new SvgRenderer({
      width: this._computeWidth(this._data, this._params),
      height: this._computeHeight(),
    });
    return this._renderer.canvas;
  };

  get data () {
    return this._data;
  }

  set data (value) {
    this._data = sanitize(value);
    const prevCanvas = this._canvas;
    this._canvas = this._createCanvas();
    this._parent.replaceChild(this._canvas, prevCanvas);
  }

  render = () => {
    this._draw();
  }

  delete = () => {
    // clean-up logic
    this._parent.removeChild(this._canvas);
    this._canvas = this._parent = null;
  }
}

// Dispatches event on document when library has loaded
// This way user can wait for async load, and when event fires, call the lib
document.dispatchEvent(new CustomEvent('domainGfxReady', {detail: DomainGFX}));
