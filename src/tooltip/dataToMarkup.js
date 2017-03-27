// @flow
export default (data/*: Object */) => {
  // flatten data, metadata overwrites duplicated
  const _data = {...data, ...(data.metadata || {})};
  // shortcuts and preprocess
  const mainTitle = _data.identifier || _data.type || _data.accession || '';
  const subTitle = _data.accession || '';
  const description = _data.description;
  const source = _data.database || _data.source;
  const position = _data.start;
  const targetStart = _data.targetStart || _data.tStart || _data.tstart;
  const targetEnd = _data.targetEnd || _data.tEnd || _data.tend;
  const queryStart = _data.queryStart || _data.qStart || _data.qstart;
  const queryEnd = _data.queryEnd || _data.qEnd || _data.qend;
  let coordinates;
  if (_data.end) {
    const length = _data.end - _data.start;
    const aliStart = _data.aliStart || _data.start;
    const aliEnd = _data.aliEnd || _data.end;
    let offset = 0;
    if (aliStart - _data.start > 0) {
      offset = (aliStart - _data.start) / length * 100;
    }
    coordinates = `
      ${_data.start}<span style="width: 100px;" class="domain">
        <span class="alignment" style="
          width: ${(aliEnd - aliStart) * 100 / length}px;
          margin-left: ${offset}px;
          background-color: ${_data.color};
        "></span>
      </span>${_data.end}
    `;
  }
  // render to string
  return `
    <table>
      <thead>
        <tr>
          <th colspan="2">
            ${mainTitle || (targetStart && 'Match coordinates')}
            ${(subTitle && subTitle !== mainTitle) ? ` (${subTitle})` : ''}
          </th>
        </tr>
      </thead>
      <tbody>
        ${description ? `
        <tr>
          <td>Description:</td>
          <td>${description}</td>
        </tr>
        ` : ''}
        ${coordinates ? `
        <tr>
          <td>Coordinates:</td>
          <td class="coordinates">${coordinates}</td>
        </tr>
        ` : ''}
        ${(!coordinates && position) ? `
        <tr>
          <td>Position:</td>
          <td>${position}</td>
        </tr>
        ` : ''}
        ${source ? `
        <tr>
          <td>Source:</td>
          <td>${source}</td>
        </tr>
        ` : ''}
        ${targetStart ? `
        <tr>
          <td>Target:</td>
          <td>${targetStart}${targetEnd ? ` - ${targetEnd}` : ''}</td>
        </tr>
        ` : ''}
        ${queryStart ? `
        <tr>
          <td>Query:</td>
          <td>${queryStart}${queryEnd ? ` - ${queryEnd}` : ''}</td>
        </tr>
        ` : ''}
      </tbody>
    </table>
  `;
};
