// import DomainGFX from 'index.js';
const DomainGFX = require('index').default;

describe('basic instantiation', () => {
  let dg;
  it('should create domain graphic object', () => {
    dg = new DomainGFX();
    expect(dg).toBeInstanceOf(DomainGFX);
  });

  it('should contain a functioning render method', () => {
    expect(dg.render).toBeDefined();
    expect(dg.render).not.toThrow();
  });
});
