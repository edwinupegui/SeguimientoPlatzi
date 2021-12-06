const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const product = products.find(item => item.id === "🍔");
if(product){
    myProducts.push(product);
    const index = products.indexOf(product);
    products.splice(index, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// update
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
    id: "🥞",
    changes: {
        price: 140,
        description: 'delicioso'
    }
}
const product2 = productsV2.findIndex(item => item.id === update.id);
productsV2[product2] = {
    ...productsV2[product2],
    ...update.changes
};
console.log(productsV2)