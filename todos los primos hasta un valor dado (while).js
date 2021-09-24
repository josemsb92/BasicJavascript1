// Print all prime numbers from 2 to a given number with a while loop.

let prime = 8;
let i = prime;

while (i > 1) {
  let j = i - 1;
  //This second loop will take every value of "i"
  //and will check is that value is or not a Prime number
  while (j > 1) {
    if (i % j == 0) {
      console.log(`${i} Is NOT a prime number`);
      break;
    }

    j--;
  }
  if (j == 1) console.log(`${i} Is a prime number`);
  i--;
}
