const fs = require('fs');
const { Transform } = require('stream');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('utf8')
// readablesStream.on('data', function (chunk) {
//     // console.log(chunk.toString());
//     data += chunk;
// })

// readablesStream.on('end', function(){
//     console.log(data);
// })

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')


const Transform = stream.Transform;

function Mayus () {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();

};

let mayus = Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout)