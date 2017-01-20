import merge from 'lodash-es/merge';

import SvgRenderer from './renderer/svg';
import getDefaults from './defaults';

export default class DomainGFX {
  constructor ({data = {}, parent, params = {}} = {}) {
    this._data = data;
    this._parent = parent;
    this._params = merge({}, getDefaults(), params);
    this._canvas = this._createCanvas();
  }

  _computeWidth ({length}, {image: {width, sequenceEndPadding}}) {
    return length * width.residue + sequenceEndPadding;
  }

  _computeHeight () {
    return 20;
  }

  _draw = () => {
    console.log('drawing');
    // draw sequence
    this._renderer.drawSequence(
      this._data.length * this._params.image.width.residue
    );
    // draw regions
    for (const region of this._data.regions) {
      this._renderer.drawRegion(region, this._params.image.width.residue);
    }
  };

  _createCanvas = () => {
    this._renderer = new SvgRenderer({
      width: this._computeWidth(this._data, this._params),
      height: this._computeHeight(),
    });
    return this._renderer.canvas;
  };

  render = () => {
    console.log(this);
    this._draw();
    this._parent.appendChild(this._canvas);
    // console.log(this._data);
    // console.log(this._parent);
    // console.log(this._options);
  };
}

// Dispatches event on document when library has loaded
// This way user can wait for async load, and when event fires, call the lib
document.dispatchEvent(new CustomEvent('domainGfxReady', {detail: DomainGFX}));
