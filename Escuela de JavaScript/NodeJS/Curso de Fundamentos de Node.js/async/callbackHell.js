function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback();
    }, 1000);
}
function Adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios, ' + nombre);
        otroCallback();
    })
}
function Hablar(callbackHablar) {
    setTimeout(function () {
        console.log('bla bla bla bla...');
        callbackHablar();
    }, 1000)
}

console.log('inciando');
hola('edwin', function () {
    Hablar(function () {
        Hablar(function () {
            Adios('carlos', function () {
                console.log('terminando');
            });
        });
    });
});