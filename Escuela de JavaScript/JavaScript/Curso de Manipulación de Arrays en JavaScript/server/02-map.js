const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
const newArray = [];
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArray.push(element + '++');
}
console.log('original', letters);
console.log('new', newArray);

console.log('---------------------------');

const newArray2 = letters.map(item => item + '--');

console.log('original', letters);
console.log('new', newArray2);