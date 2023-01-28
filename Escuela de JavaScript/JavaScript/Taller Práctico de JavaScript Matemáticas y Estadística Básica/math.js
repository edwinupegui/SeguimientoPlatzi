const ladoTriangulo1  = 12;
const ladoTriangulo2  = 12;
const baseTriangulo   = 8;
const alturaTriangulo = Math.sqrt((ladoTriangulo1 * ladoTriangulo1) - ((baseTriangulo / 2) * (baseTriangulo / 2)));

const perimetroTriangulo = `${ladoTriangulo1 + ladoTriangulo2 + baseTriangulo} cm`;
const areaTriangulo = `${((baseTriangulo * alturaTriangulo) / 2).toFixed(2)} cm²`;

console.log(perimetroTriangulo)
console.log(areaTriangulo)