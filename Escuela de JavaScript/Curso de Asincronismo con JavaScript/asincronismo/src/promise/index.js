const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('hey!! prueba 1 exitosa')
        }else{
            reject('Oops!!')
        }
    })
}

somethingWillHappen()
.then (response => console.log(response))
.catch (err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(()=>{
                resolve('true prueba 2 exitosa')
            }, 2000)
        }else{
            const error = new Error('Ooops!!')
            reject(error)
        }
    })
}

somethingWillHappen2()
.then (response => console.log(response))
.catch (err => console.error(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then (response => {
        console.log('Array of results ', response)
    })
    .catch (err => {
        console.log(err)
    }) 

