export default (element) => {
  return {
    set (key, value) {
      element.setAttribute(`data-${key}`, value);
    },
    get (key) {
      return element.getAttribute(`data-${key}`);
    }
  };
};
