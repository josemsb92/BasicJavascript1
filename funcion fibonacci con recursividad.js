//Ejecutar una funcion que compruebe si un numero dado pertenece a la serie de fibonacci,
//pero usaremos la recursividad de la funcion para ello, en vez de usar un bucle. (Ejecutar la funcion dentro de la funcion)
function fibonacci(number, fibonacci1 = 0, fibonacci2 = 1) {
  let result = fibonacci1 + fibonacci2;
  if (number == result) {
    return true;
  } else if (number < result) {
    return false;
  }  
  return fibonacci(number, fibonacci2, result);
}
console.log(fibonacci(13));


/* 
//Metodo del Profesor
let isFibonacci = function (number, fibonacci1 = 0, fibonacci2 = 1) {
  let nextNumber = fibonacci1 + fibonacci2;
  if (nextNumber == number) {
    return true;
  } else if (nextNumber > number) {
    return false;
  }
  return isFibonacci(number, fibonacci2, nextNumber);
}
let number = 34;
if (isFibonacci(number)) {
  console.log("ES FIB");
} else {
  console.log("NO ES FIB");
}
 */
