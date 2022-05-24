const elements = [1,2,3,4,5,6,7,8,9];
const otherElements = [10,11,12,13,14,15,16,17,18,];


const newArray = [...elements];
for (let i = 0; i < otherElements.length; i++) {
    const element = otherElements[i];
    newArray.push(element)
}
console.log('for: ', newArray);

const concat = elements.concat(otherElements);
const concat2 = [...elements, ...otherElements];

console.log('concat: ', concat);
console.log('concat: ', concat2);