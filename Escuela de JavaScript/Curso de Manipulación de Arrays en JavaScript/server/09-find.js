const numbers = [1,20,3,40,5,60,7];

let rta = undefined;
for (var i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element === 30){
        rta = element[i];
        break;
    }
}

console.log('rta',rta);

const rta2 = numbers.find(item => item === 40);

console.log('rta2',rta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];


const rta3 = products.find(item => item.id === '🥞');
console.log('rta3',rta3);

const rta4 = products.findIndex(item => item.id === '🥞');
console.log('findindex',rta4);