/* globals DomainGfx: false */
{
  console.log('library ready');
  console.log(DomainGfx);
  // example 1
  const data1 = {
    length: 400,
    regions: [
      {
        type: 'pfama',
        text: 'Domain',
        colour: '#9999ff',
        display: true,
        startStyle: 'curved',
        endStyle: 'curved',
        start: 40,
        end: 200,
        aliStart: 50,
        aliEnd: 175,
      },
      {
        type: 'pfama',
        text: 'LongFamilyNamesNotShown',
        colour: '#399',
        display: true,
        startStyle: 'straight',
        endStyle: 'straight',
        start: 210,
        end: 250,
        aliStart: 215,
        aliEnd: 245,
      }
    ],
  };
  const cont1 = document.getElementById('1');
  const domainGfx1 = new DomainGfx({parent: cont1, data: data1});
  domainGfx1.render();
  console.log(domainGfx1);
}
