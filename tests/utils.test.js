/* global global: false */
import uniqueId from '../src/utils/uniqueId';

describe('uniqueId', () => {
  it('should generate unique ids', () => {
    const testNum = 100;
    const generatedSet = new Set();
    for (let i = 0; i < testNum; i++) {
      generatedSet.add(uniqueId());
    }
    expect(generatedSet.size).toBe(testNum);
  });
});

describe('namespace', () => {
  const testNamespace = () => {
    const import1 = require('../src/utils/namespace').default;
    const import2 = require('../src/utils/namespace').default;
    expect(import1).toBe(import2);
  };

  it('should share a same namespace', testNamespace);

  it('should share a same namespace even if Symbol is not supported', () => {
    const s = global.Symbol;
    testNamespace();
    global.Symbol = s;
  });
});
