// @flow
import memoize from 'lodash-es/memoize';

let p;
if (window && document && window.getComputedStyle) {
  p = document.createElement('p');
  p.style.opacity = '0';
}

const re = /rgba?\((\d+), (\d+), (\d+)/;
const getRGB = (color/*: string */) => {
  if (!(p && document.body)) return {r: 255, g: 255, b: 255};
  p.style.background = color;
  document.body.appendChild(p);
  const [, r, g, b] = window.getComputedStyle(p).backgroundColor.match(re);
  if (document.body) document.body.removeChild(p);
  return {r: +r, g: +g, b: +b};
};

// convert to yiq space to get best contrast
export default memoize((color/*: string */) => {
  if (!p) return 'black';
  const {r, g, b} = getRGB(color);
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq >= 128 ? 'black' : 'white';
});
