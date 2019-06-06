// TODO: fix this import
// import DomainGFX from '../src/index';

describe.skip('basic instantiation', () => {
  let dg;
  // beforeAll(() => {
  //   dg = new DomainGFX({}, document.body);
  // });

  // it('should create domain graphic object', () => {
  //   expect(dg).toBeInstanceOf(DomainGFX);
  // });

  it.skip('should contain a functioning render method', () => {
    expect(dg.render).toBeDefined();
    expect(dg.render).not.toThrow();
  });
});
