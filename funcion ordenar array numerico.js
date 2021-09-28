// //Ordena un array numerico de menor a mayor con una Funcion.
function orderArray(array) {
let temp;
  for (i = 0; i < array.length; i++) {

    for(j = 1; j < array.length; j++) {
      
      if(array[j] < array[j - 1]) {
        temp = array[j -1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
let myArray = [4, 8, 6, 2, 1, 7];
console.log(orderArray(myArray));