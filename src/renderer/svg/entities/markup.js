import PathData from '../utils/pathData';
import {path, group, rectangle, circle} from '../svg';

const line = (x = 0, y = 0) => {
  if (x === 0) return `v${y}`;
  if (y === 0) return `h${x}`;
  return `l${x},${y}`;
};

const offset = 8;

const horizontalLine = length => line(length, 0);
const verticalLine = length => line(0, length);

const buildSquareHead = (color, isOnTop) => {
  return rectangle({
    x: -1.5, y: isOnTop ? (-offset - 1.5) : (offset - 1.5),
    width: 3, height: 3,
    fill: color
  });
};
const buildDiamondHead = (color, isOnTop) => {
  let d = new PathData(`m0,${isOnTop ? (-offset - 2) : (offset - 2)}`)
    .add(line(2, 2))
    .add(line(-2, 2))
    .add(line(-2, -2))
    .close();
  return path({d, fill: color});
};
const buildCircleHead = (color, isOnTop) => {
  return circle({cx: 0, cy: isOnTop ? -offset : offset, r: 1.5, fill: color});
};
const buildArrowHead = (color, isOnTop) => {
  let d;
  if (isOnTop) {
    d = new PathData(`m-2,${-(offset - 2)}`)
      .add(line(2, -2))
      .add(line(2, 2))
      .finish();
  } else {
    d = new PathData(`m-2,${offset - 2}`)
      .add(line(2, 2))
      .add(line(2, -2))
      .finish();
  }
  return path({stroke: color, fill: 'none', d});
};
const buildPointerHead = (color, isOnTop) => {
  const sequenceSize = 5;
  let d;
  if (isOnTop) {
    d = new PathData(`m-2,${-((sequenceSize / 2) + 2)}`)
      .add(line(2, 2))
      .add(line(2, -2))
      .finish();
  } else {
    d = new PathData(`m-2,${(sequenceSize / 2) + 2}`)
      .add(line(2, -2))
      .add(line(2, 2))
      .finish();
  }
  return path({stroke: color, fill: 'none', d});
};
const buildLineHead = (color, isOnTop) => {
  return path({
    stroke: color,
    d: new PathData(`m0,${((isOnTop ? -1 : 1) * offset) - 1.5}`)
      .add(verticalLine(3))
      .finish(),
  });
};

const buildHead = ({style, color, isOnTop}) => {
  switch (style) {
    case 'diamond':
      return buildDiamondHead(color, isOnTop);
    case 'circle':
      return buildCircleHead(color, isOnTop);
    case 'arrow':
      return buildArrowHead(color, isOnTop);
    case 'pointer':
      return buildPointerHead(color, isOnTop);
    case 'line':
      return buildLineHead(color, isOnTop);
    case 'square':
    default:
      return buildSquareHead(color, isOnTop);
  }
};

export default (
  {
    start, end, v_align, vAlign, level = 0,
    lineColor, lineColour, headColor, headColour, color, colour,
    headStyle
  },
  residueWidth
) => {
  // eslint-disable-next-line camelcase
  const isOnTop = /top/i.test(v_align || vAlign);
  let d = new PathData()
    .add(verticalLine(((1.5 * level) + offset) * (isOnTop ? -1 : 1)));
  if (end) {
    d = d
      .add(horizontalLine((end - start) * residueWidth))
      .add(verticalLine(((1.5 * level) + offset) * (isOnTop ? 1 : -1)));
  }
  d = d.finish();
  console.log({level});
  return group(
    null,
    path({
      d, fill: 'none',
      // if lineColor is defined, use that
      // if it has a end, it is nested, so the color is the line's color
      // otherwise just default to black
      stroke: lineColor || lineColour || (end && color || colour) || 'black'
    }),
    !end && buildHead({
      // if headColor is defined, use that
      // if it has no end, it is not nested, so the color is the head's color
      // otherwise just default to black
      color: headColor || headColour || (!end && color || colour) || 'black',
      style: headStyle,
      isOnTop,
    })
  );
};
