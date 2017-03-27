/* globals DomainGfx: false */
/* eslint no-new: off */
{
  // Example 1
  const data1 = {
    length: 400,
    hits: [
      {
        qstart: 2,
        qend: 10,
        tstart: 10,
        tend: 58,
      }
    ],
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
  new DomainGfx({parent: cont1, data: data1});

  // Example 2
  const data2 = {
    length: 400,
    regions: [
      {
        type: 'pfama',
        text: 'PartN',
        colour: '#9999ff',
        display: true,
        startStyle: 'jagged',
        endStyle: 'curved',
        start: 10,
        end: 110,
      },
      {
        type: 'pfama',
        text: 'PartN_C',
        colour: '#399',
        display: true,
        startStyle: 'jagged',
        endStyle: 'jagged',
        start: 115,
        end: 204,
      },
      {
        type: 'pfama',
        text: 'PartC',
        colour: '#1fc01f',
        display: true,
        startStyle: 'curved',
        endStyle: 'jagged',
        start: 210,
        end: 350,
      }
    ]
  };
  const cont2 = document.getElementById('2');
  new DomainGfx({parent: cont2, data: data2});

  // Example 3
  const data3 = {
    length: 200,
    regions: [
      {
        type: 'pfama',
        text: 'HEAT',
        colour: '#1fc01f',
        display: true,
        startStyle: 'straight',
        endStyle: 'straight',
        start: 2,
        end: 34
      },
      {
        type: 'pfama',
        text: 'HEAT',
        colour: '#1fc01f',
        display: true,
        startStyle: 'straight',
        endStyle: 'straight',
        start: 82,
        end: 118
      },
      {
        type: 'pfama',
        text: 'HEAT',
        colour: '#1fc01f',
        display: true,
        startStyle: 'straight',
        endStyle: 'straight',
        start: 120,
        end: 155
      },
      {
        type: 'pfama',
        text: 'HEAT',
        colour: '#1fc01f',
        display: true,
        startStyle: 'straight',
        endStyle: 'straight',
        start: 159,
        end: 195
      }
    ]
  };
  const cont3 = document.getElementById('3');
  new DomainGfx({parent: cont3, data: data3});

  // Example 4
  const data4 = {
    length: 200,
    regions: [
      {
        type: 'pfama',
        text: 'IMPDH',
        colour: '#1fc01f',
        display: true,
        startStyle: 'curved',
        endStyle: 'jagged',
        start: 5,
        end: 80
      },
      {
        type: 'pfama',
        text: 'CBS',
        colour: '#c00f0f',
        display: true,
        startStyle: 'curved',
        endStyle: 'curved',
        start: 81,
        end: 135
      },
      {
        type: 'pfama',
        text: 'IMPDH',
        colour: '#1fc01f',
        display: true,
        startStyle: 'jagged',
        endStyle: 'curved',
        start: 136,
        end: 197
      }
    ],
    markups: [
      {
        type: 'Nested',
        colour: '#000000',
        display: true,
        v_align: 'top',
        start: 76,
        end: 136
      }
    ]
  };
  const cont4 = document.getElementById('4');
  new DomainGfx({parent: cont4, data: data4});

  // Example 5
  const data5 = {
    length: 200,
    motifs: [
      {
        type: 'sig_p',
        colour: '#ff9c00',
        display: true,
        start: 1,
        end: 27
      },
      {
        type: 'low_complexity',
        colour: '#0FF',
        display: true,
        start: 39,
        end: 47
      },
      {
        type: 'low_complexity',
        colour: '#0FF',
        display: true,
        start: 67,
        end: 76
      },
      {
        type: 'coiled_coil',
        colour: '#9cff00',
        display: true,
        start: 103,
        end: 123
      },
      {
        type: 'transmembrane',
        colour: '#F00',
        display: true,
        start: 155,
        end: 175
      },
      {
        type: 'transmembrane',
        colour: '#F00',
        display: true,
        start: 180,
        end: 195
      }
    ]
  };
  const cont5 = document.getElementById('5');
  new DomainGfx({parent: cont5, data: data5});

  // Example 6
  const data6 = {
    length: 400,
    regions: [
      {
        colour: '#1fc01f',
        endStyle: 'curved',
        startStyle: 'curved',
        display: true,
        end: 104,
        href: '/family/Inhibitor_I29',
        text: 'Inhibitor_I29',
        metadata: {
          scoreName: 'e-value',
          score: '1.3e-38',
          description: 'Inhibitor_I29',
          accession: 'PF08246',
          end: 104,
          database: 'pfam',
          identifier: 'Inhibitor_I29',
          type: 'Domain',
          start: 48
        },
        type: 'pfama',
        start: 48
      },
      {
        colour: '#c00f0f',
        endStyle: 'curved',
        startStyle: 'curved',
        display: true,
        end: 343,
        href: '/family/Peptidase_C1',
        text: 'Peptidase_C1',
        modelLength: 307,
        metadata: {
          scoreName: 'e-value',
          score: '1.3e-38',
          description: 'Peptidase_C1',
          accession: 'PF00112',
          end: 343,
          database: 'pfam',
          identifier: 'Peptidase_C1',
          type: 'Domain',
          start: 134
        },
        type: 'pfama',
        start: 134
      }
    ],
    markups: [
      {
        lineColour: '#CCC',
        colour: '#CCC',
        display: true,
        end: 196,
        v_align: 'top',
        metadata: {
          database: 'pfam',
          type: 'Disulphide, 155-196',
          end: 196,
          start: 155
        },
        type: 'Disulphide',
        start: 155
      },
      {
        lineColour: '#CCC',
        colour: '#CCC',
        display: true,
        end: 228,
        v_align: 'top',
        metadata: {
          database: 'pfam',
          type: 'Disulphide, 189-228',
          end: 228,
          start: 189
        },
        type: 'Disulphide',
        start: 189
      },
      {
        lineColour: '#CCC',
        colour: '#CCC',
        display: true,
        end: 333,
        v_align: 'top',
        metadata: {
          database: 'pfam',
          type: 'Disulphide, 286-333',
          end: 333,
          start: 286
        },
        type: 'Disulphide',
        start: 286
      },
      {
        lineColour: '#000',
        colour: '#F36',
        display: true,
        residue: 'C',
        headStyle: 'diamond',
        v_align: 'bottom',
        type: 'Active site',
        metadata: {
          database: 'pfam',
          description: 'Active site, C158',
          start: 158
        },
        start: 158
      },
      {
        lineColour: '#000',
        colour: '#90C',
        display: true,
        residue: 'H',
        headStyle: 'diamond',
        v_align: 'bottom',
        type: 'Pfam predicted active site, H292',
        metadata: {
          database: 'pfam',
          description: 'Pfam predicted active site, H292',
          start: 292
        },
        start: 292
      },
      {
        lineColour: '#000',
        colour: '#F6F',
        display: true,
        residue: 'N',
        headStyle: 'diamond',
        v_align: 'bottom',
        type: 'Pfam predicted active site, N308',
        metadata: {
          database: 'pfam',
          description: 'Pfam predicted active site, N308',
          start: 308
        },
        start: 308
      }
    ],
    motifs: [
      {
        colour: '#ff9c00',
        metadata: {
          database: 'seq',
          type: 'Signal peptide',
          end: 26,
          start: 1
        },
        type: 'sig_p',
        display: true,
        end: 26,
        start: 1
      }
    ]
  };
  const cont6 = document.getElementById('6');
  new DomainGfx({parent: cont6, data: data6});

  // Example 7
  const data7 = {
    length: 200,
    markups: [
      {
        lineColour: '#666',
        colour: '#F36',
        display: true,
        v_align: 'top',
        headStyle: 'square',
        type: 'Red square, above sequence',
        start: 20
      },
      {
        lineColour: '#F00',
        colour: '#F0F',
        display: true,
        v_align: 'bottom',
        headStyle: 'square',
        type: 'Purple square, red line, below sequence',
        start: 40
      },
      {
        lineColour: '#666',
        colour: '#F00',
        display: true,
        v_align: 'top',
        headStyle: 'diamond',
        type: 'Red diamond, above sequence',
        start: 60
      },
      {
        lineColour: '#666',
        colour: '#0F0',
        display: true,
        v_align: 'bottom',
        headStyle: 'circle',
        type: 'Green circle, below sequence',
        start: 80
      },
      {
        lineColour: '#666',
        colour: '#0F0',
        display: true,
        v_align: 'top',
        headStyle: 'arrow',
        type: 'Green arrow, above sequence',
        start: 100
      },
      {
        lineColour: '#666',
        colour: '#08F',
        display: true,
        v_align: 'bottom',
        headStyle: 'pointer',
        type: 'Blue pointer, below sequence',
        start: 120
      },
      {
        lineColour: '#666',
        colour: '#F80',
        display: true,
        v_align: 'top',
        headStyle: 'line',
        type: 'Orange line, above sequence',
        start: 140
      }
    ]
  };
  const cont7 = document.getElementById('7');
  new DomainGfx({parent: cont7, data: data7});

  // Example 8
  const data8 = {
    length: 950,
    regions: [
      {
        modelStart: 5,
        modelEnd: 292,
        colour: '#2dcf00',
        endStyle: 'jagged',
        startStyle: 'jagged',
        display: true,
        end: 361,
        aliEnd: 361,
        href: '/family/PF00082',
        text: 'Peptidase_S8',
        modelLength: 307,
        metadata: {
          scoreName: 'e-value',
          score: '1.3e-38',
          description: 'Subtilase family',
          accession: 'PF00082',
          end: 587,
          database: 'pfam',
          aliEnd: 573,
          identifier: 'Peptidase_S8',
          type: 'Domain',
          aliStart: 163,
          start: 159
        },
        type: 'pfama',
        aliStart: 163,
        start: 159
      },
      {
        modelStart: 5,
        modelEnd: 292,
        colour: '#2dcf00',
        endStyle: 'jagged',
        startStyle: 'jagged',
        display: true,
        end: 587,
        aliEnd: 573,
        href: '/family/PF00082',
        text: 'Peptidase_S8',
        modelLength: 307,
        metadata: {
          scoreName: 'e-value',
          score: '1.3e-38',
          description: 'Subtilase family',
          accession: 'PF00082',
          end: 587,
          database: 'pfam',
          aliEnd: 573,
          identifier: 'Peptidase_S8',
          type: 'Domain',
          aliStart: 163,
          start: 159
        },
        type: 'pfama',
        aliStart: 470,
        start: 470
      },
      {
        modelStart: 12,
        modelEnd: 100,
        colour: '#ff5353',
        endStyle: 'curved',
        startStyle: 'jagged',
        display: true,
        end: 469,
        aliEnd: 469,
        href: '/family/PF02225',
        text: 'PA',
        modelLength: 100,
        metadata: {
          scoreName: 'e-value',
          score: '7.1e-09',
          description: 'PA domain',
          accession: 'PF02225',
          end: 469,
          database: 'pfam',
          aliEnd: 469,
          identifier: 'PA',
          type: 'Family',
          aliStart: 385,
          start: 362
        },
        type: 'pfama',
        aliStart: 385,
        start: 362
      },
      {
        modelStart: 1,
        modelEnd: 112,
        colour: '#5b5bff',
        endStyle: 'curved',
        startStyle: 'curved',
        display: true,
        end: 726,
        aliEnd: 726,
        href: '/family/PF06280',
        text: 'DUF1034',
        modelLength: 112,
        metadata: {
          scoreName: 'e-value',
          score: '1.1e-13',
          description: 'Fn3-like domain (DUF1034)',
          accession: 'PF06280',
          end: 726,
          database: 'pfam',
          aliEnd: 726,
          identifier: 'DUF1034',
          type: 'Domain',
          aliStart: 613,
          start: 613
        },
        type: 'pfama',
        aliStart: 613,
        start: 613
      }
    ],
    markups: [
      {
        lineColour: '#ff0000',
        colour: '#000000',
        display: true,
        end: 470,
        v_align: 'top',
        metadata: {
          database: 'pfam',
          type: 'Link between discontinous regions',
          end: 470,
          start: 361
        },
        type: 'Nested',
        start: 361
      },
      {
        lineColour: '#333333',
        colour: '#e469fe',
        display: true,
        residue: 'S',
        headStyle: 'diamond',
        v_align: 'top',
        type: 'Pfam predicted active site',
        metadata: {
          database: 'pfam',
          description: 'S Pfam predicted active site',
          start: 538
        },
        start: 538
      },
      {
        lineColour: '#333333',
        colour: '#e469fe',
        display: true,
        residue: 'D',
        headStyle: 'diamond',
        v_align: 'top',
        type: 'Pfam predicted active site',
        metadata: {
          database: 'pfam',
          description: 'D Pfam predicted active site',
          start: 185
        },
        start: 185
      },
      {
        lineColour: '#333333',
        colour: '#e469fe',
        display: true,
        residue: 'H',
        headStyle: 'diamond',
        v_align: 'top',
        type: 'Pfam predicted active site',
        metadata: {
          database: 'pfam',
          description: 'H Pfam predicted active site',
          start: 235
        },
        start: 235
      }
    ],
    metadata: {
      database: 'uniprot',
      identifier: 'Q560V8_CRYNE',
      organism: 'Cryptococcus neoformans (Filobasidiella neoformans)',
      description: 'Putative uncharacterized protein',
      taxid: 5207,
      accession: 'Q560V8'
    },
    motifs: [
      {
        colour: '#ffa500',
        metadata: {
          database: 'Phobius',
          type: 'sig_p',
          end: 23,
          start: 1
        },
        type: 'sig_p',
        display: true,
        end: 23,
        start: 1
      },
      {
        colour: '#00ffff',
        metadata: {
          database: 'seg',
          type: 'low_complexity',
          score: '2.5100',
          end: 21,
          start: 3
        },
        type: 'low_complexity',
        display: false,
        end: 21,
        start: 3
      },
      {
        colour: '#86bcff',
        metadata: {
          database: 'seg',
          type: 'low_complexity',
          score: '1.4900',
          end: 156,
          start: 134
        },
        type: 'low_complexity',
        display: true,
        end: 156,
        start: 134
      },
      {
        colour: '#00ffff',
        metadata: {
          database: 'seg',
          type: 'low_complexity',
          score: '2.0200',
          end: 187,
          start: 173
        },
        type: 'low_complexity',
        display: false,
        end: 187,
        start: 173
      },
      {
        colour: '#00ffff',
        metadata: {
          database: 'seg',
          type: 'low_complexity',
          score: '2.0800',
          end: 218,
          start: 207
        },
        type: 'low_complexity',
        display: false,
        end: 218,
        start: 207
      },
      {
        colour: '#00ffff',
        metadata: {
          database: 'seg',
          type: 'low_complexity',
          score: '2.1300',
          end: 231,
          start: 220
        },
        type: 'low_complexity',
        display: false,
        end: 231,
        start: 220
      },
      {
        colour: '#00ffff',
        metadata: {
          database: 'seg',
          type: 'low_complexity',
          score: '2.0000',
          end: 554,
          start: 538
        },
        type: 'low_complexity',
        display: false,
        end: 554,
        start: 538
      },
      {
        colour: '#86bcff',
        metadata: {
          database: 'seg',
          type: 'low_complexity',
          score: '1.9100',
          end: 590,
          start: 578
        },
        type: 'low_complexity',
        display: true,
        end: 590,
        start: 588
      },
      {
        colour: '#00ffff',
        metadata: {
          database: 'seg',
          type: 'low_complexity',
          score: '1.7600',
          end: 831,
          start: 822
        },
        type: 'low_complexity',
        display: false,
        end: 831,
        start: 822
      },
      {
        colour: ['#ff7ff0', '#f2ff7f', '#7ff2ff'],
        href: '/pfamb/PB075017',
        type: 'pfamb',
        metadata: {
          database: 'pfam',
          identifier: 'Pfam-B_75017',
          type: 'Pfam-B',
          start: 791,
          end: 949,
          accession: 'PB075017'
        },
        start: 791,
        end: 949,
        display: true
      }
    ]
  };
  const cont8 = document.getElementById('8');
  new DomainGfx({parent: cont8, data: data8});
}
