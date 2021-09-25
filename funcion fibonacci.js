//Comprobar si un numero dado pertenece a la serie de fibo.
function fibonacci(number) {
  let fibonacci1 = 0;
  let fibonacci2 = 1;
  let result = 0;

  while (result <= number) {
    if (result == number) {
      return true;
    }

    result = fibonacci1 + fibonacci2;
    fibonacci1 = fibonacci2;
    fibonacci2 = result;      
  }
  return false;
}
console.log(fibonacci(13));
