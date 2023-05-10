// Complejidad Temporal ---> 0(n)
// Complejidad Espacial ---> 0(n)
// Espacio auxiliar --->  O(1)

function linearSearch(arreglo, clave) { //O(n)
  for (let indice = 0; indice < arreglo.length; indice++) { // O(n) //n(1)
    if (arreglo[indice] === clave) { // O(1)
      return indice; // O(1)
    }
  }
  return -1; // O(1)
}