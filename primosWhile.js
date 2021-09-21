// Given a number, returns if it is a prime number.

// let prime =13;
// let i = 2;
// let isPrime = !(prime % i === 0);
// while ((i < prime) && (prime > 1)) {
//     if (!isPrime) {
//         isPrime = false;
//     }
//     i++;
// }
// if (prime == 2) isPrime = true;
// console.log(isPrime);

// Metodo del profe:

let prime = 13;
let i = prime - 1;

while (i > 1) {
  if (prime % i == 0) {
    console.log("Is NOT Prime");
    break;
  }
  i--;
}

if (i == 1) console.log("Is Prime");
