let saludo = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log(`hola ${saludo}`);
console.log(`Mi web era ${web}`);