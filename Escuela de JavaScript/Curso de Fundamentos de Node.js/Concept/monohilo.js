console.log('Hola Mundo');

let i = 0;
setInterval(function() {
    console.log(i)
    i++

    if (i === 5){
        console.log('salta error')
        var a = 3 + z;
    }
}, 1000);

console.log('segunda instructions');