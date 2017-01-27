import PathData from '../utils/pathData';
import {path, rectangle, defs, group, mask, text as textEl} from '../svg';
import uniqueId from '../../../utils/uniqueId';

const height = 10;
const radius = height / 2;

const line = (x = 0, y = 0) => {
  if (x === 0) return `v${y}`;
  if (y === 0) return `h${x}`;
  return `l${x},${y}`;
};

const horizontalLine = length => line(length, 0);
const verticalLine = length => line(0, length);

const arc = (rx, ry, xAxisRotate, largeArcFlag, sweepFlag, x, y) => (
  `A${rx},${ry},${xAxisRotate},${largeArcFlag},${sweepFlag},${x},${y}`
);

const domainEnd = (endStyle, topBottomLength) => {
  switch (endStyle.toLowerCase()) {
    case 'jagged':
      return (
        horizontalLine(radius) + line(-radius / 2, radius / 2) +
        line(radius / 2, radius / 2) + line(-radius / 2, radius / 2) +
        line(radius / 2, radius / 2) + horizontalLine(-radius)
      );
    case 'arrow':
      return line(radius, radius) + line(-radius, radius);
    case 'curved':
      return arc(radius, radius, 0, 0, 1, topBottomLength + radius, height);
    case 'straight':
    default:
      return (
        horizontalLine(radius) + verticalLine(height) + horizontalLine(-radius)
      );
  }
};
const domainStart = startStyle => {
  switch (startStyle.toLowerCase()) {
    case 'jagged':
      return (
        horizontalLine(-radius) + line(radius / 2, -radius / 2) +
        line(-radius / 2, -radius / 2) + line(radius / 2, -radius / 2) +
        line(-radius / 2, -radius / 2) + horizontalLine(radius)
      );
    case 'arrow':
      return line(-radius, -radius) + line(radius, -radius);
    case 'curved':
      return arc(radius, radius, 0, 0, 1, radius, 0);
    case 'straight':
    default:
      return (
        horizontalLine(-radius) + verticalLine(-height) + horizontalLine(radius)
      );
  }
};

const domainTopLine = length => horizontalLine(length);
const domainBottomLine = length => horizontalLine(-length);

const domain = ({
  start, end, startStyle, endStyle,
  color, gradient,
  residueWidth, mask
}) => {
  const length = (end - start) * residueWidth;
  const topBottomLength = length - (2 * radius);
  const d = new PathData(`m${radius},0`)
    .add(domainTopLine(topBottomLength))
    .add(domainEnd(endStyle, topBottomLength))
    .add(domainBottomLine(topBottomLength))
    .add(domainStart(startStyle))
    .close();
  // return path({d, fill: gradient, stroke: color, mask});
  // return path({d, fill: gradient, mask});
  return path({d, fill: color, mask});
};

const envelope = ({start, aliStart, aliEnd, end, residueWidth}) => {
  const maskId = uniqueId();
  return {
    maskId,
    maskElement: mask(
      {
        id: maskId, x: 0, y: 0,
        width: (end - start) * residueWidth, height,
        fill: '#fff',
      },
      // beginning (partially covered)
      rectangle({
        x: 0,
        y: 0,
        width: (aliStart - start) * residueWidth,
        height,
        opacity: 0.6,
      }),
      // middle (completely uncovered)
      rectangle({
        x: (aliStart - start) * residueWidth,
        y: 0,
        width: (aliEnd - aliStart) * residueWidth,
        height,
        opacity: 1,
      }),
      // end (partially covered)
      rectangle({
        x: (aliEnd - start) * residueWidth,
        y: 0,
        width: (end - aliEnd) * residueWidth,
        height,
        opacity: 0.6,
      })
    )
  };
};

// const grad = ({color, colour}) => {
//   const _color = color || colour;
//   const gradientId = uniqueId();
//   return {
//     gradientId,
//     gradientElement: gradient(
//       'linear',
//       {id: gradientId, x1: 0, x2: 0, y1: 0, y2: 1},// top to bottom
//       svg('stop', {offset: '0%', 'stop-color': '#fff'}),
//       svg('stop', {offset: '40%', 'stop-color': _color}),
//       svg('stop', {offset: '50%', 'stop-color': _color}),
//       svg('stop', {offset: '100%', 'stop-color': '#fff'})
//     ),
//   };
// };

export default (
  {start, aliStart, aliEnd, end, startStyle, endStyle, color, text},
  residueWidth
) => {
  const {maskId, maskElement} = envelope(
    {
      start, aliStart: aliStart || start,
      aliEnd: aliEnd || end, end,
      residueWidth,
    }
  );
  // const {gradientId, gradientElement} = grad({color});
  const textElement = textEl(
    {
      x: ((end - start) * residueWidth) / 2, y: height * 0.75,
      'text-anchor': 'middle',
      'font-size': 7.5,
      'font-family': 'Sans-Serif',
      'fill': '#000',
      opacity: 0,
    },
    text
  );
  textElement.dataset.maxwidth = (end - start) * residueWidth;
  return group(
    null,
    defs(null, maskElement/*, gradientElement*/),
    domain({
      start, end, startStyle, endStyle, residueWidth,
      color, mask: `url(#${maskId})`,
      // gradient: `url(#${gradientId})`,
    }),
    text && textElement
  );
};
