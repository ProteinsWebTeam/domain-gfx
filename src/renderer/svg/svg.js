// @flow
const namespace = 'http://www.w3.org/2000/svg';

export default (
  name/*: string */,
  attributes/*: {[key: string]: number | string} */ = {},
  ...children/*: Array<Node | string | null> */
)/*: Element */ => {
  // Create element
  const element = document.createElementNS(namespace, name);
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
