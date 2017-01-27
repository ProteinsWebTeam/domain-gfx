const svgElements = require('renderer/svg/svg');
const svg = svgElements.default;

describe('SVG HOC', () => {
  const rectCreator = svg('rect');
  it('should return an other function', () => {
    expect(typeof rectCreator).toBe('function');
  });

  describe('Element creator', () => {
    it('should create an element', () => {
      expect(rectCreator() instanceof Element).toBeTruthy();
    });
    it('should create different elements every time it is called', () => {
      const testNum = 100;
      const set = new Set();
      for (let i = 0; i < testNum; i++) {
        set.add(rectCreator());
      }
      expect(set.size).toBe(testNum);
    });
  });
});
