const anotherFuncion = () => {
  return new Promise((resolve, reject) => {
    (true) ? resolve("hey!!") : reject ( "whooooops!"); 
  })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log("finally"));