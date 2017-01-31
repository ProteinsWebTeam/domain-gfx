// @flow
export default (
  {className, acceptedMargin}
  /*: {className: string, acceptedMargin: number} */
) => {
  const stylesheet = document.createElement('style');
  stylesheet.textContent = `
.${className} {
  padding-bottom: ${acceptedMargin}px;
  font-family: Sans-Serif;
}
.${className}.hidden {
  pointer-events: none;
  display: block;
  opacity: 0;
  transform: translate(-999px, -999px);
  transform: translate(200vw, 200vh);
}
.${className}___container {
  border-style: solid;
  border-color: #dedede;
  border-width: 1px 2px 2px 1px;
  border-radius: 0.2em;
  background-color: #fff;
  margin-bottom: ${acceptedMargin}px;
}
.${className} thead {
  background-color: #dedede;
}
.${className} td:first-of-type {
  font-weight: bold;
}
.${className} th {
  text-align: left;
}
.${className} .coordinates {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.${className} .domain {
  margin: 0 0.5em;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 0.5em;
  background-color: black;
}
.${className} .alignment {
  display: inline-block;
  margin-left: 0;
  height: 1em;
  border-radius: 0.2em;
  background-color: grey;
}`;
  return stylesheet;
};
