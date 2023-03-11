//prototipos con la sintaxis de clases

class Student2 {
  constructor({
    name, age, cursosAprobados, email
  }) {
    this.email = email;
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const miguelito = new Student2(
  {
    name: 'miguel',
    age: 32,
    email: 'mi@mi.com',
    cursosAprobados: [
      'java',
      'php'
    ]
  }
)