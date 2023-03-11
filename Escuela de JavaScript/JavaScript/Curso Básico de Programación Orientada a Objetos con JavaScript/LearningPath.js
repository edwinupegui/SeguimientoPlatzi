class Courses {
  constructor({name, classes = []}) {
    this.name = name;
    this.classes = classes;
  }
}

class LearningPath {
  constructor ({name, courses = []}) {
    this._name = name;
    this.courses = courses;
  }

  get name() {
    return this._name
  }

  set name(nuevoNombre) {
    if (nuevoNombre === 'curso malito de programacion'){
      console.error('Wey... No')
    } else {
      this._name = nuevoNombre
    }
  }
}

const cursoProgramacionBasica = new Courses({
  name: 'Curso programacion basica',
  classes: []
})

cursoProgramacionBasica.name
cursoProgramacionBasica.name = 'Edwin'



const definitivoHTML = new Courses({
  name: 'Curso html y css',
  classes: []
})

const escuelaWeb = new LearningPath({
  name: 'Escuela de desarrollo web',
  courses: [
    cursoProgramacionBasica,
    definitivoHTML
  ]
})


const escuelaData = new LearningPath({
  name: 'Escuela de Data',
  courses: [
    'curso sql',
    'curso mysql'
  ]
})

const escuelaVideoJuegos = new LearningPath({
  name: 'Escuela de Videojuegos',
  courses: [
    'curso unity',
    'curso godot'
  ]
})