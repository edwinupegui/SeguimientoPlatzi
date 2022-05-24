const matriz = [
    [1,2,3],
    [4,5,6,[2,3,4]],
    [7,8,9,[8,6,4]]
];

const newArray = [];

for (let i = 0; i < matriz.length; i++){
    const array = matriz[i];
    for (let j = 0; j < array.length; j++){
        const element = array[j];
        newArray.push(element)
    }
}

console.log('for: ', newArray);
const aplanado = matriz.flat(2);
console.log('aplanado: ', aplanado);