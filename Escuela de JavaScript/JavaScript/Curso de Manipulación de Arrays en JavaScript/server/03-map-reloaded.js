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
        delivered: false 
    },
    {
        customerName: 'arturo',
        total: 1000,
        delivered: false
    }
];
// console.log('original', orders);

// const newOrders = orders.map(item => item.total);
// console.log('new', newOrders);

// const newOrders2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });
// console.log('original', orders);
// console.log('new2', newOrders2);

const newOrders3 = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    };
});

console.log('original', orders);
console.log('new3', newOrders3);