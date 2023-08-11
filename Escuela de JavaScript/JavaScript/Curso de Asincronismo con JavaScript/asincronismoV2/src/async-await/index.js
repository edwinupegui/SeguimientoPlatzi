const nfAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 2000)
      : reject(new Error('Error!'))
  })
}

const anotherFn = async () => {
  const somethig = await nfAsync()
  console.log(somethig)
  console.log('hello!!')
}

console.log('Before')
anotherFn()
console.log('After')