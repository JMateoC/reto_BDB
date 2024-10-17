function coinsChange(array) {
  if (
    array.length === 0 ||
    array.some((number) => !Number.isInteger(number) || number <= 0)
  ) {
    console.log(
      "El arreglo no debe estar vacío y debe contener números enteros positivos"
    );
    return;
  }

  let acumChange = 0;
  let firstNoChange = 1;

  array.sort((a, b) => a - b); // ordenando el array de manera ascendente

  for (let coin of array) {
    if (coin > firstNoChange) {
      return firstNoChange; // retorna el valor del acumulado + 1 si se cumple la condición
    } else {
      acumChange += coin; // se acumula el valor de cambio total
      firstNoChange = acumChange + 1;
    }
  }

  return firstNoChange; // valor del primer cambio que no se puede dar
}

let coins = [5, 7, 1, 1, 2, 3, 22];

if (coinsChange(coins) != undefined) {
  console.log(coinsChange(coins));
}

/* ejemplos
[1, 1, 1, 1, 1]
[5, 7, 1, 1, 2, 3, 22]
[1, 5, 1, 1, 1, 10, 15, 20, 100]
[1, 2, 4]
[1, 2, 4, 7]
[1, 2, 4, 9]
*/
