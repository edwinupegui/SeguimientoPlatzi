
test('agregando un numero positivo que no sea 0', () => {
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});