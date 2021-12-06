async function hola(nombre, miCallback) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    })    
}

async function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    })
    
}

async function adios(nombre, otroCallback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adios, ' + nombre);
            resolve();
        }, 1000);
    }); 
}

async function main(){
    await hola("Edwin");
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios("Edwin");

}
console.log('incio del proceso');
main();
console.log('fin del proceso');