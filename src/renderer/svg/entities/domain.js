// @flow
import PathData from '../utils/pathData';
import {path, rectangle, group, mask, text as textEl} from '../svg';
import gradientMaker from '../utils/gradient';
import bestContrast from '../../../utils/colorContrast';
import uniqueId from '../../../utils/uniqueId';
import dataset from '../../../utils/dataset';

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

const domainEnd = (endStyle/*: string */, topBottomLength/*: number */) => {
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
const domainStart = (startStyle/*: string */) => {
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

const domainTopLine = (length/*: number */) => horizontalLine(length);
const domainBottomLine = (length/*: number */) => horizontalLine(-length);

const domain = ({
  start, end, startStyle, endStyle, fill,
  residueWidth, mask, filter,
}/*: {
  start: number,
  end: number,
  startStyle: ?string,
  endStyle: ?string,
  fill: string,
  residueWidth: number,
  mask: string,
  filter: ?string,
} */) => {
  const length = (end - start) * residueWidth;
  const topBottomLength = length - (2 * radius);
  const d = new PathData(`m${radius},0`)
    .add(domainTopLine(topBottomLength))
    .add(domainEnd(endStyle || '', topBottomLength))
    .add(domainBottomLine(topBottomLength))
    .add(domainStart(startStyle || ''))
    .close();
  return path({d, fill, mask, filter});
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

export default (
  {
    start, aliStart, aliEnd, end, startStyle, endStyle,
    color, text, textColor, gradient,
  }
  /*: {
    start: number,
    aliStart: ?number,
    aliEnd: ?number,
    end: number,
    startStyle: ?string,
    endStyle: ?string,
    color: string | Array<string>,
    text: ?string,
    textColor: ?string,
    gradient: ?boolean,
  } */,
  residueWidth/*: number */,
  spotlight/*: ?string */,
  addToRefs/*: function */
) => {
  const {maskId, maskElement} = envelope(
    {
      start, aliStart: aliStart || start,
      aliEnd: aliEnd || end, end,
      residueWidth,
    }
  );
  addToRefs(maskElement);
  let fill = color;
  let gradientObj = {};
  if (Array.isArray(fill)) {
    gradientObj = gradientMaker(fill, gradient);
    addToRefs(gradientObj.gradientElement);
    fill = `url(#${gradientObj.gradientId})`;
  }
  const textElement = textEl(
    {
      x: ((end - start) * residueWidth) / 2, y: height * 0.75 + 0.5,
      'text-anchor': 'middle',
      'font-size': 7.5,
      'font-family': 'Sans-Serif',
      fill: textColor || bestContrast(Array.isArray(color) ? color[0] : color),
      opacity: 0,
    },
    text || ''
  );
  dataset(textElement).set('maxwidth', (end - start) * residueWidth);
  return group(
    null,
    domain({
      start, end, startStyle, endStyle, residueWidth,
      fill: fill, mask: `url(#${maskId})`,
      filter: spotlight && `url(#${spotlight})`,
    }),
    text ? textElement : null
  );
};
