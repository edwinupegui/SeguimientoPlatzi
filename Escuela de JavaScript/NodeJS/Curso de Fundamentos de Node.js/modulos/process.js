// const procees = require('process');


process.on('beforeExit', () => {
    console.log('El proceso va a terminar ')
})

process.on('exit', () => {
    console.log('El proceso acabó');
})

process.on('beforeExit', () => {
    console.log('El proceso va a terminar 2')
})

process.on('uncaughtException', (err, origen) => {
    
    console.error('Se nos ha olvidado capturar un error');
    console.error(err);
});
// process.on('uncaughtRejection');

function1();