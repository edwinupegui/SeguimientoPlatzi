const count = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}

console.time('duracion-contar')
count(5)
console.timeEnd('duracion-contar')