// hash: 954a935d4d1fb16d783d4640e20b9d52, S = 9

function switchArray(array, s) {
  let n = array.length;

  // validación tamaño del arreglo
  if (n > 100 || n < 0) {
    console.log(
      "El arreglo no debe estar vacio y debe tener un tamaño menor o igual a 100"
    );
    return;
  }
  let arrayFiltered = [];

  for (let number of array) {
    if (isNaN(number)) {
      console.log("El arreglo debe contener solo números");
      return;
    }

    let newNumber = "";
    let numberString = number.toString(); // paso a string para poder recorrer cada dígito

    for (let digit of numberString) {
      if (parseInt(digit) < s) {
        newNumber += digit; // adición de los digitos que cumplen con el rango [0,s]
      }
    }

    // validación que no haya quedado vacío el número
    if (newNumber.length > 0) {
      arrayFiltered.push(parseInt(newNumber)); // parseInt para volver al array de números
    }
  }

  let i = 0;
  let j = arrayFiltered.length - 1;

  while (i < j) {
    [arrayFiltered[i], arrayFiltered[j]] = [arrayFiltered[j], arrayFiltered[i]]; // intercambio de posición

    i++;
    j--;
  }

  console.log("Arreglo original", array);
  console.log("Arreglo invertido y filtrado", arrayFiltered);
}

switchArray(
  [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 100,
  ],
  9
);

/* 
  [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99, 100,
  ] validación n <= 100

ejemplos: [10, 20, 30, 40] 
[9] 
[96] 
[95] 
[90, 9, 5, 4, 3, 2, 7, 7, 26, 1]
*/
