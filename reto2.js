// hash: 954a935d4d1fb16d783d4640e20b9d52, S = 9

function sortedSquares(array, s) {
  let ss = s * 10 + s;
  let arraySquares = [];

  if (array.length === 0) {
    console.log("el arreglo no debe estar vacío");
    return;
  }

  for (let number of array) {
    if (isNaN(number)) {
      console.log("el arreglo debe contener solo números");
      return;
    }

    let squares = number ** 2;
    if (squares <= ss) {
      arraySquares.push(squares);
    }
  }

  function sortAsc(array) {
    // Caso en el que si el array tiene 1 o 0 elementos, ya está ordenado
    if (array.length <= 1) {
      return array;
    }

    let pivot = array[array.length - 1]; // el pivote será el último valor del arreglo
    let less = [];
    let greater = [];

    // ordenamiento
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        less.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
    return sortAsc(less).concat(pivot, sortAsc(greater)); // concatenar los arrays y el pivote
  }

  return sortAsc(arraySquares);
}

let arrayE = [-6, -5, 0, 5, 6];

console.log("Arreglo original:", arrayE);
console.log(
  "Arreglo de cuadrados ordenados de forma ascendente:",
  sortedSquares(arrayE, 9)
);

/* ejemplos
[1, 2, 3, 5, 6, 8, 9]
[-2, -1]
[-6, -5, 0, 5, 6]
[-10, 10]
*/
