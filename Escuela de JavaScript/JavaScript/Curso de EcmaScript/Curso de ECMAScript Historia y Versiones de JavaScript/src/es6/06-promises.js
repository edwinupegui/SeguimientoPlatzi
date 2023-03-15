const anotherFuncion = () => {
  return new Promise((resolve, reject) => {
      if (true) {
          resolve("hey!!");
      } else {
          reject ( "whooooops!");
      }
  })
}

anotherFuncion()
.then(response => console.log('perfect', response))
.catch(err => console.log('error:', err));