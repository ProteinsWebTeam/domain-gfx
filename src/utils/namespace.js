// @flow
import uniqueId from './uniqueId';

const supportsSymbol = window && window.Symbol;

export default supportsSymbol ? Symbol('lib namespace') : `_${uniqueId()}`;
