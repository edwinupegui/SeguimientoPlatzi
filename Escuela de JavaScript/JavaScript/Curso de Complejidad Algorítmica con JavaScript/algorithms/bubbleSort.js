// Complejidad Temporal ---> 0( n^2 )
// Complejidad Espacial ---> 0( n )
// Espacio auxiliar ---> O(1)

function bubbleSort(arreglo) { //O(n)
  let longitud = arreglo.length; // O(1) // O(1)
  for (let i = 0; i < longitud; i++) { // O(n^2) // O(1)
    for (let j = 0; j < longitud; j++) { // O(n) // O(1)
      if (arreglo[j] > arreglo[j + 1]) { // O(1)
        let temporal = arreglo[j]; // O(1) // O(1)
        arreglo[j] = arreglo[j + 1]; // O(1)
        arreglo[j + 1] = temporal; // O(1)
      }
    }
  }
  return arreglo; // O(1)
}