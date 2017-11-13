import ns from '../utils/namespace';
import dataset from '../utils/dataset';
import getStyleSheet from './style';
import dataToMarkup from './dataToMarkup';

const acceptedMargin = 5;
const className = 'domain_gfx__tooltip';

const getEntityBBox = target => {
  if (!target) throw new Error('No entity found in the whole tree');
  if (!dataset(target).get('entity')) {
    return getEntityBBox(target.parentElement);
  }
  return target.getBoundingClientRect();
};

const findBestTooltipPosition = (
  entityBBox/*: Object */,
  tooltipBBox/*: Object */
) => {
  let x = entityBBox.left + (entityBBox.width / 2) - (tooltipBBox.width / 2);
  if (x < 0) {
    x = 0;// prevent left overflow
  } else {
    x = Math.min(x, window.innerWidth - tooltipBBox.width);// right overflow
  }
  const y = entityBBox.top - tooltipBBox.height;
  // Rounding, otherwise will be blurred if not pixel aligned
  return {x: Math.round(x), y: Math.round(y)};
};

const buildTooltipContent = (html/*: string */) => {
  const el = document.createElement('div');
  el.classList.add(`${className}___container`);
  el.innerHTML = html;
  return el;
};

class TooltipManager {
  /* ::
    _current: HTMLElement;
    _container: HTMLElement;
    _promoted: boolean;
    _currentData: ?Object;
  */
  constructor () {
    // If no DOM, no need to do anything
    if (!window) return;
    // container
    const cont = document.createElement('div');
    cont.classList.add(className);
    cont.classList.add('hidden');
    cont.style.position = 'fixed';
    cont.style.left = '0';
    cont.style.top = '0';
    // cont.style.border = '1px solid rgba(0, 0, 255, 0.2)';
    // current node in container
    const curr = buildTooltipContent('<p>placeholder</p>');
    cont.appendChild(curr);
    // attach to instance
    this._current = curr;
    this._container = cont;
    // append to DOM
    if (!document.body) throw new Error('No body in document');
    document.body.appendChild(cont);
    this._promoted = false;
    // CSS
    if (!document.head) throw new Error('No head in document');
    document.head.appendChild(getStyleSheet({className, acceptedMargin}));
    // add event listener to the tooltip itself
    cont.addEventListener('mouseleave', e => {
      const relatedData = e.relatedTarget[ns];
      if (relatedData === this._currentData) return;// enter part of same entity
      this._currentData = relatedData || null;
      if (relatedData) {
        // switch tooltip content
        this._replaceTooltipContent(relatedData);
        this._display(findBestTooltipPosition(
          getEntityBBox(e.relatedTarget),
          this._container.getBoundingClientRect()
        ));
      } else {
        // hide tooltip
        this._hide();
      }
    });
  }

  // promote to own graphic accelerated layer
  _promoteTarget = canvas => ({target}/*: {target: Element}*/) => {
    if (target !== canvas || this._promoted) return;
    this._container.style.willChange = 'transform';
  };

  // demote from own graphic accelerated layer
  _demoteTarget = canvas => (
    {target, relatedTarget}/*: {target: Element, relatedTarget: Element}*/
  ) => {
    if (target !== canvas || !this._promoted) return;
    if (relatedTarget && relatedTarget === this._container) return;
    this._container.style.willChange = '';
  };

  _replaceTooltipContent = data => {
    this._current = buildTooltipContent(dataToMarkup(data));
    this._container.replaceChild(
      this._current,
      this._container.firstElementChild
    );
  };

  _hide = () => {
    this._container.classList.add('hidden');
    this._visible = false;
  };

  _display = ({x, y}) => {
    this._container.style.transform = (
      `translate(${x}px, ${y + acceptedMargin}px)`
    );
    this._container.classList.remove('hidden');
  };

  _handleMouseOver = (e/*: MouseEvent */) => {
    const data = e.target[ns];
    if (this._currentData === data || !(this._currentData || data)) return;
    this._currentData = data;
    this._replaceTooltipContent(data);
    this._display(findBestTooltipPosition(
      getEntityBBox(e.target),
      this._container.getBoundingClientRect()
    ));
  };

  _handleMouseOut = (e/*: MouseEvent */) => {
    const data = e.target[ns];
    if (!data) return;
    if (e.relatedTarget === this._container) return;
    const relatedData = e.relatedTarget[ns];
    if (relatedData === this._currentData) return;// enter part of same entity
    this._currentData = relatedData || null;
    if (relatedData) {
      // switch tooltip content
      this._replaceTooltipContent(relatedData);
      this._display(findBestTooltipPosition(
        getEntityBBox(e.relatedTarget),
        this._container.getBoundingClientRect()
      ));
    } else {
      // hide tooltip
      this._hide();
    }
  };

  attachToCanvas (canvas/*: Element */) {
    const promote = this._promoteTarget(canvas);
    const demote = this._demoteTarget(canvas);
    canvas.addEventListener('mouseenter', promote);
    canvas.addEventListener('mouseleave', demote);
    canvas.addEventListener('mouseover', this._handleMouseOver);
    canvas.addEventListener('mousemove', this._handleMouseOver);// not a typo
    canvas.addEventListener('mouseout', this._handleMouseOut);
    return () => {
      canvas.removeEventListener('mouseenter', promote);
      canvas.removeEventListener('mouseleave', demote);
      canvas.removeEventListener('mouseover', this._handleMouseOver);
      canvas.removeEventListener('mousemove', this._handleMouseOver);
      canvas.removeEventListener('mouseout', this._handleMouseOut);
    };
  }
}

let tooltipManager;

export default () => {
  if (!tooltipManager) {
    tooltipManager = new TooltipManager();
  }
  return tooltipManager;
};
