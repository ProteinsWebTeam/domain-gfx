// @flow
const svgNamespace = 'http://www.w3.org/2000/svg';

/*::
  type Attributes = {[key: string]: number | string};
  type Child = Node | string | null;
*/

const _svg = (name/*: string */) => (
  attributes/*: Attributes */ = {},
  ...children/*: Array<Child> */
) => {
  // Create element
  const element = document.createElementNS(svgNamespace, name);
  // Set attributes
  for (const [attribute, value] of Object.entries(attributes || {})) {
    if (value || value === 0) {
      element.setAttribute(attribute, String(value));
    }
  }
  // Add children
  for (const child of children) {
    if (!child) continue;
    element.appendChild(
      child instanceof Node ? child : document.createTextNode(child)
    );
  }
  //
  return element;
};

export default _svg;

export const svg = _svg('svg');

export const circle = _svg('circle');

export const defs = _svg('defs');

export const gradient = (type/*: string */) => _svg(`${type}Gradient`);

export const group = _svg('g');

export const mask = _svg('mask');

export const path = _svg('path');

export const rectangle = _svg('rect');

export const text = _svg('text');
