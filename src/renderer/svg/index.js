import svg from './element';
import group from './shapes/group';
import domain from './entities/domain';
import sequence from './entities/sequence';

export default class SvgRenderer {
  constructor ({width, height}) {
    this._canvas = svg(
      'svg',
      {width, height, viewBox: `0 0 ${width} ${height}`}
    );
    this._canvas.style.width = `${width * 2}px`;
    this._canvas.style.height = `${height * 2}px`;
  }

  get canvas () {
    return this._canvas;
  }

  drawRegion = (region, residueWidth) => {
    console.log('drawing region');
    console.log(region);
    const g = group(
      {transform: `translate(${region.start * residueWidth}, 5)`},
      domain(region, residueWidth)
    );
    this._canvas.appendChild(g);
  }

  drawSequence = length => {
    const g = group(
      {transform: 'translate(0 10)'},
      sequence({
        position: {x: 0, y: -2.5},
        length,
        height: 5,
        color: '#D8D8D8',
      })
    );
    this._canvas.appendChild(g);
  }
}
