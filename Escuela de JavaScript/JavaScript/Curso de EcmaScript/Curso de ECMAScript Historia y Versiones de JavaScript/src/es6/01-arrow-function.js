//A traditional function
function square1(num){
  return num * num;
}

//An arrow function
const square2 = (num) => {
  return num * num;
}

//An arrow function with an intrinsic return
const square3 = num => num * num;

console.log(square1(2));
console.log(square2(2));
console.log(square3(2));