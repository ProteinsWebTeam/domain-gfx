import svg from './svg';
import group from './elements/group';
import markup from './entities/markup';
import sequence from './entities/sequence';
import domain from './entities/domain';
import motif from './entities/motif';

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

  drawMarkup = (m, residueWidth) => {
    console.log('drawing markup');
    console.table(m);
    const g = group(
      {transform: `translate(${m.start * residueWidth}, 10)`},
      markup(m, residueWidth)
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

  drawRegion = (region, residueWidth) => {
    console.log('drawing region');
    console.table(region);
    const g = group(
      {transform: `translate(${region.start * residueWidth}, 5)`},
      domain(region, residueWidth)
    );
    this._canvas.appendChild(g);
    const textToFit = g.querySelector('[data-maxwidth]');
    if (!textToFit) return;
    if (textToFit.getBBox().width <= +textToFit.dataset.maxwidth) {
      textToFit.setAttribute('opacity', 1);
    } else {
      textToFit.parentElement.removeChild(textToFit);
    }
  }

  drawMotif = (m, residueWidth) => {
    console.log('drawing motif');
    console.table(m);
    const g = group(
      {transform: `translate(${m.start * residueWidth}, 6)`},
      motif({
        position: {x: 0, y: 0},
        length: (m.end - m.start) * residueWidth,
        height: 8,
        color: m.color || m.colour,
      })
    );
    this._canvas.appendChild(g);
  }
}
