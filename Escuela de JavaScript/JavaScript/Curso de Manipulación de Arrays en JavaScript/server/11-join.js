const elements = ['fire', 'air', 'water', 'eart'];

let rtaFinal = '';
const separator = '--' ;
for (let i = 0; i < elements.length; i++) {
    const item = elements[i];
    rtaFinal = rtaFinal + item + separator;

    
}

console.log('for', rtaFinal);

const rtaJoin = elements.join('--');

console.log('join', rtaJoin);

const title = 'Curso de manipulación de arrays';

const titleFinal = title.split(' ').join('-').toLowerCase();
console.log(titleFinal)