import svg from '../element';

export class PathData {
  constructor (startPosition = 'm0,0') {
    this._data = startPosition;
  }

  add (data = '') {
    this._data += data;
    return this;
  }

  close () {
    return this._data + 'z';
  }
};

export default (...args) => svg('path', ...args);
