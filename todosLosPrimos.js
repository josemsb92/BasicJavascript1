// Print all prime numbers from 2 to a given number with a while loop.

let prime = 13 + 1;
let i = prime - 1;

while (i > 1){
    let j = i-1;
    while ( j > 1){
        if(i % j == 0){
            console.log(`${i} Is NOT a prime number`);
            break
        }

        j--;
    }
    if (j == 1) console.log(`${i} Is a prime number`);
    i--;
}