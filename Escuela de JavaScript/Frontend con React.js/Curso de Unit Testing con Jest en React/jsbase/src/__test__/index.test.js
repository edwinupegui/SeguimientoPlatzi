const randomString = require('../index');


// describe() divide el conjunto de pruebas en componentes 
describe('Probar funcionalidades de randomStrings', () => {
  test('probar la funcionalidad', () => {
    expect(typeof(randomString())).toBe('string');
  });
  test('Comprobar que no existe una ciudad', () => {
    expect(randomString()).not.toMatch(/Medellín/);
  })
});