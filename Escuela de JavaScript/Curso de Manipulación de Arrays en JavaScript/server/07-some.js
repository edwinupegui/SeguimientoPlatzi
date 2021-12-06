const numbers = [1,2,3,4,5,6,7,8,9,10];

let rta = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);

const rta2 = numbers.some(item => item % 2 === 0);

console.log(rta2);

const orders = [

    {
        customerName: 'John',
        total: 100,
        delivered: true
    },
    {
        customerName: 'pedro',
        total: 600,
        delivered: false 
    },
    {
        customerName: 'carlos',
        total: 1000,
        delivered: false
    },
    {
        customerName: 'felipe',
        total: 100,
        delivered: true
    },
    {
        customerName: 'jose',
        total: 600,
        delivered: true 
    },
    {
        customerName: 'arturo',
        total: 1000,
        delivered: false
    }
];

const rta3 = orders.some(item => item.delivered);

console.log(rta3);