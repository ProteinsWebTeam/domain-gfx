// @flow
import {rectangle} from '../svg';

export default (
  {position: {x, y}, length: width, height, color}
  /*: {
    position: {x: number, y: number},
    length: number,
    height: number,
    color: ?string,
  } */
) => (
  rectangle({
    x, y, width, height,
    fill: color || '#d8d8d8',
    rx: height / 2, ry: height / 2
  })
);
