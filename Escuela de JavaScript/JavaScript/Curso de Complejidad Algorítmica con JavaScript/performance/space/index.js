const count = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}

const repeatCount = (array) => {
  let repeatArray = array
  return repeatArray
}

const convertToString = (array) => {
  let result = array.map(item => item.toString())
  return result
}

const arrayTwoDimensions = (value) => {
  let x = new Array(value)
  for (let i = 0; i < value; i++){
    x[i] = new Array(value).fill(0)
  }
  return x
}

console.log(arrayTwoDimensions(5))