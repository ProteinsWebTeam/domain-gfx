import group from '../elements/group';
import path, {PathData} from '../elements/path';
import rectangle from '../elements/rectangle';
import defs from '../elements/defs';
import mask from '../elements/mask';
import textEl from '../elements/text';
import uniqueId from '../uniqueId';

const height = 10;
const radius = height / 2;

const line = (x = 0, y = 0) => {
  if (x === 0) return `v${y}`;
  if (y === 0) return `h${x}`;
  return `l${x},${y}`;
};

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

const horizontalLine = length => line(length, 0);
const verticalLine = length => line(0, length);

const domainTopLine = length => horizontalLine(length);
const domainBottomLine = length => horizontalLine(-length);

const domain = (
  {start, end, startStyle, endStyle, color, colour, residueWidth, mask}
) => {
  const length = (end - start) * residueWidth;
  const topBottomLength = length - (2 * radius);
  const d = new PathData(`m${radius},0`)
    .add(domainTopLine(topBottomLength))
    .add(domainEnd(endStyle, topBottomLength))
    .add(domainBottomLine(topBottomLength))
    .add(domainStart(startStyle))
    .close();
  return path({d, fill: color || colour, mask});
};

const envelope = ({start, aliStart, aliEnd, end, residueWidth}) => {
  const defId = uniqueId();
  return {
    defId,
    maskElement: mask(
      {
        id: defId, x: 0, y: 0,
        width: (end - start) * residueWidth, height,
        fill: '#fff',
      },
      rectangle({
        x: 0,
        y: 0,
        width: (aliStart - start) * residueWidth,
        height,
        opacity: 0.6,
      }),
      rectangle({
        x: (aliStart - start) * residueWidth,
        y: 0,
        width: (aliEnd - aliStart) * residueWidth,
        height,
        opacity: 1,
      }),
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

export default (
  {start, aliStart, aliEnd, end, startStyle, endStyle, color, colour, text},
  residueWidth
) => {
  const {defId, maskElement} = envelope(
    {
      start, aliStart: aliStart || start,
      aliEnd: aliEnd || end, end,
      residueWidth,
    }
  );
  const textElement = textEl(
    {
      x: ((end - start) * residueWidth) / 2, y: height * 0.75,
      'text-anchor': 'middle',
      'font-size': 7.5,
      opacity: 0,
    },
    text
  );
  textElement.dataset.maxwidth = (end - start) * residueWidth;
  return group(
    null,
    defs(null, maskElement),
    domain({
      start, end, startStyle, endStyle,
      color, colour, residueWidth,
      mask: `url(#${defId})`,
    }),
    text && textElement
  );
};
