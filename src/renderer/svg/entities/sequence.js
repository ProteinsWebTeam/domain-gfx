// @flow
import {rectangle} from '../svg';

export default (
  {position: {x, y}, length: width, height, color, colour}
  /*: {
    position: {x: number, y: number},
    length: number,
    height: number,
    color: ?string,
    colour: ?string,
  } */
) => (
  rectangle({
    x, y, width, height,
    fill: color || colour || '#D8D8D8',
    rx: height / 2, ry: height / 2
  })
);
