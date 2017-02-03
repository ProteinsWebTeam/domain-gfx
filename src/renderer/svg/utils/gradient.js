// @flow
import uniqueId from '../../../utils/uniqueId';
import {linearGradient, stop} from '../svg';

const smoothStops = (colors/*: Array<string>*/) => {
  let _colors = colors;
  // If only one color provided in the array
  if (_colors.length === 1) {
    _colors[1] = _colors[0];
  }
  const {length} = _colors;// length
  const step = 100 / (length - 1);// step
  return _colors.map((color, i) => stop({
    offset: `${i * step}%`,
    'stop-color': color,
  }));
};
const bandStops = (colors/*: Array<string>*/) => {
  const output = [];
  const {length} = colors;// length
  const step = 100 / length;// step
  for (let i = 0; i < length; i++) {
    output.push(
      stop({offset: `${i * step}%`, 'stop-color': colors[i]})
    );
    output.push(
      stop({offset: `${(i * step) + step}%`, 'stop-color': colors[i]})
    );
  }
  return output;
};

export default (colors/*: Array<string>*/, smoothGradient/*: ?boolean */) => {
  const gradientId = uniqueId();
  return {
    gradientId,
    gradientElement: linearGradient(
      {id: gradientId, x1: 0, x2: 0, y1: 0, y2: 1},
      ...(smoothGradient ? smoothStops : bandStops)(colors)
    ),
  };
};
