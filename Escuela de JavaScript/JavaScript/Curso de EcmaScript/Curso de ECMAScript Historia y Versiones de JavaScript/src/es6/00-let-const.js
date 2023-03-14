// VAR
var var1 = 'var';
console.log(var1);

//LET
//added in ES6 its scope is limited to the block where it is declared
//and it cannot be redeclared in its scope
let let1 = 'let';
console.log(let1);

//CONST
//added in ES6 its content can be defined only when it's declared and 
//after that it can't changed and can't be redifined, its scope is similar to the LET
const const1 = 'const';
console.log(const1);


//An example of the scope
const func = () => {
    if(true){
        var a = 'a';
        let b = 'b';
        const c = 'c';
    }
    console.log(a);
    console.log(b);
    console.log(c);
}

func()