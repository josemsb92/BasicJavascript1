function isPrime(number) {
  let result = true;
  for (i = number - 1; i > 1; i--) {
    if (number % i == 0) {
      result = false;
    }
  }
  return result;
}
console.log(isPrime(7));
