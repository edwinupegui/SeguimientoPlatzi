function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        }catch(e) {
            callback(e);
        }
    })
}
try {
    asincrona(function (err, dato){
        if (err){
            // console.error('tenemos un error');
            // console.error(err);
            // throw err;
            return false
        }
    
        console.log('todo ha ido bien mi data es: ', dato)
    })
    
}catch(err){
    console.error('hemos capturado un error');
    console.error(e);

}
