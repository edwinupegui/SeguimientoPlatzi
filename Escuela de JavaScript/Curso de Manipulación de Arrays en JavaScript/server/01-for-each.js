const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log(element);

}
console.log('--------------------------------')

letters.forEach(element => {
    console.log(element);
});