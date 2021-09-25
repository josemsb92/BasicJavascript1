// Print all prime numbers from 2 to a given number with a while loop.

let prime = 8;

while (prime > 1) {
  let j = prime - 1;

  //This second loop will take every value of "i"
  //and will check is that value is or not a Prime number

  while (j > 1) {
    if (prime % j == 0) {
      console.log(`${prime} Is NOT a prime number`);
      break;
    }

    j--;
  }
  if (j == 1) {
    console.log(`${prime} Is a prime number`);
  }
  prime--;
}

// Same but with a "for" loop instead.

/* let prime = 8;

while (prime > 1) {
    
  for(j = prime - 1; j > 1; j--){
    if (prime % j == 0) {
      console.log(`${prime} Is NOT a prime number`);
      break;
    }
  }
  if (j == 1) {
    console.log(`${prime} Is a prime number`);
  }
  prime--;  
} */

