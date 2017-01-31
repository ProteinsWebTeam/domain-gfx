import PathData from '../utils/pathData';
import svg, {path, rectangle, defs, group, mask, text as textEl} from '../svg';
import gradientMaker from '../utils/gradient';
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
  start, end, startStyle, endStyle, fill,
  residueWidth, mask, filter,
}) => {
  const length = (end - start) * residueWidth;
  const topBottomLength = length - (2 * radius);
  const d = new PathData(`m${radius},0`)
    .add(domainTopLine(topBottomLength))
    .add(domainEnd(endStyle, topBottomLength))
    .add(domainBottomLine(topBottomLength))
    .add(domainStart(startStyle))
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
  {start, aliStart, aliEnd, end, startStyle, endStyle, color, text, gradient},
  residueWidth
) => {
  const {maskId, maskElement} = envelope(
    {
      start, aliStart: aliStart || start,
      aliEnd: aliEnd || end, end,
      residueWidth,
    }
  );
  let fill = color;
  let gradientObj = {};
  if (Array.isArray(color)) {
    gradientObj = gradientMaker(color, gradient);
    fill = `url(#${gradientObj.gradientId})`;
  }
  const textElement = textEl(
    {
      x: ((end - start) * residueWidth) / 2, y: height * 0.75 + 0.5,
      'text-anchor': 'middle',
      'font-size': 7.5,
      'font-family': 'Sans-Serif',
      fill: '#000',
      opacity: 0,
    },
    text
  );
  textElement.dataset.maxwidth = (end - start) * residueWidth;
  return group(
    null,
    defs(
      null,
      maskElement,
      gradientObj.gradientElement,
      svg('filter')(
        {
          id: 'filter', filterUnits: 'objectBoundingBox',
          x: -0.1, y: -0.1, width: 5, height: 5
        },
        svg('feGaussianBlur')(
          {in: 'SourceAlpha', stdDeviation: 1, result: 'alpha_blur'}
        ),
        svg('feSpecularLighting')(
          {
            in: 'alpha_blur', surfaceScale: 5, specularConstant: 1.5,
            specularExponent: 12, 'lighting-color': '#ddd', result: 'light'
          },
          svg('fePointLight')(
            {x: -100, y: -200, z: 100}
          )
        ),
        svg('feComposite')(
          {in: 'SourceGraphic', in2: 'light', operator: 'out'}
        )
    )),
    domain({
      start, end, startStyle, endStyle, residueWidth,
      fill, mask: `url(#${maskId})`, filter: 'url(#filter)',
    }),
    text && textElement
  );
};
