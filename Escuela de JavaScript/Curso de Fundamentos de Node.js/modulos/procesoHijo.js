const { exec, spawn } = require('child_process');

// exec('node modulos/consola.js', (err, stdout, eterr) => {
//     if(err) {
//         console.error(err);
//         return false;

//     }
//     console.log(stdout);
// })

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (data) => {
    console.log('¿Está muerto?');
    console.log(process.killed);
    console.log(data.toString());
})

proceso.on('exit', () => {
    console.log('El proceso terminó')
})