const text = 'Hola Mundo';
const fruits = ['Banana', 'Manzana', 'Melon', 'Uva'];


// Comparación de textos
test('Debe contener un texto', () => {
  expect(text).toMatch(/Mundo/);
}); 
// Comparación de elementos en un arreglo
test('¿Tenemos una banana?', () => {
  expect(fruits).toContain('Banana');
});
// Comparación de numeros (Mayor que)
test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});
// Validación de booleanos función para verdaderos
test('Verdadero', () => {
  expect(true).toBeTruthy();
})
// Validación de booleanos función para falsos
test('falso', () => {
  expect(false).toBeFalsy();
})

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('probar callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});