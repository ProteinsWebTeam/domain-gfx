/* eslint no-new: off */
import DomainGfx from '../src/index';

import data1 from './data-1.json';
import data2 from './data-2.json';
import data3 from './data-3.json';
import data4 from './data-4.json';
import data5 from './data-5.json';
import data6 from './data-6.json';
import data7 from './data-7.json';
import data8 from './data-8.json';

new DomainGfx({ parent: document.getElementById('1'), data: data1 });
new DomainGfx({ parent: document.getElementById('2'), data: data2 });
new DomainGfx({ parent: document.getElementById('3'), data: data3 });
new DomainGfx({ parent: document.getElementById('4'), data: data4 });
new DomainGfx({ parent: document.getElementById('5'), data: data5 });
new DomainGfx({ parent: document.getElementById('6'), data: data6 });
new DomainGfx({ parent: document.getElementById('7'), data: data7 });
new DomainGfx({ parent: document.getElementById('8'), data: data8 });
