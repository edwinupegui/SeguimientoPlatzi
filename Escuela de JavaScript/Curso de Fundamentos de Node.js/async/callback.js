function hola(nombre, miCallback) {
    setTimeout(function(){
        console.log('Hola, '+ nombre);
        miCallback();
    }, 1000);
}
function Adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios, '+ nombre);
        otroCallback();
    })
}
console.log('inciando');
hola('edwin', function(){
    Adios('carlos', function(){
        console.log('terminando');
    });
});
