// Código del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;

// console.log(`Los los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado (ladoCuadrado){
    return ladoCuadrado * 4;
} 

// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

function areaCuadrado (ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
} 

// console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd()

// Código del Triangulo
console.group("Triangulos");
// const ladoTrieangulo1 = 6;
// const ladoTrieangulo2 = 6;
// const ladoTrieangulo3 = 4;
// const alturaTrieangulo = 5.5;


// console.log(`Los lados del triangulo miden: 
// ${ladoTrieangulo1} cm 
// ${ladoTrieangulo2} cm 
// ${ladoTrieangulo3} cm`
// );

// console.log(`La altura del triangulo es: ${alturaTrieangulo} cm`);

function perimetroTriangulo (ladoTrieangulo1, ladoTrieangulo2, base){
    return ladoTrieangulo1 + ladoTrieangulo2 + base;
} 

// console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);

function areaTriangulo (base, alturaTrieangulo){
    return (base * alturaTrieangulo) / 2;
} 

// console.log(`El area del triangulo es: ${areaTriangulo} cm^2`);



console.groupEnd()

console.group("Circulo");

//Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es: ${radioCirculo} cm`);
//Diametro
function diametroCirculo (radioCirculo){
    return radioCirculo * 2;
} 
// console.log(`El diametro del circulo es: ${diametroCirculo} cm`);
// PI
const PI = Math.PI;
// console.log(`El numero PI es: ${PI} `);
//Circunferencia
function perimetroCirculo (radioCirculo){
    const diametro = diametroCirculo(radioCirculo);
    return diametro * PI;
} 
// console.log(`El perimetro del circulo es: ${perimetroCirculo} cm`);
//Area
function areaCiculo (radioCirculo){
    return (radioCirculo * radioCirculo) * PI;
} 
// console.log(`El area del circulo es: ${areaCiculo} cm^2`);


console.groupEnd()

/// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}
function calcularPerimetroTriangulo (){
    const input1 = document.getElementById("InputTrianguloLado1");
    const Lado1 = parseInt(input1.value);
    const input2 = document.getElementById("InputTrianguloLado2");
    const Lado2 = parseInt(input2.value);
    const input3 = document.getElementById("InputTrianguloBase");
    const base = parseInt(input3.value);

    const perimetro = perimetroTriangulo(Lado1, Lado2, base );
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const Lado1 = input1.value;
    const input2 = document.getElementById("InputTrianguloLado2");
    const Lado2 = input2.value;
    const input3 = document.getElementById("InputTrianguloBase");
    const base = input3.value;

    const area = areaCuadrado(value);
    alert(area);

}

