import FreeStudent from './freeStudent.mjs'
import BasicStudent from './basicStudent.mjs'
import ExpertStudent from './expertStudent.mjs'

//* Estudiantes ---------------------
const miguel = new ExpertStudent({
  id: 1,
  name: 'Miguel',
  email: 'miguel@gmail.com',
  username: 'mike',
  points: 40000,
  approvedCourses: ['cursoProgramacionBasica'],
  learningPaths: ['escuelaDesarrolloWeb']
});
console.log(miguel);

const juan = new FreeStudent({
  id: 2,
  name: 'Juan',
  email: 'juan@gmail.com',
  username: 'juanDC',
  points:  100000,
})
console.log(juan)
juan.approveCourse('cursoProgramacionBasica')
juan.approveCourse('cursoIntroMarketingDigital')
console.log(juan.approvedCourses)

const daniel = new BasicStudent({
  id: 3,
  name: 'Daniel',
})
console.log(daniel)
daniel.approveCourse('cursoProgramacionBasica')
daniel.approveCourse('cursoIntroMarketingDigital')
console.log(daniel.approvedCourses)