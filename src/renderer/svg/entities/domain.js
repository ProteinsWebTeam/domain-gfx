import path, {PathData} from '../shapes/path';

const horizontalLine = length => `h${length}`;

export default (
  {start, end, startStyle, endStyle, color, colour},
  residueWidth,
  ...args
) => {
  const length = (end - start) * residueWidth;
  const endLine = () => 'v10';
  const startLine = () => 'v-10';
  const d = new PathData()
    .add(horizontalLine(length))
    .add(endLine())
    .add(horizontalLine(-length))
    .add(startLine())
    .close();
  console.log(d);
  return path({d, fill: color || colour});
};
