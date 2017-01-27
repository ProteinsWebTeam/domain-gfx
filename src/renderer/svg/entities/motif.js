// @flow
import {rectangle, group, defs} from '../svg';
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
   } */
) => {
  const basicAttributes = {
    x, y, width, height, fill: color || 'gray', opacity: motifOpacity
  };
  if (!Array.isArray(color)) {
    return rectangle(basicAttributes);
  }
  const {gradientId, gradientElement} = gradientMaker(color, gradient);
  return group(
    null,
    defs(null, gradientElement),
    rectangle({...basicAttributes, fill: `url(#${gradientId})`})
  );
};
