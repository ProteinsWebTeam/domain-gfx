// @flow
const keyNumbers = new Set([
  'start',
  'end',
  'aliStart',
  'aliEnd',
  'modelStart',
  'modelEnd',
  'length',
  'level',
  'tStart',
  'tEnd',
  'qStart',
  'qEnd',
  'tstart',
  'tend',
  'qstart',
  'qend',
]);
const colour = /(^.*colo)u(r.*$)/i;
const falseString = /^f(alse)?$/i;

const sanitizer = (data /*: Object */) => {
  const output = {};
  for (const rawKey of Object.keys(data)) {
    const rawValue = data[rawKey];
    let [key, value] = [rawKey, rawValue];
    // process numbers
    if (keyNumbers.has(key)) {
      value = +value;
      if (isNaN(value)) {
        throw new Error(
          `expected key ${rawKey} to be a number, not ${String(rawValue)})`
        );
      }
    }
    // process British spelling
    if (colour.test(key)) {
      key = key.replace(colour, '$1$2');
    }
    // process booleans
    if (key === 'display') {
      if (typeof value === 'string') {
        value = !falseString.test(value);
      } else {
        value = !!value;
      }
    }
    if (value) {
      // recursive sanitization, if need be
      if (Array.isArray(value)) {
        value = value.map(item => {
          if (!item || typeof item !== 'object') return item;
          return sanitizer(item);
        });
      } else if (typeof value === 'object') {
        value = sanitizer(value);
      }
    }
    output[key] = value;
  }
  return output;
};

export default sanitizer;
