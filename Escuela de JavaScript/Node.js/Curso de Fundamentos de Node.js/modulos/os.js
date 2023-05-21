const os = require('os');

console.log(os.arch()); // identificar la arquitectura ej: x64
console.log(os.platform()); // identificar la plataforma ej:linux
console.log(os.cpus().length); // info cpus 
console.log(os.constants); 

const SIZE = 1024;
function kb(bytes){return bytes / SIZE}
function mb(bytes){return kb(bytes) / SIZE}
function gb(bytes){return mb(bytes) / SIZE}


console.log(os.freemem()); // memoria libre
console.log(kb(os.freemem())); // memoria libre
console.log(mb(os.freemem())); // memoria libre
console.log(gb(os.freemem())); // memoria libre
console.log(gb(os.totalmem())); // memoria total

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());




