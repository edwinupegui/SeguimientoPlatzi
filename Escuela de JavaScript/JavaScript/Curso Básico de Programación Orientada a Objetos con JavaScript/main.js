const natalia = {
  name: 'Natalia',
  age: 20,
  cursosAprobados: [
    'php',
    'javascript'
  ],
  aprobarCursos(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
  }
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCursos= function(nuevoCurso) {
  //   this.cursosAprobados.push(nuevoCurso)
  // } 

} 

Student.prototype.aprobarCursos = function(nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso)
} 

const juanita = new Student(
  "Juanita",
  32,
  [
    'Videojuegos',
    'css'
  ]
);

let nombre = prompt('escribe tu nombre')