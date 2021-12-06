function otraFuncion(){
    return seRompe();
}

function seRompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){
        try{
            return 3 + z;
        }catch(err){
            console.error(err.message);
            cb(err);
        }
        
    }, 1000)
}

try{
    // seRompe();
    seRompeAsincrona(function(){
        console.log('hay error')
    });
} catch(err){
    console.error('Algo se ha roto');
    console.error(err.message);
    console.log('pero no pasa nada, lo hemos capturado');
}