function sum(num1, num2) {
  return num1 + num2
}

function calc(num1, num2, callback){
  return callback(num1, num2)
}

console.log(calc(1, 2, sum))

setTimeout(() => {
  console.log('hola js')
}, 5000);

const gretting = (name) => {
console.log(`Hola ${name}`)
}

setTimeout(gretting, 2000, 'Edwin');

setTimeout(() => {
  gretting('Edwin')
}, 2000);