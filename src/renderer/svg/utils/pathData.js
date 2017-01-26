// @flow export
export default class {
  /*::
   _data: string;
   */
  constructor (startPosition/*: string */ = 'm0,0') {
    this._data = startPosition;
  }

  add (data/*: string */ = '') {
    this._data += data;
    return this;
  }

  finish (close/*: boolean */) {
    if (close) {
      this._data += 'z';
    }
    return this._data;
  }

  close () {
    return this.finish(true);
  }
};
