// @flow
const svgNamespace = 'http://www.w3.org/2000/svg';

/*::
  type Attributes = {[key: string]: ?(number | string)};
  type Child = Node | string | null;
*/

const _svg = (name/*: string */) => (
  attributes/*: ?Attributes */,
  ...children/*: Array<Child> */
)/*: Element */ => {
  // Create element
  const element = document.createElementNS(svgNamespace, name);
  // Set attributes
  const keys = Object.keys(attributes || {});
  for (const key of keys) {
    const value = attributes[key];
    if (value || value === 0) {
      element.setAttribute(key, String(value));
    }
  }
  // Add children
  for (const child of children) {
    if (!child) continue;
    element.appendChild(
      child instanceof Node ? child : document.createTextNode(child)
    );
  }
  return element;
};

export default _svg;

export const svg = _svg('svg');

export const circle = _svg('circle');

export const defs = _svg('defs');

export const linearGradient = _svg(`linearGradient`);

export const group = _svg('g');

export const mask = _svg('mask');

export const path = _svg('path');

export const rectangle = _svg('rect');

export const stop = _svg('stop');

export const text = _svg('text');

export const filter = _svg('filter');

export const feGaussianBlur = _svg('feGaussianBlur');

export const feSpecularLighting = _svg('feSpecularLighting');

export const fePointLight = _svg('fePointLight');

export const feComposite = _svg('feComposite');
