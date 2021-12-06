// console.log("helo typescript");

// function add(a: number, b: number){
//     return a + b;
// }

// const sum = add(2, 3);

// // tipos de datos 

// // Boolean

// let muted: boolean = true;
// muted = false;

// // Numbers

// let numerador: number = 42;
// let denominador: number = 6.5;
// let resultado: number = numerador / denominador;

// // String

// let nombre: string = "Edwin";
// let saludo: string = `Mi nombre es ${nombre}`;

// // Arreglos

// let people: string[] = [];

// people = ["isabel", "camilo", "pedro"];


// people.push("99");

// let peopleAndNumbers: Array<string | number> = [];

// peopleAndNumbers.push(99);
// peopleAndNumbers.push("99");

// // Enum

// enum Color {
//     Rojo = "Rojo",
//     Verde = "Verde",
//     Azul  ="Azul"
// }
// let ColorFavorito: Color = Color.Verde;
// console.log(`mi color favorito es: ${ColorFavorito}` );


// // Any

// let comodin: any = "Joker";
// comodin = { type: "wildcard"}

// // object

// let someObject: object = { tupe: "wildcard"}

// function add (a: number, b:number): number{
//     return a +b;
// }

// const sum = add(5,9);

// function createAdder (a:number ): (number) => number {
//     return function(b:number){
//         return b+a;
//     }
// }

// const addFour = createAdder(5);
// const fourPlus6 = addFour(3);
// console.log(fourPlus6)

// function fullName (firstName: string, lastName?: string = "Smith"): string {
//     return `${firstName} ${lastName}`
// }

// const richard = fullName("richard")

// console.log(richard)

// interfaces
// try {

//     interface color {
//         rojo: "rojo"
//     }
//     interface Rectangulo {
//         ancho: number;
//         alto: number;
//         color?: color
//     }
    
//     let Rect: Rectangulo = {
//         ancho: 4,
//         alto: 6,
//         color: this.color
    
//     }
    
//     function area (r:Rectangulo){
//         return r.alto * r.ancho
//     }
    
//     const areaRect = area (Rect);
//     console.log(areaRect);
    
//     Rect.toString = function () {
//         return this.color ? `rectangulo ${this.color}` : "un rectangulo sin color"
//     }

//     console.log(Rect.toString())




// } catch (error) {
//     console.error(error.messenger);
// }


import Singleton from './Singleton';

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log('A es igual a B?', a === b);

console.log('A es igual')