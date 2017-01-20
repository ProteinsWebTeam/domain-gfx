export default () => ({
  image: {
    headSize: {
      circle: 3,
      square: 5,
      diamond: 4,
      arrow: 3,
      pointer: 3,
      line: 3,
    },
    sequenceEndPadding: 2,
    offset: {
      x: 0,
      y: 0,
    },
    increment: {
      lollipopToLollipop: 7,
      bridgeToBridge: 2,
      bridgeToLollipop: 5,
    },
    largeJaggedSteps: 6,
    fontSize: '10px',
    height: {
      markup: 20,
      region: 20,
      motif: 14,
    },
    opacity: {
      motif: 0.6,
      env: 0.6,
    },
    labelPadding: 3,
    width: {
      residue: 0.5,
    },
    scale: {
      x: 1,
      y: 1,
    },
    highlight: {
      weight: 1,
      color: '#000',
    },
  },
  options: {
    baseUrl: '',
    imageMap: true,
    labels: true,
    tips: true,
    tipStyle: 'pfam',
    newCanvas: true,
  },
});
