//Comprobamos si un numero es o no primo con una funcion, de forma recursiva (se llama a ella misma).

function isPrime(n, contador = 2) {
  
  if ((contador < n && n % contador == 0) || n < 1) {
    return false;
    
  } else if (contador >= n) {
    return true;
  }

  return isPrime(n, contador + 1);
}

console.log(isPrime(0));
