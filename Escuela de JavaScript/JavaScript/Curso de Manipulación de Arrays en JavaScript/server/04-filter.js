const words = ['spray', 'cena', 'vida', 'elite', 'sumatoria'];

const newArray = [];

for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if(item.length > 6){
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);

const rta = words.filter(item => item.length >= 6);

console.log('filter', rta);
console.log('original', words);

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

const entregas = orders.filter(item => item.delivered && item.total > 100);
console.log('entregas',entregas);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('ar'));