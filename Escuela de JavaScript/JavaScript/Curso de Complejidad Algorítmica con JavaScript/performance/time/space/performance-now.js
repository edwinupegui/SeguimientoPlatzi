const performance = require('perf_hooks')

const count = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}

let start = performance.performance.now()
count(5)
let end = performance.performance.now()
let duration = end - start;


console.log('El algoritmo duró', duration, 'ms')
