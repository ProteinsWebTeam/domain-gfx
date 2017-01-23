import rectangle from '../elements/rectangle';

export default ({position: {x, y}, length: width, height, color, colour}) => (
  rectangle({
    x, y, width, height,
    fill: color || colour,
    opacity: 0.6,
  })
);
