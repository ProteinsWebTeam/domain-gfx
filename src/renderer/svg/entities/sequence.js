import rectangle from '../shapes/rectangle';

export default (
  {position: {x, y}, length: width, height, color, colour},
  ...args
) => rectangle(
  {
    x, y, width, height,
    fill: color || colour,
    rx: height / 2, ry: height / 2
  },
  ...args
);
