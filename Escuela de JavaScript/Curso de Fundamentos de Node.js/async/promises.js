function hola(nombre, miCallback) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    })    
}

function Hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla bla...');
            // resolve(nombre);
            reject("hay un error")
        }, 1000);
    })
    
}

function Adios(nombre, otroCallback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios, ' + nombre);
            resolve();
        }, 1000);
    }); 
}

//
console.log('iniciado el proceso')
hola('Carlos')
    .then(Hablar)
    .then(Adios)
    .then((nombre) => {
        console.log('terminado el proceso...')
    })
    .catch(error => {
        console.log('Hay un error en el catch');
        console.log(error);
    })