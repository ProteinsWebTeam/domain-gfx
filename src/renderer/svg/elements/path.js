import svg from '../svg';

export class PathData {
  constructor (startPosition = 'm0,0') {
    this._data = startPosition;
  }

  add (data = '') {
    this._data += data;
    return this;
  }

  finish (close) {
    if (close) {
      this._data += 'z';
    }
    return this._data;
  }

  close () {
    return this.finish(true);
  }
};

export default (...args) => svg('path', ...args);
