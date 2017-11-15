import {
  svg,
  group,
  defs,
  filter,
  feGaussianBlur,
  feSpecularLighting,
  fePointLight,
  feComposite,
} from './svg';
import markup from './entities/markup';
import sequence from './entities/sequence';
import hit from './entities/hit';
import domain from './entities/domain';
import motif from './entities/motif';
import ns from '../../utils/namespace';
import dataset from '../../utils/dataset';
import uniqueId from '../../utils/uniqueId';

const connectData = (entity, data, always = false) => {
  if (!(window && (data.tooltip || data.metadata || always))) return;
  for (const element of entity.querySelectorAll(':not(g)')) {
    element[ns] = data;
  }
};

export default class SvgRenderer {
  constructor({ width, height, spotlight = true }) {
    this._spotlight = spotlight && uniqueId();
    this._defs = defs(
      null,
      this._spotlight &&
        filter(
          {
            id: this._spotlight,
            filterUnits: 'objectBoundingBox',
            x: -0.1,
            y: -0.1,
            width: 5,
            height: 5,
          },
          feGaussianBlur({
            in: 'SourceAlpha',
            stdDeviation: 1,
            result: 'alpha_blur',
          }),
          feSpecularLighting(
            {
              in: 'alpha_blur',
              surfaceScale: 5,
              specularConstant: 1.5,
              specularExponent: 12,
              'lighting-color': '#ddd',
              result: 'light',
            },
            fePointLight({ x: -100, y: -200, z: 100 })
          ),
          feComposite({ in: 'SourceGraphic', in2: 'light', operator: 'out' })
        )
    );
    this._canvas = svg(
      { width, height, viewBox: `0 0 ${width} ${height}` },
      this._defs
    );
    this._canvas.style.width = `${width * 2}px`;
    this._canvas.style.height = `${height * 2}px`;
  }

  get canvas() {
    return this._canvas;
  }

  _addToDefs = element => this._defs.appendChild(element);

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
      { transform: `translate(${m.start * residueWidth}, 10)` },
      markup(m, residueWidth)
    );
    dataset(g).set('entity', 'markup');
    connectData(g, m);
    this._canvas.appendChild(g);
  };

  drawSequence = length => {
    const g = group(
      { transform: 'translate(0 10)' },
      sequence({
        position: { x: 0, y: -2.5 },
        length,
        height: 5,
        color: '#d8d8d8',
      })
    );
    dataset(g).set('entity', 'sequence');
    this._canvas.appendChild(g);
  };

  drawHit = (h, residueWidth) => {
    const g = group(
      { transform: `translate(${h.tstart * residueWidth}, 16)` },
      hit({
        position: { x: 0, y: 0 },
        length: (h.tend - h.tstart) * residueWidth,
        height: 2,
        color: h.color,
      })
    );
    dataset(g).set('entity', 'hit');
    connectData(g, h, true);
    this._canvas.appendChild(g);
  };

  drawRegion = (region, residueWidth) => {
    const g = group(
      { transform: `translate(${region.start * residueWidth}, 5)` },
      domain(region, residueWidth, this._spotlight, this._addToDefs)
    );
    dataset(g).set('entity', 'region');
    connectData(g, region);
    this._canvas.appendChild(g);
    const textToFit = g.querySelector('[data-maxwidth]');
    if (!textToFit) return;
    if (
      textToFit.getBBox().width <= +(dataset(textToFit).get('maxwidth') - 0)
    ) {
      textToFit.setAttribute('opacity', 1);
    } else {
      textToFit.parentElement && textToFit.parentElement.removeChild(textToFit);
    }
  };

  drawMotif = (m, residueWidth) => {
    const g = group(
      { transform: `translate(${m.start * residueWidth}, 6)` },
      motif(
        {
          position: { x: 0, y: 0 },
          length: (m.end - m.start) * residueWidth,
          height: 8,
          color: m.color,
          gradient: m.gradient,
        },
        this._addToDefs
      )
    );
    dataset(g).set('entity', 'motif');
    connectData(g, m);
    this._canvas.appendChild(g);
  };
}
