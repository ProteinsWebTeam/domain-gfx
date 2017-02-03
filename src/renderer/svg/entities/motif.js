// @flow
import {rectangle} from '../svg';
import gradientMaker from '../utils/gradient';

const motifOpacity = 0.5;

export default (
  {position: {x, y}, length: width, height, color, gradient}
  /*: {
   position: {x: number, y: number},
   length: number,
   height: number,
   color: ?Array<string> | string,
   gradient: ?boolean,
   } */,
  addToDefs/*: function */
) => {
  const basicAttributes = {x, y, width, height, opacity: motifOpacity};
  if (!Array.isArray(color)) {
    return rectangle({...basicAttributes, fill: color || 'gray'});
  }
  const {gradientId, gradientElement} = gradientMaker(color, gradient);
  addToDefs(gradientElement);
  return rectangle({...basicAttributes, fill: `url(#${gradientId})`});
};
