import {svg, group} from './svg';
import markup from './entities/markup';
import sequence from './entities/sequence';
import domain from './entities/domain';
import motif from './entities/motif';
import ns from '../../utils/namespace';

const connectData = (entity, data) => {
  if (!(window && (data.tooltip || data.metadata))) return;
  for (const chunk of entity.querySelectorAll(':not(g)')) {
    chunk[ns] = data;
  }
};

export default class SvgRenderer {
  constructor ({width, height}) {
    this._canvas = svg({width, height, viewBox: `0 0 ${width} ${height}`});
    this._canvas.style.width = `${width * 2}px`;
    this._canvas.style.height = `${height * 2}px`;
  }

  get canvas () {
    return this._canvas;
  }

  drawMarkup = (m, residueWidth, previousNestedMarkups) => {
    if (m.end && !Number.isFinite(m.level)) {
      const availableLevels = new Set([0, 1, -1]);
      for (const previous of previousNestedMarkups) {
        if (m.start < previous.end) {
          availableLevels.delete(previous.level);
        }
      }
      const [level] = availableLevels;
      m.level = level || 0;
    }
    const g = group(
      {transform: `translate(${m.start * residueWidth}, 10)`},
      markup(m, residueWidth)
    );
    g.dataset.entity = 'markup';
    connectData(g, m);
    this._canvas.appendChild(g);
  };

  drawSequence = length => {
    const g = group(
      {transform: 'translate(0 10)'},
      sequence({
        position: {x: 0, y: -2.5},
        length,
        height: 5,
        color: '#d8d8d8',
      })
    );
    g.dataset.entity = 'sequence';
    this._canvas.appendChild(g);
  };

  drawRegion = (region, residueWidth) => {
    const g = group(
      {transform: `translate(${region.start * residueWidth}, 5)`},
      domain(region, residueWidth)
    );
    g.dataset.entity = 'region';
    connectData(g, region);
    this._canvas.appendChild(g);
    const textToFit = g.querySelector('[data-maxwidth]');
    if (!textToFit) return;
    if (textToFit.getBBox().width <= +textToFit.dataset.maxwidth) {
      textToFit.setAttribute('opacity', 1);
    } else {
      textToFit.parentElement.removeChild(textToFit);
    }
  };

  drawMotif = (m, residueWidth) => {
    const g = group(
      {transform: `translate(${m.start * residueWidth}, 6)`},
      motif({
        position: {x: 0, y: 0},
        length: (m.end - m.start) * residueWidth,
        height: 8,
        color: m.color,
      })
    );
    g.dataset.entity = 'motif';
    connectData(g, m);
    this._canvas.appendChild(g);
  };
}
