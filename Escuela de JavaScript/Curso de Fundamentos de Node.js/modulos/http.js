const http = require('http');

http.createServer(function(req, res){
    console.log("Nueva petición")
    console.log(req.url);

    res.writeHead(201, {'contentype': 'text/plain'});
    res.write('Hola ya se usar http de nodejs')

    res.end();
}).listen(3000);

console.log("Escuchando http en le puerto 3000");